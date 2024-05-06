const form = document.querySelector('.form')
const input = document.querySelector('.input')
const todos = document.querySelector('.todos')
const completedList = document.querySelector('.completed-list')
const totalList = document.querySelector('.total-list')

let completedTodos = 0 
let totalTodos = 0

form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo()
})

const showTodoList = () => {
    completedList.textContent = completedTodos /* 완료된 할 일의 개수를 표시 */
    totalList.textContent = totalTodos /* 전체 할 일의 개수를 표시*/
}

const addTodo = (todo) => {
    let todoInput = input.value

    /* 빈 문자열을 추가할 시에 경고창을 띄우고 종료 */
    if (todoInput.trim() == "") {
        alert("최소 한 글자 이상 입력하세요!") 
        return
    }

    const $todoElement = document.createElement('li')

    $todoElement.innerHTML = todoInput

    /* 표시된 할 일을 클릭했을 시 완료 상태로 표시하고 할 일의 개수를 업데이트 */
    $todoElement.addEventListener('click', () => {
        $todoElement.classList.toggle('completed')
        if ($todoElement.classList.contains('completed')) {
            completedTodos++ /* 완료된 할 일의 개수 증가 */
        } 
        else {
            completedTodos-- /* 완료된 할 일의 개수 감소 */
        }
        showTodoList()
    })

    /* 표시된 할 일을 우클릭할 시 할 일을 삭제하고 할 일의 개수를 업데이트 */
    $todoElement.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        if ($todoElement.classList.contains('completed')) {
            completedTodos-- /* 할 일의 개수 감소 */
        }
        totalTodos-- /* 전체 할 일의 개수 감소 */

        showTodoList()
        $todoElement.remove()
    })

    todos.append($todoElement)
    input.value = ''

    totalTodos++
    showTodoList()
}




