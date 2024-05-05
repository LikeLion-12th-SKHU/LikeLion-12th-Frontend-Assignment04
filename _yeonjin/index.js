const form = document.querySelector('.form')
const input = document.querySelector('.input')
const todos = document.querySelector('.todos')
const todoCount = document.querySelector('#todo-count');

const updateStats = () => {
    const total = todos.children.length; 
    const completed = Array.from(todos.children).filter(li => li.classList.contains('completed')).length; 
    todoCount.textContent = `Completed: ${completed} / Total: ${total}`;
};

form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo()
})

const addTodo = (todo) => {
    let todoInput = input.value.trim();
    if (todoInput == ''){
        alert('비어있다!!');
        return;


    }

    const $todoElement = document.createElement('li')
    $todoElement.textContent = todoInput
    $todoElement.addEventListener('click', () => {
        $todoElement.classList.toggle('completed')
        updateStats(); 
    })

    $todoElement.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        $todoElement.remove()
        updateStats();
    })

    todos.append($todoElement)
    input.value = '';
    updateStats();
}

document.addEventListener('DOMContentLoaded', updateStats);
