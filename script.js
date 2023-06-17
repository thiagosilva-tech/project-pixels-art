window.onload = function (params) {
    const colors = document.querySelectorAll('.color');
    function changeBackgroundColor() {
        for (let index = 0; index < colors.length; index += 1) {
            const color = colors[index].innerText;
            colors[index].style.backgroundColor = color;
            colors[index].innerText = '';            
        }
    }
    changeBackgroundColor();
}