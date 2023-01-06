$(function() {
      
    $("#tamano").on('change', function() {
      valor = this.value
      // Aqui va la llamada AJAX con JQuery
      
      request = $.ajax({
        type: "POST",
        url: "http://localhost:5000/checksize",
        data: {tamano: this.value},
        success : function(result) {
            $("#resultado_tamano").html(result);  
        }            
      })
 
    });

    $("#pedidos_form").submit(function (e) 
    {
        if($.trim($("#nombre").val()) == '' )
        {
          $("#l_nombre").css("color","#ff0000");
          e.preventDefault();
        }
        else {
          $("#l_nombre").css("color","#000000");
        }
        if($.trim($("#apellidos").val()) == '' )
        {
          $("#l_apellidos").css("color","#ff0000");
          e.preventDefault();
        }
        else {
          $("#l_apellidos").css("color","#000000");
        }
    });

    
  });