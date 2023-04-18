// let tabla = new DataTable('#tabla');
// let table = new DataTable('#example');

$(function () {
    $("#example").DataTable({
      language: {
        url: "//cdn.datatables.net/plug-ins/1.11.2/i18n/es_es.json",
      },
    });
  });



function validar_contacto() {
    // Obtener los valores de los inputs
    var nombre = (document.getElementById("Nombre").value.trim());
    var email = (document.getElementById("Email").value.trim());
    var mensaje = (document.getElementById("Mensaje").value.trim());

    // Validar que los campos no estén vacíos
    if(nombre.length == 0 || email.length == 0 || mensaje.length == 0) {
        alert("Te falta ingresar uno de los datos solicitados.");
    } else {
        alert("El envío ha sido exitoso.");
    }
}