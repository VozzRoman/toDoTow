

const addTask = document.querySelector('.box-red');
const removeTask = document.querySelector('.box-green');
const enterTask = document.querySelector('.input-js');
const todoListContainer = document.querySelector('.todo-list');
console.log(addTask);
console.log(removeTask);


const LOCAL__KEY = 'localKey';
toDoMarkUp();

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
	toDoMarkUp();
}

function toDoMarkUp() {
	const objecData = JSON.parse(localStorage.getItem(LOCAL__KEY));
	todoListContainer.innerHTML = '';
	 const elemnts = objecData.map(({ id, value, cls }) => {
		 return `<li class="${cls}" id="${id}">${value}</li>`
	 }).join('');
	
	todoListContainer.insertAdjacentHTML('beforeend', elemnts);
	
}


todoListContainer.addEventListener('click', crossTask);

function crossTask(e) {
	if (e.target.nodeName === 'LI') {
		const data = JSON.parse(localStorage.getItem(LOCAL__KEY));
		data.find(item => {
			if ( Number(e.target.id) === item.id) {
				item.cls = 'list_done-task';
				console.log(item.cls);
			}
			
		})
		localStorage.setItem(LOCAL__KEY, JSON.stringify(data));
	}
	toDoMarkUp();
}

removeTask.addEventListener('click', onRemoveTask);

function onRemoveTask() {
	const getData = localStorage.getItem(LOCAL__KEY);
	const arrayData = JSON.parse(getData);
	console.log(arrayData);
	// const filtered = arrayData.filter(item => item.cls === 'listItem');
	// console.log(filtered);
	// localStorage.setItem(LOCAL__KEY, JSON.stringify(filtered));
	let newArray = [];
	for (const item of arrayData) {
		if (item.cls === 'listItem') {
			newArray.push(item);
			
		localStorage.setItem(LOCAL__KEY, JSON.stringify(newArray));
		}
		
	}
		toDoMarkUp();
	}
	

