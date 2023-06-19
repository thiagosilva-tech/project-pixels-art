window.onload = function () {
  const colors = document.querySelectorAll('.color');
  function changeBackgroundColor() {
    for (let index = 0; index < colors.length; index += 1) {
      const color = colors[index].innerText;
      colors[index].style.backgroundColor = color;
      colors[index].innerText = '';
    }
  }
  changeBackgroundColor();

  function createPixels() {
    const pixelBoard = document.querySelector('#pixel-board');
    for (let index = 0; index < 25; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.id = index;
      pixelBoard.appendChild(pixel);
    }
  }
  createPixels();

  
    for (let index = 0; index < colors.length; index += 1) {
      colors[index].addEventListener('click', (evento) => {
        const clickedColor = evento.target;
        const selectedColor = document.querySelectorAll('.selected');
        for (let index = 0; index < selectedColor.length; index++) {
          selectedColor[index].classList.remove('selected');
        }
        const isSelected = clickedColor.classList.contains('selected');
        if (!isSelected) {
          evento.target.classList.add('selected');
        }        
      })      
    };
};
