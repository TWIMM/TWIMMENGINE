<?php
//framework entry point

require_once __DIR__ . '/../vendor/autoload.php';

use app\AppEngine\Domains\AgencesDeVoyages\BusinessLogic\AgenceDeVoyageController;
use app\Protected\Core\AppCore;
use app\AppEngine\Domains\Users\BusinessLogic\UserController;

$app = new AppCore();
$app->router->get("/", [AgenceDeVoyageController::class, "getHome"]);  //get a view directly by the name   // good approche is $app->router->get("/",  [HomeController::class, "show"]);  
$app->router->get("/get_users_list", [UserController::class, "userList"]); //execute action from controller 

//$app->router->get("/get_destinationlist", [AgenceDeVoyageController::class, "getHome"]); //execute action from controller 

$app->run();
