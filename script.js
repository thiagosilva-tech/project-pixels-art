window.onload = function () {
  const colors = document.querySelectorAll('.color');
  const drawing = [];
  // 1 - Adicione à página o título "Paleta de Cores" e uma paleta contendo quatro cores distintas
  function changeBackgroundColor() {
    for (let index = 0; index < colors.length; index += 1) {
      const color = colors[index].innerText;
      colors[index].style.backgroundColor = color;
      colors[index].innerText = '';
    }
  }
  changeBackgroundColor();

  // 2 - Adicione à página um quadro contendo 25 pixels, sendo que cada elemento do quadro de pixels possua 40 pixels de largura, 40 pixels de altura e seja delimitado por uma borda preta de 1 pixel
  function createPixels() {
    const pixelBoard = document.querySelector('#pixel-board');
    for (let i = 0; i < 25; i += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.id = i;
      pixelBoard.appendChild(pixel);
    }
    recoverLocalStorage()
  }
  createPixels();

  // 4 - Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores
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
    });
  }

  function changePixelColor(pixel) {
    const colorSelectedElement = document.querySelector('.selected');
    if (colorSelectedElement !== null) {
      const colorSelected = colorSelectedElement.style.backgroundColor;
      pixel.style.backgroundColor = colorSelected;
    }
    saveInLocalStorage(pixel);
  }

  // 5 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco
  const btnClear = document.querySelector('#clear-board');
  btnClear.addEventListener('click', () => {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });

  // 6 - Adicione um botão para gerar cores aleatórias para a paleta de cores
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

  // 7 - Crie uma função para salvar e recuperar o seu pixelBoard atual no localStorage
  function saveInLocalStorage(pixel) {
    const pixelPosition = pixel.id;
    const pixelBackgroundColor = pixel.style.backgroundColor;
    drawing.push({
      id: pixelPosition,
      backgroundColor: pixelBackgroundColor
    })
    const stringDrawing = JSON.stringify(drawing);
    localStorage.setItem('pixelBoard', stringDrawing);
  }

  function recoverLocalStorage() {
    const recoverDrawing = JSON.parse(localStorage.getItem('pixelBoard'));
    const pixels = document.querySelectorAll('.pixel');

    if (recoverDrawing) {
      for (let indexRecoverDrawing = 0; indexRecoverDrawing < recoverDrawing.length; indexRecoverDrawing += 1) {
        for (let indexPixels = 0; indexPixels < pixels.length; indexPixels++) {
          if (pixels[indexPixels].id === recoverDrawing[indexRecoverDrawing].id) {
            pixels[indexPixels].style.backgroundColor = recoverDrawing[indexRecoverDrawing].backgroundColor;
          }              
        }
      }
    }   
  }
};

// 8 - 
