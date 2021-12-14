const buttonDraggable = document.getElementById('buttonDraggable');
const container = document.getElementById('body');
const tela = {'altura': window.outerHeight, 'largura': window.outerWidth}

container.addEventListener('dragover',(e) => {
  if(tela.altura - e.y <= 150 || tela.largura - e.x <= 100 || tela.altura - e.y >= (tela.altura - 100) || tela.largura - e.x >= (tela.largura-100)) {
    buttonDraggable.style.backgroundColor = 'red';
  } else {
    buttonDraggable.style.backgroundColor = 'white';
  }

  buttonDraggable.style.position = "absolute";
  buttonDraggable.style.left = e.x + "px";
  buttonDraggable.style.top = e.y + "px";
})

