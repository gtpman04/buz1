let btn=document.getElementById('btn');

btn.onclick = function() {
alert('I am pressed for time!');

changeText();
}


function changeText(){
btn.innerText="that tickles";

changeStyle();
changeBorder();

}

function changeStyle(){

    btn.style.backgroundColor="green";

}

function changeBorder(){

    btn.style.borderColor="yellow";
}

const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
.forEach((item, index) => {
    item.onmouseover = () => {
        menu.dataset.activeIndex = index;

    }

})