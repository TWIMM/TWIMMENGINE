<?php

namespace app\AppEngine\Domains\Users\BusinessLogic;

use app\Protected\Core\Response;

class UserController
{
    public Response $ResponseJson;

    public function __construct(Response $response)
    {
        $this->ResponseJson = $response;
    }

    public function userList()
    {
        $userlist = ["Admin" => "TWIMM"];
        return $this->ResponseJson->returnJSONResponse($userlist);
    }
}
