<?php

namespace app\AppEngine\AbstractClass;

use Twig\Loader\FilesystemLoader;
use Twig\Environment;

class UtilsBag
{
    private Environment $twig;

    public function __construct()
    {
        // Initialize Twig
        $loader = new FilesystemLoader([__DIR__ . '/../../AppEngine/Ressources/Views', __DIR__ . '/../../AppEngine/Ressources/AppLayouts']);
        $this->twig = new Environment($loader, [
            'cache' => __DIR__ . '/../../AppEngine/Ressources/Cache',
            'debug' => true,
        ]);
    }

    protected function renderView($viewName, $params = ["Admin" => "TWIMM"])
    {
        // Render the view with Twig
        return $this->twig->render($viewName . '.twimm.php', $params);
    }
}
