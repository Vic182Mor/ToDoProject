let inputBoxContainer = document.getElementById("inputBox");

let taskContainer = document.getElementById("itemList");

function addTask(){
    var itemList = document.getElementById("inputBox").value;
    if (itemList.trim() !==""){
        var taskContainer = document.createElement('li');
        taskContainer.appendChild(document.createTextNode(itemList));
        document.getElementById("itemList").appendChild(taskContainer);
        document.getElementById("inputBox").value='';
        saveData();

        taskContainer.addEventListener('click',function(){
            taskContainer.style.textDecoration = "line-through"
            taskContainer.style.color = "red";
            saveData();
        })

        taskContainer.addEventListener('dblclick',function(){
            taskContainer.parentNode.removeChild(taskContainer);
            saveData();
        })

    }
}

function bluffAlert(){
    var theBluff = "So you've called my bluff... I can't do that yet, but thanks for believing in me! T~T ";
    alert(theBluff);
}

function saveData(){
    localStorage.setItem("data", itemList.innerHTML)
}