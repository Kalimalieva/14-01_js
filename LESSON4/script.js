// DOM / document object model
const blocks = document.getElementsByClassName('block')
// console.log(blocks)

const block3 = document.getElementById('block3');
// block3.className = 'changeedClass'// izmeneie nazvanie classa
// block3.classList.add('adfg')// dobavlenie classa
// console.log(block3.classList)// classlist spisok klassov
// block3.classList.remove('this')// udalenie classa
// console.log(block3.classList)
//
// block3.onclick = () => {// onclick pri najatii
//     block3.classList.toggle("active")// to chto est udalyaet, to chto net dobavlyaet
// }

//
// const block = document.querySelector('.block')// vozvrashaet odin teg to est odin selector i vozvrashaet samiy perviy teg
// console.log(block)

// const block = document.querySelectorAll('.block');// vozvrashaet vse selectori to est tegi
// console.log(block)

const button = document.getElementById('button')// sozdaem id
const input = document.getElementById('input')

function createNewDiv() {
    const div = document.createElement('div')// sozdaem teg div
    const deleteButton = document.createElement('button')
    deleteButton.innerText = "delete"// dobavlyaem slovo delete
    deleteButton.onclick = (e) => {// event eto sobitie
        e.path[1].remove()// udalenie slovo
        console.log(e)
    }
    div.setAttribute('class', 'block')
    div.innerText = input.value;
    document.body.append(div)
    input.value = ''// udalenie slovo s inputa
    div.append(deleteButton)
}
button.onclick = createNewDiv;


button.onclick = (event) => {
    console.log(event);
    console.log("Clicked");
}

input.onchange = (event) => {
    console.log(event);
    console.log(event.target)
    console.log(event.target.value)
}

