const addProduct = () => {
  const taskInput = document.getElementById("taskInput") 
  const taskValue = taskInput.value;
  
  const newTask = document.createElement("li")
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"

  newTask.appendChild(checkbox)
  newTask.appendChild(document.createTextNode(taskValue));  
  
  const taskList = document.getElementById("newList")
  taskList.appendChild(newTask)

  taskInput.value = "";
};
