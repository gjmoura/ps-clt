const changePosition = (id) => {
  const element = document.getElementById(id);
  const tela = window.screen;

  if(!element.style.transform) {
    element.style.transform = `translate(${tela.availWidth - 200}px)`;
  } else {
    element.style.transform = '';
  }
}