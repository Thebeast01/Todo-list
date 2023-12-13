const inputBox  = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

/**
 * Adds a task to the to-do list.
 */
function addTask() {
    if(inputBox.value =='')
    {
        alert("Enter the Task First");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span);
    }
    // To clear the input box :
    inputBox.value = '';
    saveData();
}
// To toggle between the checked and unchecked functionality and remove the task font the list
listContainer.addEventListener('click' ,(e) =>  {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }

}, false)


 // Now to save the task in the local storage

 function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
 }

 function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
 }

 showTask();