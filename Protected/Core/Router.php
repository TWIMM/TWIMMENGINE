<?php

namespace app\Protected\Core;

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

class Router
{


    protected array $routesLists = [];
    public Request $request;

    public function __construct(\app\Protected\Core\Request $request)
    {
        $this->request = $request;
    }

    public function get(string $path, $callback)
    {
        $this->routesLists['get'][$path] = $callback;
    }

    public function resolve()
    {
        $path = $this->request->getPath();
        $method = $this->request->getMethods();
        $callback = $this->routesLists[$method][$path] ?? false;
        if ($callback === false) {
            return "No route found ! ";
            exit;
        }

        if (is_string($callback)) {
            return $this->renderView($callback);
        }
        return call_user_func($callback);
    }

    public function renderView($callback)
    {
        $htmlContent = file_get_contents(__DIR__ . "/../../AppEngine/Ressources/Views/$callback.twimm.php");
        $layout =  file_get_contents(__DIR__ . "/../../AppEngine/Ressources/AppLayouts/home.layout.php");
        $htmlContentPlaceHolded = str_replace('{{content}}', $htmlContent, $layout);

        include_once $htmlContentPlaceHolded;
    }
}
