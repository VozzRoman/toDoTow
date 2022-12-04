

const addTask = document.querySelector('.box-red');
const removeTask = document.querySelector('.box-green');
const enterTask = document.querySelector('.input-js');
const todoListContainer = document.querySelector('.todo-list');
console.log(addTask);
console.log(removeTask);


const LOCAL__KEY = 'localKey';

addTask.addEventListener('click', onAddTask);

function onAddTask() {

	const toDo = {
		id: Date.now(),
		value: enterTask.value,
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
	todoListContainer.insertAdjacentHTML('beforeend', toDoMarkUp(data));
}

function toDoMarkUp(objecData) {
	todoListContainer.innerHTML = '';
	 const elemnts = objecData.map(({ id, value }) => {
		 return `<li class="" id="${id}">${value}</li>`
	}).join('');
	return elemnts;
}


