function mostrarFecha() {
  const ahora = new Date();
  const diasSemana = [
    "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
  ];
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const diaSemana = diasSemana[ahora.getDay()];
  const dia = ahora.getDate();
  const mes = meses[ahora.getMonth()];
  const anio = ahora.getFullYear();

  const hora = ahora.getHours().toString().padStart(2, "0");
  const minutos = ahora.getMinutes().toString().padStart(2, "0");
  const segundos = ahora.getSeconds().toString().padStart(2, "0");

  const fechaActual = `Hoy es ${diaSemana}, ${dia} de ${mes} de ${anio}, y son las ${hora} horas, ${minutos} minutos con ${segundos} segundos`;

  const fechaElement = document.getElementById("fechaActual");
  if (fechaElement) {
    fechaElement.innerText = fechaActual;
  }
}

function iniciarReloj() {
  mostrarFecha();
  setInterval(mostrarFecha, 1000);
}

