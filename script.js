window.onload = function () {
  const colors = document.querySelectorAll('.color');
  const drawing = [];
  const dafaultSize = localStorage.getItem('boardSize') || 5;
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
  function createPixels(boardSize) {
    const pixelBoard = document.querySelector('#pixel-board');
    boardSize = boardSize * boardSize;
    for (let i = 0; i < boardSize; i += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.id = i;
      pixel.style.backgroundColor = 'white';
      pixelBoard.appendChild(pixel);
    }
    recoverLocalStorage();
  }
  createPixels(dafaultSize);

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

  function addPixelsEvent() {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].addEventListener('click', (evento) => {
        const pixelClicked = evento.target;
        changePixelColor(pixelClicked);
      });
    }
  }

  addPixelsEvent();

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
    const pixels = document.querySelectorAll('.pixel');
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
      backgroundColor: pixelBackgroundColor,
    });
    const stringDrawing = JSON.stringify(drawing);
    localStorage.setItem('pixelBoard', stringDrawing);
  }

  function recoverLocalStorage() {
    const recoverDrawing = JSON.parse(localStorage.getItem('pixelBoard'));
    const pixels = document.querySelectorAll('.pixel');

    if (recoverDrawing) {
      for (
        let indexRecoverDrawing = 0;
        indexRecoverDrawing < recoverDrawing.length;
        indexRecoverDrawing += 1
      ) {
        for (let indexPixels = 0; indexPixels < pixels.length; indexPixels++) {
          if (
            pixels[indexPixels].id === recoverDrawing[indexRecoverDrawing].id
          ) {
            pixels[indexPixels].style.backgroundColor =
              recoverDrawing[indexRecoverDrawing].backgroundColor;
          }
        }
      }
    }
  }

  // 8 - Crie um input que permita à pessoa usuária preencher um novo tamanho para o quadro de pixels

  const input = document.querySelector('#board-size');
  const btnGenerateBoard = document.querySelector('#generate-board');

  btnGenerateBoard.addEventListener('click', () => {
    const newBoardSize = input.value;
    if (newBoardSize === '') {
      window.alert('Board inválido!');
    } else {
      let newSize = parseInt(newBoardSize);
      newSize = limitPixels(newSize);
      deletePixels();
      createPixels(newSize);
      addPixelsEvent();
      saveBoardSizeInLocalStorage(newSize);
    }
    input.value = '';
  });

  function deletePixels() {
    localStorage.clear();
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].remove();
    }
  }

  // 9 - Crie uma função que limite o tamanho mínimo e máximo do quadro de pixels
  function limitPixels(size) {
    if (size < 5) {
      size = 5;
    } else if (size > 50) {
      size = 50;
    }
    return size;
  }

  // 10 - Crie uma função para manter o tamanho novo do board ao recarregar a página
  function saveBoardSizeInLocalStorage(size) {
    localStorage.setItem('boardSize', size);
  }
};
