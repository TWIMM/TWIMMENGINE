<?php
//framework entry point

require_once __DIR__ . '/../vendor/autoload.php';

use app\Protected\Core\AppCore;
use app\AppEngine\Domains\Users\BusinessLogic\UserController;

$app = new AppCore();
$app->router->get("/", "home");  //get a view directly by the name   // good approche is $app->router->get("/",  [HomeController::class, "show"]);  
$app->router->get("/get_users_list", [UserController::class, "userList"]); //execute action from controller 


$app->run();
