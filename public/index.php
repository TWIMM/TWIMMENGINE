<?php
//framework entry point

require_once __DIR__ . '/../vendor/autoload.php';

use app\Protected\Core\AppCore;


$app = new AppCore();
$app->router->get("/", "home");



$app->run();
