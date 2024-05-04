const form = document.querySelector('.form')
const input = document.querySelector('.input')
const todos = document.querySelector('.todos')
const num = document.querySelector(".num")

let todoCnt = 0 //할일 개수 
let completedCnt = 0 //완료한 일 개수 

form.addEventListener('submit', (e) => {
    e.preventDefault() // 이벤트의 기본 동작을 막아주는 함수
    addTodo()
})

const addTodo = (todo) => {
    let todoInput = input.value
    const $todoElement = document.createElement('li') //li요소 생성 

    if(todoInput === ''){ // 빈 문자열이면 
        let index = alert("한 글자 이상 입력하세요!") // 경고창을 띄우기 
        return 
    }

    $todoElement.innerHTML = todoInput 
    $todoElement.addEventListener('click', () => {
        $todoElement.classList.toggle('completed')
        todoNum()//완료된 일 , 할일 개수 업데이트 
    })

    $todoElement.addEventListener('contextmenu', (e) => { //contextmenu는 오른쪽 클릭했을 때 
        e.preventDefault()
        $todoElement.remove() //말 그대로 삭제 
        todoCnt-- //삭제하면 할일 개수도 감소 
        if($todoElement.classList.contains('complete')){ //완료된 일이 있는 지 확인하고 
            completedCnt--//삭제하면 완료된 일 개수도 감소 
        }
        todoNum() //완료된 일 , 할일 개수 업데이트 
    })

    todos.append($todoElement)
    input.value = ''

    todoCnt++
    todoNum()
    
}
const todoNum = () => {
    const completedCnt = document.querySelectorAll("li.completed").length//완료된 일 길이 가져옴 
    num.innerHTML = completedCnt + '/' + todoCnt  //화면에 표시하기 
}
