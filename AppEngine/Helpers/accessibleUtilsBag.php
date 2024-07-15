<?php

namespace app\AppEngine\Helpers;

use app\Protected\Core\Router;
use app\Protected\Core\Request;
use app\Protected\Core\Response;


class AccessibleUtilsBag
{
    private Router $router;
    private Response $response;
    private Request $request;


    public function __construct()
    {
        $this->request = new Request();
        $this->response = new Response();
        $this->router = new Router($this->request, $this->response);
    }

    public function render($viewPath, $parameters)
    {

        //use with echo to display

        return $this->router->$this->renderView($viewPath, $parameters);
    }
}
