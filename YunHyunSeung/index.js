// html 내의 요소를 불러옴
const form = document.querySelector('.form')
const input = document.querySelector('.input')
const todos = document.querySelector('.todos')
const p = document.querySelector('#counting')

let totalCount = 0
let completeCount = 0

    // 제출 시 새로고침 방지, addTodo 함수 실행하는 함수의 레퍼런스 정의
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        addTodo()
    })

    // 입력받은 값을 li에 저장하는 함수 addTodo의 레퍼런스 정의
    const addTodo = (todo) => {
        let todoInput = input.value
        const $todoElement = document.createElement('li')

        // 빈 문자열 입력시 빈 칸이 추가되지 않게 하고 경고문 출력
        if (todoInput == ''){
            alert('값을 입력하세요')
        }
        else {

            // 제출할 때마다 counter가 1씩 증가하게 됨
            totalCount += 1
            p.innerHTML = `${completeCount}/${totalCount}`

            // 좌클릭 시 완료되게 하는 함수 todoElement.addEventListener의 레퍼런스 정의 
            $todoElement.innerHTML = todoInput
            $todoElement.addEventListener('click', () => {
                $todoElement.classList.toggle('completed')
                // 값의 클래스가 completed면 1을 더해주고, 그게 아니라면 1을 빼주는 조건문
                if ($todoElement.classList.contains('completed')){
                    completeCount +=  1
                }
                else {
                    completeCount -= 1
                } 
                    p.innerHTML = `${completeCount}/${totalCount}`
                
            })

            //우클릭 시 제거시키는 todoElement.addEventListener 함수의 레퍼런스 정의
            $todoElement.addEventListener('contextmenu', (e) => {
                e.preventDefault()

                // 완료된 것을 지울 때, 미완료된 것을 지울 때의 차이
                if ($todoElement.classList.contains('completed')){
                    completeCount -= 1
                    totalCount -= 1
                }
                else {
                    totalCount -= 1
                }
                p.innerHTML = `${completeCount}/${totalCount}`
                $todoElement.remove()
            })



            //todo 목록에 사용자가 입력한 값 추가
            todos.append($todoElement)

        }
        //입력값 추가 후 입력창 비우기
        input.value = ''
    }
    


