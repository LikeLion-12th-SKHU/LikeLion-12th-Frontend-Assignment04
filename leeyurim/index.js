const form = document.querySelector('.form')
const input = document.querySelector('.input')
const todos = document.querySelector('.todos')
const todoCountElement = document.getElementById('todoCount')

// 할 일 개수 업데이트 함수
const updateTodoCount = () => {
    const todoItems = document.querySelectorAll('.todos li')
    const completedItems = document.querySelectorAll('.todos li.completed')
    const totalCount = todoItems.length
    const completedCount = completedItems.length
    todoCountElement.innerHTML = `현재 완료한 일: ${completedCount} / 전체 할 일의 개수: ${totalCount}`
}

const showAlert = () => {
    alert('최소 한 글자 이상 입력하세요!')
}
const addTodo = () => {
    let todoInput = input.value.trim()
    if (!todoInput) {
        showAlert()
        return
    }
    const $todoElement = document.createElement('li')

    $todoElement.innerHTML = todoInput
    $todoElement.addEventListener('click', () => {
        $todoElement.classList.toggle('completed')
        updateTodoCount() // 할 일 개수 업데이트
    })

    $todoElement.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        $todoElement.remove()
        updateTodoCount() // 할 일 개수 업데이트
    })

    todos.append($todoElement)
    input.value = ''
    updateTodoCount() // 할 일 개수 업데이트
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo()
})
