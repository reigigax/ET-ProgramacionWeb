$(document).ready(function(){
    /* Mensaje de Validacion de Conexion con el Archivo */
    console.log("Archivo JavaScript Externo - Carba Dinamica Navbar")
    
    /*Navbar - Inicio*/
    $(".nav-inicio").click(function(){
        $("#contenido").load("/tienda/index");
    });

    /*Navbar - Tienda*/
    $(".nav-tienda").click(function(){
        $("#contenido").load("/tienda/productos");
    });

    /*Navbar - Donaciones*/
    $(".nav-donaciones").click(function(){
        $("#contenido").load("/tienda/donaciones");
    });

    /*Navbar - Nosotros*/
    $(".nav-nosotros").click(function(){
        $("#contenido").load("/tienda/nosotros");
    });

    /*Navbar - Contacto*/
    $(".nav-contacto").click(function(){
        $("#contenido").load("/tienda/contactos");
    });

});