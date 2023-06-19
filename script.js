window.onload = function () {
  const colors = document.querySelectorAll('.color');
  const desenho = [];
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
    for (let i = 0; i < 25; i += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.id = i;
      const desenhoLocalStorage = JSON.parse(
        localStorage.getItem('pixelBoard')
      );
      if (desenhoLocalStorage !== null) {
        for (let j = 0; j < desenhoLocalStorage.length; j += 1) {
          if (desenhoLocalStorage[j].posicao === pixel.id) {
            pixel.style.backgroundColor = desenhoLocalStorage[j].cor;
          }
        }
      }
      pixelBoard.appendChild(pixel);
    }
  }
  createPixels();

  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', (evento) => {
      const clickedColor = evento.target;
      const isSelected = clickedColor.classList.contains('selected');

      if (isSelected) {
        clickedColor.classList.remove('selected');
      } else {
        const selectedColor = document.querySelector('.selected');
        if (selectedColor) {
          selectedColor.classList.remove('selected');
        }
        clickedColor.classList.add('selected');
      }
    });
  }

  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', (evento) => {
      const pixelClicked = evento.target;
      changePixelColor(pixelClicked);
      saveInLocalStorage(pixelClicked);
    });
  }

  function changePixelColor(pixel) {
    const colorSelected =
      document.querySelector('.selected').style.backgroundColor;
    if (colorSelected !== null) {
      pixel.style.backgroundColor = colorSelected;
    }
  }

  function saveInLocalStorage(pixel) {
    const cor = pixel.style.backgroundColor;
    const posicao = pixel.id;
    for (let index = 0; index < desenho.length; index += 1) {
      if (desenho[index].posicao === posicao) {
        desenho.splice(index, 1);
      }
    }
    desenho.push({ posicao, cor });
    localStorage.setItem('pixelBoard', JSON.stringify(desenho));
  }

  const btnClear = document.querySelector('#clear-board');
  btnClear.addEventListener('click', () => {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
      localStorage.clear();
    }
  });

  const btnRandomColor = document.querySelector('#button-random-color');
  btnRandomColor.addEventListener('click', () => {
    for (let index = 0; index < colors.length; index += 1) {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      const colorRandom = `#${red.toString(16)}${green.toString(
        16
      )}${blue.toString(16)}`;
      colors[index].style.backgroundColor = colorRandom;
    }
  });
};
