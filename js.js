let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('Container_toDo');
let inputField = document.getElementById('inputField');


addToDoButton.addEventListener('click', function(){

    let paragraph = document.createElement('p');
    paragraph.classList.add('add-something');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener('click', function(){
     paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener('dblclick', function(){
     toDoContainer.removeChild(paragraph);
    })

})
