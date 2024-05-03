// .: HTML, CSS, javascript에서 클래스를 나타내는 기호 
const form = document.querySelector('.form')
const input = document.querySelector('.input')
const todos = document.querySelector('.todos')
const completed = document.querySelector('.completed')
const total = document.querySelector('.total')

// 완료된 todo 요소의 개수를 저장하는 변수 completedTodos 선언
let completedTodos = 0;
// 전체 todo 요소의 개수를 저장하는 변수 totalTodos 선언
let totalTodos = 0;

// form 클릭 시 폼 제출
form.addEventListener('submit', (e) => {
    // 클릭에 대한 기본 동작 중지
    e.preventDefault()
    // 입력받은 값이 빈문자일 경우 
    // trim 함수를 쓴 이유: 입력한 문자열의 앞 뒤 공백은 제거 
    if (input.value.trim() == '') {
        // 경고창 띄우고 리턴
        alert("최소 한 글자 이상 입력하세요!")
        return
    }
    // todo 요소 추가하는 함수 addTodo 실행
    addTodo()
})

// todo 요소 추가하는 함수 addTodo (매개변수: todo)
const addTodo = (todo) => {
    // 입력받은 값을 변수 todoInput에 저장
    let todoInput = input.value
    // DOM에 새로운 리스트 항목 li 추가하여 변수 $todoElement에 저장
    // $todoElement 앞에 $ 붙이는 이유: 변수가 DOM 요소이기 때문
    const $todoElement = document.createElement('li') 


    // 입력받은 값을 todo 요소의 innerHtml에 저장
    $todoElement.innerHTML = todoInput
    // todo 요소 좌클릭 시 완료된 항목 표시/해제
    $todoElement.addEventListener('click', () => {
        // 람다함수 (todo 요소에 completed 클래스 있는지 확인)
        // 없으면 추가/있으면 제거
        $todoElement.classList.toggle('completed')
        // todo 요소에 completed 클래스 포함할 경우
        // contains 함수가 필요한 이유: todo의 class 이름에 completed 문자열 포함되었는지 확인하기 위해
        if ($todoElement.classList.contains('completed')) {
            // 완료한 todo 요소의 개수 1씩 증가
            completedTodos++
        // 포함하지 않을 경우
        } else {
            // 완료한 todo 요소의 개수 1씩 감소
            completedTodos--
        }
        // 완료된 todo 요소의 개수와 전체 todo 요소의 개수 계산하는 함수 TodosCount()  
        TodosCount()
    })

    // todo 요소 우클릭 시 항목 제거
    $todoElement.addEventListener('contextmenu', (e) => {
        // 우클릭에 대한 기본 동작 중지
        e.preventDefault()
        // todo 요소 제거
        $todoElement.remove()
        // 전체 todo 요소의 개수 1씩 감소
        totalTodos--
        // todo 요소에 completed 클래스 포함할 경우
        if ($todoElement.classList.contains('completed')) {
            // 완료한 todo 요소의 개수 1씩 감소
            completedTodos--
        }
        // 완료된 todo 요소의 개수와 전체 todo 요소의 개수 계산하는 함수 TodosCount()  
        TodosCount()
    })

    // todo의 마지막 자식에 todo 요소 추가
    todos.append($todoElement)
    // 전체 todo 요소의 개수 1씩 증가
    totalTodos++
    // 완료된 todo 요소의 개수와 전체 todo 요소의 개수 계산하는 함수 TodosCount()  
    TodosCount()
    // 입력받는 값을 비움
    input.value = ''
}

// 완료된 todo 요소의 개수와 전체 todo 요소의 개수 계산하는 함수 TodosCount()  
const TodosCount = () => {
    // HTML 엘리먼트의 innerHTML을 사용하여 내용을 업데이트
    completed.innerHTML = `${completedTodos}`;
    total.innerHTML = `${totalTodos}`;
}
