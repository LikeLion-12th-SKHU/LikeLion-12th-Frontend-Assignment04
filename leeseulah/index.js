const form = document.querySelector('.form')
const input = document.querySelector('.input')
const todos = document.querySelector('.todos')
const completedTodos = document.querySelector('.completed-todos');
const totalTodos = document.querySelector('.total-todos');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoInput = input.value.trim();
    if (todoInput !== '') {
        addTodo(todoInput);
    } else {
        alert('최소 한 글자 이상 입력하세요!');
    }
});

const addTodo = (todo) => {
    const $todoElement = document.createElement('li');

    $todoElement.innerHTML = todo;
    $todoElement.addEventListener('click', () => {
        $todoElement.classList.toggle('completed');
        updateTodoCount();
    });

    $todoElement.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        $todoElement.remove();
        updateTodoCount();
    });

    todos.append($todoElement);
    input.value = '';
    updateTodoCount();
};

const updateTodoCount = () => {
    const completedCount = document.querySelectorAll('.completed').length;
    const totalCount = todos.children.length;
    completedTodos.textContent = `${completedCount}/`;
    totalTodos.textContent = `${totalCount}`;
};