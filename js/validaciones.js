function mostraralerta(texto, tipo) {
  const contenedoralerta = document.getElementById("liveAlertPlaceholder");
  contenedoralerta.innerHTML = "";

  const alerta = document.createElement("div");
  alerta.className = "alert alert-" + tipo;
  alerta.textContent = texto;

  contenedoralerta.appendChild(alerta);
}

function validarcorreo(correo) {
  return correo.includes("@") && correo.includes(".");
}

function validarformulario() {
  const nombreInput = document.getElementById("nombre");
  const correoInput = document.getElementById("correo");
  const mensajeInput = document.getElementById("mensaje");

  const nombre = nombreInput.value.trim();
  const correo = correoInput.value.trim();
  const mensaje = mensajeInput.value.trim();

  if (nombre === "" || correo === "" || mensaje === "") {
    mostraralerta("Todos los campos son obligatorios", "danger");
    return false;
  } else if (!validarcorreo(correo)) {
    mostraralerta("Correo no válido", "danger");
    return false;
  } else {
    mostraralerta("Formulario enviado correctamente", "success");

    nombreInput.value = "";
    correoInput.value = "";
    mensajeInput.value = "";

    return true;
  }
}