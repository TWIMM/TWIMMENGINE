{% extends "home.layout.php" %}

{% block content %}
<h1>Hello, this is your list {{ Admin }}</h1>
<ul>
    {% for user in users %}
    <li>{{ user.name }} (Age: {{ user.age }})</li>
    {% endfor %}
</ul>
{% endblock %}