

const addTask = document.querySelector('.box-red');
const removeTask = document.querySelector('.box-green');
const enterTask = document.querySelector('.input-js');
console.log(addTask);
console.log(removeTask);



addTask.addEventListener('click', onAddTask);

function onAddTask() {

	const toDo = {
		id: Date.now(),
		value: enterTask.value,
	}
	let data = JSON.parse(localStorage.getItem('localKey'));
	if (!data) {
		data = [];
	}
	data.push(toDo);
	console.log(data);
	const toStringData = JSON.stringify(data);
	console.log(toStringData);
	const localData = localStorage.setItem('localKey', toStringData);
	console.log(localData);



	
}