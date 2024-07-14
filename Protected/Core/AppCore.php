<?php

namespace app\Protected\Core;

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);


class AppCore
{

    public Router $router;
    public Request $request;

    public function __construct()
    {
        $this->request = new Request();

        $this->router = new Router($this->request);
    }


    public function run()
    {
        $this->router->resolve();
    }
}
