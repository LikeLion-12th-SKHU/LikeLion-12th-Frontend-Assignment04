const form = document.querySelector('.form')
const input = document.querySelector('.input')
const todos = document.querySelector('.todos')

const current = document.querySelector('.current-work-num')
const total = document.querySelector('.total-work-num') 

let current_work_num = 0; // 현재 완료한 일에 대한 개수를 표시하는 변수입니다.
let total_work_num = 0; // 전체 할 일에 대한 개수를 표시하는 변수입니다.

form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo()
})

const addTodo = (todo) => {
    let todoInput = input.value
    if (todoInput == "") {  // 만약 입력창의 값이 비어있을 경우 경고창을 띄웁니다.
    alert("할 일을 적어주세요!")
    } else {
        const $todoElement = document.createElement('li');
        $todoElement.innerHTML = todoInput;
        total_work_num += 1;
        total.innerText = total_work_num;

        $todoElement.addEventListener('click', () => {
            if ($todoElement.classList.contains('completed')) {  // 리스트가 이미 완료되어 있다면 완료 표시를 지우고 현재 완료한 일 개수를 하나 뺍니다.
                $todoElement.classList.toggle('completed')
                current_work_num -= 1;
            } else {
                $todoElement.classList.toggle('completed')  // 리스트가 완료되어 있지 않다면 완료 표시를 하고 현재 완료한 일 개수를 하나 더합니다.
                current_work_num += 1;
            }
        
        current.innerText = current_work_num;
        })

        $todoElement.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            $todoElement.remove();
            total_work_num -= 1; 
            total.innerText = total_work_num; //리스트를 지우게 되면 개수를 하나 빼고 전체 할 일에 대한 개수를 업데이트 하여 화면에 출력합니다.

        })

        todos.append($todoElement)
        input.value = '';
    }
}
