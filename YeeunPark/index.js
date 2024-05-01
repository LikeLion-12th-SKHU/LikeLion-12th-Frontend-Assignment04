const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todos = document.querySelector(".todos");
const numsDisplay = document.querySelector(".nums");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

const completedNums = () => {
  const completedTodos = document.querySelectorAll(".completed").length;
  const totalTodos = todos.children.length; //자식 태그의 길이 값 받기
  numsDisplay.innerHTML = `${completedTodos} / ${totalTodos}`;
};

const addTodo = (todo) => {
  let todoInput = input.value;

  if (todoInput === "") {
    alert("최소 한 글자 이상 입력하세요!");
    return;
  }

  const $todoElement = document.createElement("li");

  $todoElement.innerHTML = todoInput;
  $todoElement.addEventListener("click", () => {
    $todoElement.classList.toggle("completed");
    completedNums();
  });

  $todoElement.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    $todoElement.remove();
    completedNums();
  });

  todos.append($todoElement);
  input.value = "";
  completedNums();
};
