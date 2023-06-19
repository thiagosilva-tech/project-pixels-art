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
    for (let index = 0; index < 5; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelBoard.appendChild(pixel);
    }
  }
  for (let index = 0; index < 5; index += 1) {
    createPixels();    
  }

};
