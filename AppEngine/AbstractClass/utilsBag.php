<?php

namespace app\AppEngine\AbstractClass;


class UtilsBag
{
    protected function processTemplateVariables($content, $params)
    {
        return preg_replace_callback(
            '/\{\{\s*\$(\w+)\s*\}\}/',
            function ($matches) use ($params) {
                $variableName = $matches[1];
                return isset($params[$variableName]) ? htmlspecialchars($params[$variableName], ENT_QUOTES, 'UTF-8') : '';
            },
            $content
        );
    }

    protected function renderView($viewName, $params =  ["Admin" => "TWIMM"])
    {
        return $this->includeRequiredPageInLayout($viewName, "home", $params);
    }

    protected function includeRequiredPageInLayout($viewName, $layout, $params)
    {
        // Extract the parameters into individual variables
        extract($params);

        // Capture the view's HTML content
        ob_start();
        include __DIR__ . "/../../AppEngine/Ressources/Views/$viewName.twimm.php";
        $htmlContent = ob_get_clean();

        // Capture the layout's HTML content
        $layoutContent = file_get_contents(__DIR__ . "/../../AppEngine/Ressources/AppLayouts/$layout.layout.php");
        $htmlContent = $this->processTemplateVariables($htmlContent, $params);
        // Replace the placeholder with the view content
        $htmlContentPlaceHolded = str_replace('{{content}}', $htmlContent, $layoutContent);

        return $htmlContentPlaceHolded;
    }
}
