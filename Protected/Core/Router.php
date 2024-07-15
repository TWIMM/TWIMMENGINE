<?php

namespace app\Protected\Core;

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

class Router
{


    protected array $routesLists = [];
    public Request $request;
    public Response $response;


    public function __construct(Request $request, Response $response)
    {
        $this->request = $request;
        $this->response = $response;
    }

    public function get(string $path, $callback)
    {
        $this->routesLists['get'][$path] = $callback;
    }


    public function post(string $path, $callback)
    {
        $this->routesLists['post'][$path] = $callback;
    }

    public function resolve()
    {
        $path = $this->request->getPath();
        $method = $this->request->getMethods();
        $callback = $this->routesLists[$method][$path] ?? false;
        if ($callback === false) {
            $this->response->setStatusCode(404);
            return $this->renderView('route_not_found');
            exit;
        }

        if (is_string($callback)) {
            return $this->renderView($callback);
        }

        if (is_array($callback)) {
            [$class, $method] = $callback;
            if (class_exists($class)) {
                $controller = new $class($this->response);
                if (method_exists($controller, $method)) {
                    return call_user_func([$controller, $method]);
                }
            }
        }
        return call_user_func($callback);
    }

    public function renderView($viewName, $params =  ["Admin" => "TWIMM"])
    {
        return $this->includeRequiredPageInLayout($viewName, "home", $params);
    }

    public function includeRequiredPageInLayout($viewName, $layout, $params)
    {
        // Extract the parameters into individual variables
        extract($params);

        // Capture the view's HTML content
        ob_start();
        include __DIR__ . "/../../AppEngine/Ressources/Views/$viewName.twimm.php";
        $htmlContent = ob_get_clean();

        // Capture the layout's HTML content
        $layoutContent = file_get_contents(__DIR__ . "/../../AppEngine/Ressources/AppLayouts/$layout.layout.php");
        $htmlContent = $this->processTemplateVariables($htmlContent, $params);
        // Replace the placeholder with the view content
        $htmlContentPlaceHolded = str_replace('{{content}}', $htmlContent, $layoutContent);

        return $htmlContentPlaceHolded;
    }


    // change echo function to {{}} for more readability

    private function processTemplateVariables($content, $params)
    {
        return preg_replace_callback(
            '/\{\{\s*\$(\w+)\s*\}\}/',
            function ($matches) use ($params) {
                $variableName = $matches[1];
                return isset($params[$variableName]) ? htmlspecialchars($params[$variableName], ENT_QUOTES, 'UTF-8') : '';
            },
            $content
        );
    }
}
