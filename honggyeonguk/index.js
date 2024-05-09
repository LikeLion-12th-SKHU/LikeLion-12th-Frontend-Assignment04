// const form = document.querySelector('.form')
// const input = document.querySelector('.input')
// const todos = document.querySelector('.todos')

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     addTodo()
// })

// const addTodo = (todo) => {
//     let todoInput = input.value
//     const $todoElemnet = document.createElement('li')

//     $todoElemnet.innerHTML = todoInput
//     $todoElemnet.addEventListener('click', () => {
//         $todoElemnet.classList.toggle('completed')
//     })

//     // 우클릭시 작동
//     $todoElemnet.addEventListener('contextmenu', (e) => {
//         e.preventDefault()
//         // 이벤트의 기본동작을 막아주는 함수

//         $todoElemnet.remove()
//     })

//     todos.appendChild($todoElemnet)
//     input.value = ''
// }

const form = document.querySelector('.form')
const input = document.querySelector('.input')
const todos = document.querySelector('.todos')

const count = document.querySelector('.count')

let todoArray = []

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(input.value == ''){
        alert("최소 한 글자 이상 입력하세요!");
    }
    else{
        addTodo()
    }
})

const addTodo = (todo) => {
    let todoInput = input.value
    const $todoElement = document.createElement('li')

    $todoElement.innerHTML = todoInput
    $todoElement.addEventListener('click', () => {
        $todoElement.classList.toggle('completed')
        countTodo()
    })

    $todoElement.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        $todoElement.remove()

        for(let i = 0; i < todoArray.length; i++) {
            if (todoArray[i] === $todoElement) {
                todoArray.splice(i, 1);
            }
        }
        
        countTodo()
    })


    todoArray.push($todoElement)

    todos.append($todoElement)
    input.value = ''
    countTodo()
}

const countTodo = () => {
    let completedCount = 0

    todoArray.forEach(todo => {
        if (todo.classList.contains('completed')) {
            completedCount++
        }
    })

    let totalCount = todoArray.length

    count.textContent = completedCount + '/' + totalCount
}






