const newTodoInput = document.getElementById('newTodo');
const addBtn = document.getElementById('addBtn')
const todoList = document.getElementById('todoList')

function  addTodo(){

    const newTodoText = newTodoInput.value;
    newTodoInput.value ='';

    const ListItem = document.createElement('li');
    const completeCheckbox = document.createElement('input');
    const todoText = document.createElement('span');
    const deleteBtn = document.createElement('button');


    completeCheckbox.type = 'checkbox';


    ListItem.appendChild(completeCheckbox);
    ListItem.appendChild(todoText);
    ListItem.appendChild(deleteBtn);

    todoText.textContent = newTodoText;
    deleteBtn.textContent = 'Delete';

    todoList.appendChild(ListItem);


    deleteBtn.addEventListener('click',function(){
        todoList.removeChild(ListItem);
    })
}


addBtn.addEventListener('click',addTodo)