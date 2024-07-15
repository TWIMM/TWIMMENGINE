<?php

namespace app\AppEngine\Helpers;

use app\AppEngine\AbstractClass\UtilsBag;
use app\Protected\Core\Router;
use app\Protected\Core\Request;
use app\Protected\Core\Response;

class AccessibleUtilsBag extends UtilsBag
{
    private Router $router;
    private Response $response;
    private Request $request;

    public function __construct()
    {
        // Initialize $request and $response first
        $this->request = new Request();
        $this->response = new Response();

        // Initialize $router after $request and $response
        $this->router = new Router($this->request, $this->response);
    }

    public function render($viewPath, $parameters)
    {
        // Use $this->router to call renderView after initialization
        return $this->router->renderView($viewPath, $parameters);
    }
}
