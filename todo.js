let inputBoxContainer = document.getElementById("inputBox");

let taskBoxContainer = document.getElementById("itemList");

function addTask(){
    var itemList = document.getElementById("inputBox").value;
    if (itemList.trim() !==""){
        var taskBoxContainer = document.createElement('li');
        taskBoxContainer.appendChild(document.createTextNode(itemList));
        document.getElementById("itemList").appendChild(taskBoxContainer);
        document.getElementById("inputBox").value='';
    }
}