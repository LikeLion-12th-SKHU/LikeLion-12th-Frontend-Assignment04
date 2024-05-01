const form = document.querySelector('.form')
//document.querySelector() 는 HTML 문서에서 클래스가 form인 요소를 찾아서 가져온다.
//아래도 동일하게 작동이 된다.
const input = document.querySelector('.input')
const todos = document.querySelector('.todos')
const todoCount = document.getElementById('todoCount')

let totalTodos = 0; 
//⭐️⭐️⭐️⭐️⭐️⭐️⭐️totalTodos를 변수로 선언, 0으로 초기화 하여 사용하였습니다.


// form 요소에 submit 이라는 이벤트 리스너를 추가한다 
// 이벤트가 발생하면 제출을 방지하고 addTodo() 함수를 호출한다.
form.addEventListener('submit', (e) => {
    e.preventDefault() //이벤트의 기본 동작을 중단하는 메서드이다.
    addTodo()
})
// addTodo 함수를 정의
const addTodo = (todo) => {
    let todoInput = input.value.trim(); 
    //⭐️⭐️⭐️⭐️⭐️⭐️⭐️ trim() 메서드를 양끝의 공백을 제거하는 메서드이다 ( 구글링 해서 사용하였습니다. )
    // 사용자가 입력한 input 값을 todoInput 값에 넣는다.
  
    //⭐️⭐️⭐️⭐️⭐️⭐️⭐️
    if( todoInput === "" ){ 
        // "===" 는 타입과 값이 둘 다 일치할 경우 ( 안전빵으로 사용 ㅎ )
        alert("최소 한 글자 이상 입력하세요!");
        return;
    }
    
    const $todoElement = document.createElement('li')
    // 새로운 할 일을 표시할 li 요소를 생성하여 $todoElement 변수에 할당합니다
    // createElement 는 HTML 요소를 생성하는 메서드이다 이 메서드를 사용하면 동적으로 HTML 요소를 만들 수 있다.
    // 여기서 "동적" 이란?
    //  - HTML 문서가 로드된 후에 JAVASCRIPT 코드가 실행될 때 JAVASCRIPT 에서 HTML 요소를 생성하는 것을 의미한다
    //    페이지가 로딩 되는 시점에는 해당 요소가 HTML 에 직접 존재하지 않지만 JAVASCRIPT 를 사용하여 필요한 요소를 생성하는.

    // 쉽게 말해서 JAVASCRIPT에서 li 라는 요소를 HTML에 만들어줌.

    $todoElement.innerHTML = todoInput
    // 일단 todoInput은 18번째 줄 코드에서 사용자가 입력한 일을 나타내는 것이고
    // innerHTML 은 HTML 요소의 내부 HTML 코드를 나타내는 속성이다 
    // 위에서 li 라는 요소를 createElement 를 이용하여 만들어줬고 그 li 라는 속성의 내부 코드를 설정하기 위한 준비이다.
    // 요약 - $todoElement.innerHTML 은 HTML 요소 (위에서 설정한 li 요소) 내부 코드를 설정하는 속성이다 

    $todoElement.addEventListener('click', () => {
        $todoElement.classList.toggle('completed')
        updateTodoStatus(); 
        //⭐️⭐️⭐️⭐️⭐️⭐️⭐️ 완료한 일의 수와 전체 할 일의 수를 업데이트 하는 함수
    })
    // $todoElement 라는 요소에 'click' EventListener 를 추가함. 이벤트가 발생하면 이 함수가 실행됨
    // classList.toggle('completed') 를 실행함으로써 $todoElement 라는 요소를 클릭하면 completed 클래스를 toggle 한다.
    // 클릭 후에 값을 작성을 하면 꺼지고 안 하면 켜지는 그런 역할을 한다. ( 토글 )

    $todoElement.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        $todoElement.remove()
        updateTodoStatus(); //⭐️⭐️⭐️⭐️
    })
    // contextmenu 는 HTML 요소에서 발생하는 이벤트 종류 중 하나임. click 과 같은 느낌
    // 사용자가 오른쪽 마우스 버튼을 눌렀을 떄 사용되는 이벤트로 우클릭을 사용하여 remove 즉 지울 수 있다.
    // 위에서 사용하였고 지금도 또 나온 e.preventDefault() 메서드 다시 한 번 설명하자면 이벤트의 기본 동작을 중지하는 메서드이다
    
    todos.append($todoElement)
    input.value = ''
    // input.value = '' 는 사용자가 값을 입력하고 Enter 키를 쳤을 때 값이 비워지게 하는 동작을 수행하기 위함
    totalTodos++; 
    //⭐️⭐️⭐️⭐️⭐️⭐️⭐️코드가 모두 실행되고 마지막에 totalTodos를 증가시켰습니다 
    //위에서 0으로 초기화 해놨음

    // $todoElement 라는 요소를 todos 라는 부모 요소에 추가하는 역할을 한다.
    //append 메서드란? 
    //  - 요소나 텍스트를 추가하는 역할을 한다 메서드를 사용하면 요소 목록 끝에 새로운 요소나 텍스트를 추가할 수 있다.
    //ex) todos.append(mubin1,mubin2,mubin3) 와 같이 여러 개의 자식 요소를 한 번에 추가할 수 있다

    updateTodoStatus(); //⭐️⭐️⭐️⭐️
}
const updateTodoStatus = () => {
    const newTodo = todos.querySelectorAll('li.completed').length;
    //⭐️⭐️⭐️⭐️
    //li 요소 내부의 클래스가 completed 로 성정된 모든 요소를 가져옴
    //그리고 그 요소들의 개수를 셈
    todoCount.textContent = `${newTodo} / ${totalTodos}`;
}

//⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
// updateTodoStatus(); 라는 함수를 구글링을 통해서 접하게 되었는데요!
// 코드 중간 중간에 사용한 이유는 할 일이 추가되었을 때 화면에 업데이트를 하기 위함입니다
// 중간 중간에 넣음으로써 실시간으로 정보를 제공할 수 있습니다!!
// 굳이 귀찮게 여러번 사용하지 않아도 되는 함수이지만 편의성을 위해서 사용한다고 들었습니다
// 인용한 문구가 많지만 그래도 사용하는 이유는 이해했습니다.

//html을 사용하지 않고 js 에서 모두 해결하려고 했지만 너무 버겁더라구요ㅠ 
//js 만으로 과제들을 해결할 수 있을지 궁금해요..





