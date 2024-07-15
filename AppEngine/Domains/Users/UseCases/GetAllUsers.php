<?php


namespace app\AppEngine\Domains\Users\UseCases;


trait GetAllUsers
{
    public function getAllUsers()
    {
        return
            $userlist = [
                "Admin" => "TWIMM",
                "users" => [
                    ["name" => "User 1", "age" => 30],
                    ["name" => "User 2", "age" => 25]
                ]
            ];
        //return $this->ResponseJson->returnJSONResponse($userlist);
    }
}
