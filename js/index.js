

const addTask = document.querySelector('.box-red');
const removeTask = document.querySelector('.box-green');
const enterTask = document.querySelector('.input-js');
console.log(addTask);
console.log(removeTask);

const LOCAL__KEY = 'tasKey';

addTask.addEventListener('click', onAddTask);

function onAddTask() {
	const localData = localStorage.setItem(LOCAL__KEY, enterTask.value);
	console.log(localData);
	const webData = localStorage.getItem(LOCAL__KEY);
	console.log(webData);
}