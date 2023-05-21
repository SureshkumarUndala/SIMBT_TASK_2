const todo_input_field = document.querySelector(".todos-field")
const add_todo = document.querySelector(".addButton")
const todo_container = document.querySelector(".todo_items_container")
const fromEl = document.querySelector("form")

// add todo item
const addtodo = (e) => {
  e.preventDefault()
  if(todo_input_field.value.trim().length ===0){
    return alert("please enter todo item")
  }
  //display to DOM
  const todo_items_box= document.createElement("div")
  todo_items_box.setAttribute("class", "todo_items")
  const todo_task = todo_input_field.value     
  console.log(todo_task)            //get the item from input field
  const task = document.createElement("p")       // create paragraph element 
  task.innerText = todo_task
  todo_items_box.appendChild(task)   // append task item to todo_items
  //create todoaction container add append actions like complete,edit,delete to it
  const todo_actions_container = document.createElement("div")
  todo_actions_container.setAttribute("class", "todo_actions")

  todo_actions_container.innerHTML = ` <i class="fa fa-pencil-square-o" aria-hidden="true" onclick="editTodo(this)"}></i>
                                     <i class="fa fa-check" aria-hidden="true" onclick="completetodo(this)"}></i>
                                       <i class="fa fa-trash" aria-hidden="true"} onClick="deletetodo(this)"></i>`
  todo_items_box.appendChild(todo_actions_container)
  todo_container.appendChild(todo_items_box)
  todo_input_field.value = ""



  
 }
  
//delete todoitem
function deletetodo(e){
  e.parentNode.parentNode.remove()

}

// edit todoitem
function editTodo(e){

  todo_input_field.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
 
 
}

//complete todo
function completetodo(e){
  console.log("completetodo")
  e.parentElement.previousElementSibling.setAttribute("class","completed")
  console.log( e.parentElement.previousElementSibling)



}


add_todo.addEventListener("click", addtodo)