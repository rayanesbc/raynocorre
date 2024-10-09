function toggleMode() {
  const body = document.body;

  body.classList.toggle('light');

  const img = document.querySelector('#profile img');

  if (body.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png');
    img.setAttribute('alt', 'Foto de Rayane Costa sorrindo.');
  } else {
    img.setAttribute('src', './assets/avatar.png');
    img.setAttribute('alt', 'Foto de Rayane Costa correndo.');
  }
}
