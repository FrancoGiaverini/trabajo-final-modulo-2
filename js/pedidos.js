$(document).ready(function () {
  function mostrarPedidos() {
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    const $lista = $('#listaPedidos ul');
    $lista.empty();

    if (pedidos.length === 0) {
      $lista.append('<li class="list-group-item">No hay pedidos realizados aún.</li>');
    } else {
      pedidos.forEach((pedido, i) => {
        $lista.append(
          `<li class="list-group-item">#${i + 1} - Producto: <strong>${pedido.producto}</strong>, Cantidad: <strong>${pedido.cantidad}</strong></li>`
        );
      });
    }
  }

  mostrarPedidos();

  $('#formPedido').on('submit', function (e) {
    e.preventDefault();

    const producto = $('#producto').val();
    const cantidad = $('#cantidad').val();

    if (producto && cantidad > 0) {
      const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
      pedidos.push({ producto, cantidad });
      localStorage.setItem('pedidos', JSON.stringify(pedidos));

      $('#formPedido').hide();
      $('#mensajePedido').removeClass('d-none').hide().fadeIn();

      mostrarPedidos();
    }
  });

  $('#otroPedido').on('click', function () {
    $('#formPedido')[0].reset();
    $('#formPedido').show();
    $('#mensajePedido').fadeOut();
  });
});
