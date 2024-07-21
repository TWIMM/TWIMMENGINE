<?php

namespace app\Protected\Core;

use Symfony\Component\HttpFoundation\JsonResponse;



class Response
{

    public static function returnJSONResponse($data, $statusCode)
    {

        $response = new JsonResponse($data, $statusCode);

        return $response;
    }

    public function setStatusCode($statusCode)
    {
        return http_response_code($statusCode);
    }
}
