<?php

namespace app\Protected\Core;



class Request
{
    public function getPath()
    {
        $path = $_SERVER['REQUEST_URI'] ?? "/";
        $position = strpos($path, '?');
        //echo $position;
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
}
