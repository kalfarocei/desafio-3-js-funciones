const pintar = (elemento, color = 'green') => {
    elemento.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

ele.addEventListener("click", () => {
    pintar(ele, 'yellow');
});

pintar(ele);