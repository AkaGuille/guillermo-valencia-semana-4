const inputTask = document.getElementById('input-task');
const toDoList = document.getElementById('todo-list');

function addItem() {
    console.log("Hola");
    const itemList = document.createElement('section');
    itemList.textContent = inputTask.value;
    itemList.className = "item";
    toDoList.append(itemList);
    inputTask.value = '';
}