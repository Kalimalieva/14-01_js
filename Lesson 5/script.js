// const list = [];
//
//
// const addButton = document.getElementById('button')
// const input = document.getElementById('input')
//
//
// function render() {
//     const mainDiv = document.createElement('div')
//     mainDiv.setAttribute('class', 'list')
//
//     for (let i = 0; i < list.length; i++){
//         const div = document.createElement('div')
//         div.setAttribute('class', 'todoBlock')
//         const p = document.createElement('p')
//         p.innerText = list[i].text;
//         div.append(p)
//
//         const buttons = document.createElement('div')
//         buttons.setAttribute('class', 'actions')//setatribute nazvanie classa i ee nazvanie
//         const changeButton = document.createElement('button')
//         changeButton.innerText = "change"
//
//         const deleteButton = document.createElement('button')
//         deleteButton.setAttribute('class', 'delete')
//         deleteButton.innerText = "delete"
//         buttons.append(changeButton, deleteButton)
//         div.append(buttons)
//         mainDiv.append(div)
//     }
//     const form = document.querySelector('.form')
//     document.querySelector('.list').remove()// dlya udalenie listov kogda po2 po 3 vihodit
//     form.append(mainDiv)
// }// vse tegi napisali v js
//
// addButton.onclick = function () {
//     const obj = {
//         id: list.length+1,
//         text: input.value
//     }
//     list.push(obj);
//     console.log(list)
//     render();
// }

// creating the main container
let main = document.createElement("main");
main.className = "container";
document.body.append(main);

// creating greating text
let projectName = document.createElement("h1");
projectName.innerHTML = "To do List";
main.append(projectName);


// creating block for future list
let listBlock = document.createElement("div");
listBlock.className = "mainBlock";
main.append(listBlock);


// creating a block-parent for creating a new to do list
let firstDiv = document.createElement("div");
listBlock.append(firstDiv);


// creating input for new to do
let textIn = document.createElement("input");
textIn.className = "textIn";
firstDiv.append(textIn);


// creating input with type of date
let dateInput = document.createElement("input");
dateInput.setAttribute("type", "date");
firstDiv.append(dateInput);

// creating add button
let addBtn = document.createElement("button");
addBtn.innerHTML = "Add";
addBtn.id = "addBtn";
firstDiv.append(addBtn);


// add to do
// addBtn.setAttribute('onclick', "addTodo()")   ???? ??????????????????????????
//creating a list container for future items
let list = document.createElement("ul");
list.id = "list";
listBlock.append(list);



const createTodoItem = (newTask, deadline) => {  // kdghkjhgfkre   394793753
	let li = document.createElement('li')

	let deleteBtn = document.createElement('button')
	deleteBtn.id = 'deleteBtn'
	deleteBtn.innerHTML = 'delete'
	deleteBtn.addEventListener('click', onDelete)

	let checkbox = document.createElement('input')
	checkbox.type = 'checkbox'
	checkbox.addEventListener('change', onDone)

	let txt = document.createTextNode(`${newTask} ${deadline}`)
	let label = document.createElement('label')
	label.className = 'task'
	label.append(txt)

	li.append(label)
	li.append(checkbox)
	li.append(deleteBtn)
	list.append(li)
}

function onAdd() {
	let newTask = textIn.value
	if (newTask !== '') {
        createTodoItem(newTask, dateInput.value)//1
        textIn.value = '';
	}
}


function onDelete(e) {
  e.target.parentElement.remove(); /// li - text check button delete
}


function onDone(e) {
  console.log(e.target.checked);
  if (e.target.checked) { // true false
    e.target.parentElement.classList.add("done"); //true -
  } else {
    e.target.parentElement.classList.remove("done"); // false
  }
}

addBtn.addEventListener("click", onAdd);

