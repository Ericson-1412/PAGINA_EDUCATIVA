// Función para mostrar una alerta con SweetAlert
function mostrarAlerta() {
    Swal.fire({
        title: '¿Listo para ingresar?',
        text: 'Estás a punto de ingresar a la plataforma educativa.',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, ingresar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = '../Propio.html'; // Redirige a Propio.html
        }
    });
}

function volverMenu() {
    Swal.fire({
      title: '¿Estás seguro de volver al menú principal?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, volver',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Perfecto',
          'Saliendo del aula virtual',
          'success'
        ).then(() => {
          window.location.href = '../Propio.html'; // Redirige a la página principal
        });
      }
    });
  }

  function mostrarAlertaYRedirigir() {
    Swal.fire({
      title: 'Bienvenido a la Plataforma',
      text: '¡Prepárate para comenzar tu aprendizaje!',
      icon: 'success',
      confirmButtonText: '¡Adelante!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirige después de cerrar la alerta
        window.location.href = '../Estudiante/Panel.html';
      }
    });
  }

  