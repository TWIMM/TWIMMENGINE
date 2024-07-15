<?php

namespace app\Protected\Core;

use Symfony\Component\HttpFoundation\Request as RequestProcessor;

class Request
{
    public function getPath()
    {
        $path = $_SERVER['REQUEST_URI'] ?? "/";
        $position = strpos($path, '?');
        if ($position === false) {
            return $path;
        }
        return substr($path, 0, $position);
    }

    public function getMethods()
    {
        $method = strtolower($_SERVER['REQUEST_METHOD']);
        return $method;
    }

    public function getBody()
    {
        $request = new RequestProcessor(
            $_GET,
            $_POST,
            [],
            $_COOKIE,
            $_FILES,
            $_SERVER
        );

        $contentType = $request->headers->get('Content-Type');


        // Debugging: Print the request body data

        if ($this->getMethods() === "get") {
            //pass query params
            return $request->query;
        }
        if ($this->getMethods() === "post") {
            if (strpos($contentType, 'application/json') !== false) {
                // Decode JSON body
                $jsonContent = json_decode($request->getContent(), true);
                return $jsonContent ?? [];
            } else {
                // Handle form data
                return $request->request->all();
            }
        }
    }
}
