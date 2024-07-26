{% extends "home.layout.php" %}

{% block content %}
<style>
    #root {
        overflow-x: hidden;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
    }

    body {
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;

        font-style: normal;
    }
</style>
<div id="root"></div>
<!-- Charge notre composant React -->
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

<script src="agence_dist/bundle.js"></script>

{% endblock %}