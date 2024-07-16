<?php


namespace app\AppEngine\Domains\AgencesDeVoyages\UseCases;


trait GetAllAgencesDeVoyages
{
    public function getAllAgencesDeVoyages()
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
