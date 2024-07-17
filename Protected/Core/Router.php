<?php

namespace app\Protected\Core;

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

use app\AppEngine\AbstractClass\UtilsBag;

class Router extends UtilsBag
{


    protected array $routesLists = [];
    public Request $request;
    public Response $response;


    public function __construct(Request $request, Response $response)
    {
        parent::__construct();
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
            // $this->response->setStatusCode(404);
            //send all request to react app base file loader index.html to solve 
            //if dnt need or dont using react template just display 404 page aka route_not_found.twimm.php
            return $this->renderView('home');
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
}
