$(document).ready(function(){
    /* Mensaje de Validacion de Conexion con el Archivo */
    console.log("Archivo JavaScript Externo - Links Navbar")
    
    /*Navbar - Inicio*/
    $(".nav-inicio").click(function(){
        $("#contenido").load("../../templates/sections/index.html");
    });

    /*Navbar - Tienda*/
    $(".nav-tienda").click(function(){
        $("#contenido").load("{%%}");
    });

    /*Navbar - Donaciones*/
    $(".nav-donaciones").click(function(){
        $("#contenido").load("{% url 'donaciones' %}");
    });

    /*Navbar - Nosotros*/
    $(".nav-nosotros").click(function(){
        $("#contenido").load("{% url 'nosotros' %}");
    });

    /*Navbar - Contacto*/
    $(".nav-contacto").click(function(){
        $("#contenido").load("{% url 'contactos' %}");
    });

});