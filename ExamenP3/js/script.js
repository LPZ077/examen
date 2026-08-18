// ---- Elemento innovador: cambio de tema claro/oscuro ----
function toggleTheme() {
  document.body.classList.toggle('dark');
  const btn = document.getElementById('theme-toggle');
  if (document.body.classList.contains('dark')) {
    btn.textContent = 'Modo claro';
    localStorage.setItem('tema', 'dark');
  } else {
    btn.textContent = 'Modo oscuro';
    localStorage.setItem('tema', 'light');
  }
}

// Recordar preferencia del usuario al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  const temaGuardado = localStorage.getItem('tema');
  if (temaGuardado === 'dark') {
    document.body.classList.add('dark');
    document.getElementById('theme-toggle').textContent = 'Modo claro';
  }
  animarContador();
});

// Contador animado de litros purificados
function animarContador() {
  const el = document.getElementById('litros');
  let valor = 0;
  const meta = 24850;
  const incremento = Math.ceil(meta / 100);
  const intervalo = setInterval(() => {
    valor += incremento;
    if (valor >= meta) {
      valor = meta;
      clearInterval(intervalo);
    }
    el.textContent = valor.toLocaleString();
  }, 20);
}

// Validación del formulario de contacto
function validarFormulario(event) {
  event.preventDefault();
  let valido = true;

  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const mensaje = document.getElementById('mensaje');

  document.getElementById('error-nombre').style.display = 'none';
  document.getElementById('error-email').style.display = 'none';
  document.getElementById('error-mensaje').style.display = 'none';

  if (nombre.value.trim() === '') {
    document.getElementById('error-nombre').style.display = 'block';
    valido = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    document.getElementById('error-email').style.display = 'block';
    valido = false;
  }

  if (mensaje.value.trim() === '') {
    document.getElementById('error-mensaje').style.display = 'block';
    valido = false;
  }

  if (valido) {
    alert('¡Gracias ' + nombre.value + '! Tu mensaje fue enviado (simulación).');
    event.target.reset();
  }

  return false;
}