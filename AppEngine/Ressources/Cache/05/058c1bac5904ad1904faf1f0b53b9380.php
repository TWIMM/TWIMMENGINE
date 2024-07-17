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

/* home.twimm.php */
class __TwigTemplate_76a60118fb73d480b700b6efecdf8b99 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'content' => [$this, 'block_content'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "home.layout.php";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $this->parent = $this->loadTemplate("home.layout.php", "home.twimm.php", 1);
        yield from $this->parent->unwrap()->yield($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        yield "<div id=\"root\"></div>
<!-- Charge notre composant React -->
<script src=\"https://unpkg.com/react@18/umd/react.development.js\" crossorigin></script>
<script src=\"https://unpkg.com/react-dom@18/umd/react-dom.development.js\" crossorigin></script>

<script src=\"agence_dist/bundle.js\"></script>

";
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "home.twimm.php";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable()
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo()
    {
        return array (  47 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends \"home.layout.php\" %}

{% block content %}
<div id=\"root\"></div>
<!-- Charge notre composant React -->
<script src=\"https://unpkg.com/react@18/umd/react.development.js\" crossorigin></script>
<script src=\"https://unpkg.com/react-dom@18/umd/react-dom.development.js\" crossorigin></script>

<script src=\"agence_dist/bundle.js\"></script>

{% endblock %}", "home.twimm.php", "C:\\xampp\\htdocs\\TWIMMENGINE\\AppEngine\\Ressources\\Views\\home.twimm.php");
    }
}
