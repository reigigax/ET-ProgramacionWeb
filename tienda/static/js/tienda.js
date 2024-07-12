function cargaJsonTienda(){
    /* Mensaje de Validacion de Conexion con el Archivo */
    console.log("Archivo JavaScript Externo Tienda/Productos - Conectado")

    $.ajax({
        url: "/tienda/productos",
        type: "get",
        dataType: "json",
        success: function(response){
            console.log(response)
        },
        error: function(error_msg){
            console.log(error_msg)
        }
        
    })
}

$(document).ready(function(){
    cargaJsonTienda();
});