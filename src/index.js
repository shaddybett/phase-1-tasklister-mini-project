document.addEventListener("DOMContentLoaded", () => {
  // your code here


  let submitForm = document.getElementById("create-task-form");
  let textInput = document.getElementById("new-task-description");
  let submitButton = document.getElementById("submit-button");
  let taskList = document.getElementById("tasks");

  

  submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let click = textInput.value;
    console.log(click);

   
    const node = document.createElement("li");

    
    const textnode = document.createTextNode(textInput.value);

    
    node.appendChild(textnode);

    
    taskList.appendChild(node);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    const deleteText = document.createTextNode("  ⨂");
    deleteButton.appendChild(deleteText);
    node.appendChild(deleteButton);

    let identifyDelete = document.getElementsByClassName("delete-btn");
    identifyDelete = Array.from(identifyDelete); 

identifyDelete.forEach((button) => {
  button.addEventListener("click", function () {
    const listItem = button.parentNode; 
    listItem.remove();
     });
    });
  });
});