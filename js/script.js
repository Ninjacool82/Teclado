var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var error = document.getElementById("error");
var textarea = document.getElementById("textarea");

error.style.color = "red";

function enviarFormulario() {
    console.log("Enviando formulario ..");

    var mensajesError = [];
    if (nombre.value === null || nombre.value === "") {
        mensajesError.push("Ingresa tu nombre");
    }
    if (correo.value === null || correo.value === "") {
        mensajesError.push("Ingresa tu correo");
    }
    if (textarea.value === null || textarea.value === "") {
        mensajesError.push("Ingresa tu mensaje");
    }
    error.innerHTML = mensajesError.join(", ");
    return false;
}
