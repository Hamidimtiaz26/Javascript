const todoForm = document.querySelector("#formfortodo");
const todoInput = document.querySelector("#todoinput");
let todoList = document.querySelector(".todolist");
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (todoInput.value !== "") {
    addTodo();
  }
  todoInput.value = "";
})

function addTodo() {
  const li = document.createElement("li");
  const todoInputValue = todoInput.value;
  li.innerHTML = `
  <span>${todoInputValue}</span>
  <div class="buttons">
  <i class="fa-solid fa-pen-to-square edit button"></i>
  <i class="fa-solid fa-trash delete button"></i>
  <div>
  `
  todoList.append(li);
  console.log("here li is", li);
  console.log(todoList);

  // todoList.addEventListener("click", (e) => {
  //   if (e.target.className === "edit") {
  //     editTodo(li);
  //   }
  // })
}


todoList.addEventListener("click", (e) => {

  if (e.target.className.includes("edit")) {
    console.log(e.target);
    const buttonsDiv = e.target.parentElement;
    const li = buttonsDiv.parentElement;
    console.log(li);
    // todoList = li.parentElement;
    const newForm = document.createElement("form");
    newForm.classList.add("editForm");
    newForm.innerHTML = `
    <input class="input edit-input" type="text">
    <button type="submit" class="saveBtn">Save</button>
    `
    todoList.replaceChild(newForm, li);
    const input = newForm.querySelector(".input");
    buttonsDiv.remove();
    const span = li.querySelector("span");
    input.value = span.innerText.trim();
    saveEditTodo(newForm, input);
  }
  else if (e.target.className.includes("delete")) {
    const buttonsDiv = e.target.parentElement;
    const li = buttonsDiv.parentElement;
    li.remove();
  }
  else if (e.target.tagName.toLowerCase() === "span") {

    const span = e.target;
    const li = span.parentElement;
    console.log(li);
    const buttonsDiv = li.querySelector(".buttons");
    console.log(buttonsDiv)
    const buttons = buttonsDiv.querySelectorAll("i");
    console.log(buttons);

    span.classList.toggle("completed");
    if (span.className.includes("completed")) {
      for (let button of buttons) {
        button.classList.add("disabled")
      }
    }
    else {
      for (let button of buttons) {
        button.classList.remove("disabled")
      }
    }

  }
})




function saveEditTodo(form, input) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(form)
    const inputValue = input.value;
    const newLi = document.createElement("li");
    newLi.innerHTML = `
    <span>${inputValue}</span>
    <div class="buttons">
    <i class="fa-solid fa-pen-to-square edit button"></i>
    <i class="fa-solid fa-trash delete button"></i>
   </div>
    `
    console.log(newLi);
    todoList.replaceChild(newLi, form);
  })
}