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
        $this->request = new Request();
        $this->response = new Response();
        $this->router = new Router($this->request, $this->response);
    }

    public function render($viewPath, $parameters)
    {
        return $this->router->renderView($viewPath, $parameters);
    }

    public function getRequestBody()
    {
        $body = $this->request->getBody();

        // Debugging: Print the request body data

        return $body;
    }
}
