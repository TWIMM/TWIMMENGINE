{% extends "home.layout.php" %}

{% block content %}
<h1>Hello, this is your admin {{ Admin }}</h1>
<ul>
    <div id="home_component"></div>
    <!-- Charge notre composant React -->
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

    <script src="js/UserList.bundle.js"></script>

</ul>
{% endblock %}