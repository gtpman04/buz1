window.onclick = makeBtn;
let btn = document.getElementById('btn');

btn.onclick = function () {
    alert('I am pressed for time!');

    changeText();
}

function changeText() {
    btn.innerText = "that tickles";

    changeStyle();
    changeBorder();
    makeBtn();
}

function changeStyle() {
    btn.style.backgroundColor = "green"; 
}

function changeBorder() {
    btn.style.borderColor = "yellow";
}

function makeBtn() {
    let element = document.createElement("button");
    element.innerText = "Hello World";
    element.classList.add("btnbtn");
    // element.addEventListener("click", colorChange);
    document.getElementById('srvbtn').append(element);
} 




const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
        }
    })   