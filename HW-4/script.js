
let div = document.createElement("div")
div.className = "counter"
let blocks  = document.createElement("div")
blocks.className = "blocks"
let button = document.createElement("button")
button.innerHTML = "+"
let num = document.createElement("span")
num.innerHTML = "0"
let button1 = document.createElement("button")
button1.innerHTML = "-"


document.body.append(div)
div.append(blocks)
blocks.append(button)
blocks.append(num)
blocks.append(button1)


let counter = 0;

function oneCount(){
    counter++;
    num.innerText = counter;
}

function twoCount() {
   counter--;
   num.innerText = counter;
}

button.addEventListener("click", oneCount);
button1.addEventListener("click", twoCount);

