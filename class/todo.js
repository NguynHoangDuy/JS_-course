const btnAdd = document.querySelector(".btn-add");
let btnRemove = document.querySelectorAll(".btn-remove");
const inputTodo = document.querySelector(".input-todo");
const contentTodo = document.querySelector(".content-todo");

class Todo {
  constructor(todoName) {
    this.todoName = todoName;
  }

  gettodoName() {
    return this.todoName;
  }

  settodoName(newName) {
    this.todoName = newName;
  }
}

const todo1 = new Todo("Hôm nay tui đi coi mắt");
console.log(todo1.gettodoName());

class TodoList {
  constructor(listTodo) {
    this.listTodo = listTodo;
  }
  getTodoList() {
    return this.listTodo;
  }
  setTodoList(newList) {
    this.listTodo = newList;
  }
  addList(todo) {
    this.listTodo.push(todo);
  }
  removeList(index) {
    this.listTodo.splice(index, 1);
  }
}
const listTodo = new TodoList([]);
if (localStorage.getItem("todoList")) {
  listTodo.setTodoList(JSON.parse(localStorage.getItem("todoList")));
  listTodo.getTodoList().forEach((item) => {
    contentTodo.insertAdjacentHTML(
      "beforeend",
      `<div class="todo-item">
      <p class="todo-desc">
      ${item.todoName}
    </p>
    <button class="btn btn-remove">Remove</button>
    </div>`
    );
  });
}

btnAdd.addEventListener("click", () => {
  let todo = new Todo(inputTodo.value);
  listTodo.addList(todo);
  localStorage.setItem("todoList", JSON.stringify(listTodo.getTodoList()));
  // contentTodo.insertAdjacentHTML(
  //   "beforeend",
  //   `<div class="todo-item">
  //   <p class="todo-desc">
  //   ${todo.gettodoName()}
  //   </p>
  //   <button class="btn btn-remove">Remove</button>
  //   </div>`
  // );
  location.reload();
});

// btn;

btnRemove = document.querySelectorAll(".btn-remove");
btnRemove.forEach((item, index) => {
  item.addEventListener("click", () => {
    listTodo.removeList(index);
    localStorage.setItem("todoList", JSON.stringify(listTodo.getTodoList()));
    contentTodo.removeChild(document.querySelectorAll(".todo-item")[index]);
    location.reload();
  });
});
