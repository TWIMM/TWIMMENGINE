<?php

namespace app\AppEngine\Domains\AgencesDeVoyages\BusinessLogic;

use app\AppEngine\Helpers\AccessibleUtilsBag;
use app\AppEngine\Domains\Users\UseCases\GetAllUsers;
use app\Protected\Core\Response;
use Inertia\Inertia;

class AgenceDeVoyageController extends AccessibleUtilsBag
{
    use GetAllUsers;

    public Response $ResponseJson;

    public function __construct(Response $response)
    {
        parent::__construct(); // Call the parent constructor to initialize dependencies
        $this->ResponseJson = $response;
    }

    public function getHome()
    {
        //  $requestBody = $this->getRequestBody();

        // Debugging: Print the request body data

        //if want to check file uploaded , check count($requestBody['files]) directly

        // return $requestBody;

        //return $this->renderView("home", ['Admin' => "Admin"]);


        return Inertia::render('Home', [
            'data' => [
                'message' => 'Hello, World!'
            ]
        ]);
    }
}
