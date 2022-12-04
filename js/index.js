

const addTask = document.querySelector('.box-red');
const removeTask = document.querySelector('.box-green');
const enterTask = document.querySelector('.input-js');
const todoListContainer = document.querySelector('.todo-list');
console.log(addTask);
console.log(removeTask);


const LOCAL__KEY = 'localKey';
toDoMarkUp(JSON.parse(localStorage.getItem(LOCAL__KEY)));

addTask.addEventListener('click', onAddTask);


function onAddTask() {

	const toDo = {
		id: Date.now(),
		value: enterTask.value,
		cls: 'listItem',
	}
	let data = JSON.parse(localStorage.getItem(LOCAL__KEY));
	if (!data) {
		data = [];
	}
	data.push(toDo);
	console.log(data);
	const toStringData = JSON.stringify(data);
	console.log(toStringData);
	const localData = localStorage.setItem(LOCAL__KEY, toStringData);
	console.log(localData);
	enterTask.value = '';
	toDoMarkUp(data);
}

function toDoMarkUp(objecData) {
	todoListContainer.innerHTML = '';
	 const elemnts = objecData.map(({ id, value, cls }) => {
		 return `<li class="${cls}" id="${id}">${value}</li>`
	 }).join('');
	
	todoListContainer.insertAdjacentHTML('beforeend', elemnts);
	
}


todoListContainer.addEventListener('click', crossTask);

function crossTask(e) {
	if (e.target.className === 'listItem') {
		const data = JSON.parse(localStorage.getItem(LOCAL__KEY));
		// data[id].cls = 'list_done-task';
		console.log(data);
	}
}
