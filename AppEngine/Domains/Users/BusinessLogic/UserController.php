<?php

namespace app\AppEngine\Domains\Users\BusinessLogic;

use app\AppEngine\Helpers\AccessibleUtilsBag;
use app\AppEngine\Domains\Users\UseCases\GetAllUsers;
use app\Protected\Core\Response;

class UserController extends AccessibleUtilsBag
{
    use GetAllUsers;

    public Response $ResponseJson;

    public function __construct(Response $response)
    {
        parent::__construct(); // Call the parent constructor to initialize dependencies
        $this->ResponseJson = $response;
    }

    public function userList()
    {
        $userLists = $this->getAllUsers();
        echo $this->render("userlist", $userLists);
    }
}
