<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* home.layout.php */
class __TwigTemplate_db58d2fbe3d845fd8946ef662b2f731f extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'content' => [$this, 'block_content'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        yield "<!doctype html>
<html lang=\"en\">

<head>
  <!-- Required meta tags -->
  <meta charset=\"utf-8\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">

  <!-- Bootstrap CSS -->

  <title>Twimm PHP</title>
</head>

<body>
  ";
        // line 15
        yield from $this->unwrap()->yieldBlock('content', $context, $blocks);
        // line 16
        yield "  <!-- Optional JavaScript; choose one of the two! -->
  <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->

</body>

</html>";
        return; yield '';
    }

    // line 15
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "home.layout.php";
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo()
    {
        return array (  67 => 15,  57 => 16,  55 => 15,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!doctype html>
<html lang=\"en\">

<head>
  <!-- Required meta tags -->
  <meta charset=\"utf-8\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">

  <!-- Bootstrap CSS -->

  <title>Twimm PHP</title>
</head>

<body>
  {% block content %}{% endblock %}
  <!-- Optional JavaScript; choose one of the two! -->
  <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->

</body>

</html>", "home.layout.php", "C:\\xampp\\htdocs\\TWIMMENGINE\\AppEngine\\Ressources\\AppLayouts\\home.layout.php");
    }
}
