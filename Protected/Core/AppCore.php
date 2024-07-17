<?php

namespace app\Protected\Core;

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

use app\Protected\Core\Response;


class AppCore
{

    public Router $router;
    public Request $request;
    public Response $response;


    public function __construct()
    {
        $this->request = new Request();
        $this->response = new Response();

        $this->router = new Router($this->request, $this->response);
    }


    public function run()
    {
        echo $this->router->resolve();  //display web 
        //print_r($this->router->resolve());   //dsplay api & web
        //return $this->router->resolve();  //display api 

    }
}
