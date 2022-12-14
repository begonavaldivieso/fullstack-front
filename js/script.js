function iniciar()
{
    document.getElementById('pedidos_form').addEventListener('submit',validar);
    document.getElementById('nombre').addEventListener('focus', limpiar_fondo);
    document.getElementById('apellidos').addEventListener('focus', limpiar_fondo);
}
function validar(evento)
{ 
    if (document.getElementById("nombre").value.trim() == '')
    {        
        document.getElementById("l_nombre").style.color="#ff0000";
        evento.preventDefault();
    }
    if (document.getElementById("apellidos").value.trim() == '')
    {
        document.getElementById("l_apellidos").style.color="#ff0000";
        evento.preventDefault();
    }
}

function limpiar_fondo(evento)
{
    document.getElementById("l_"+ evento.target.id).style.color="#000000";
}