const form = document.querySelector('.form')
const input = document.querySelector('.input')
const todos = document.querySelector('.todos')
const nowTodosCount = document.querySelector('.now-todos') // 해야 할 일
const completeCount = document.querySelector('.complete-todos') // 완료된 일

let nowTodos = 0; // 해야 할 일
let completeTodos = 0; // 완료된 일

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (input.value == '') { // 빈 문자열 입력시 경고창 
        alert('입력하십시요')
    } else {
        addTodo()
        updateNowTodos() // 할 일 추가 후 해야 할 일의 개수 업데이트
    }
})

const addTodo = (todo) => {
    let todoInput = input.value
    const $todoElement = document.createElement('li')

    $todoElement.innerHTML = todoInput
    $todoElement.addEventListener('click', () => {
        $todoElement.classList.toggle('completed')
        updateCompleteTodos() // 클릭할 때마다 완료된 일 업데이트
    })

    $todoElement.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        $todoElement.remove()
        nowTodos-- // 해야 할 일 삭제시 감소
        updateCompleteTodos() // 우클릭할 때마다 완료된 일 업데이트
        updateNowTodos() // 해야 할 일의 개수 업데이트
    })

    todos.append($todoElement)
    input.value = ''
    nowTodos++
    updateNowTodos() // 할 일 추가 후 해야 할 일 업데이트
}

// 해야 할 일 업데이트 함수
const updateNowTodos = () => {
    nowTodosCount.innerHTML = `해야 할 일: ${nowTodos}` // 해야 할 일의 개수를 표시
}

// 완료된 일 업데이트 함수
const updateCompleteTodos = () => {
    const completedElements = document.querySelectorAll('.completed')
    completeTodos = completedElements.length // 완료된 일 개수 업데이트
    completeCount.innerHTML = `완료된 일: ${completeTodos}` // 완료된 일 개수 표시
}