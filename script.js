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
      pixels[index].addEventListener('click', (evento) =>{
        const pixelClicked = evento.target;
        changePixelColor(pixelClicked);
      })      
    }

    function changePixelColor(pixel) {
      const colorSelected = document.querySelector('.selected').style.backgroundColor;
      console.log(colorSelected);
      if (colorSelected !== null) {
        pixel.style.backgroundColor = colorSelected;
      } else if(colorSelected === null) {
        pixel.style.backgroundColor = 'white';
      }
    }
};
