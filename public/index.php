<?php
//framework entry point

require_once __DIR__ . '/../vendor/autoload.php';

use app\Protected\Core\AppCore;
use app\AppEngine\Domains\Users\BusinessLogic\UserController;

$app = new AppCore();
$app->router->get("/", "home");
$app->router->get("/get_users_list", [UserController::class, "userList"]);


$app->run();
