var date = document.querySelector(".date");
var addTODO = document.querySelector(".add-todo");
var inputValue = document.querySelector("input");
var list = document.querySelector("ul");
var clearAll = document.querySelector(".clearAll");
var allItems = document.querySelectorAll(".item");
var id = 0;

let today = new Date();
let options = {weekday:'long' , month:'short' , day:'numeric'};

date.innerText = today.toLocaleDateString("en-us" , options);

let todoList = [];

addTODO.addEventListener("click" , function(){

  if(inputValue.value !== ""){
    const item = document.createElement("li");
    item.classList.add("item");
    item.innerHTML = '<i class="fa fa-circle-thin checkbox" job="complete" status="unchecked" id="'+ id + '"'+ '></i><p class="todo">'+ inputValue.value + '</p><i class="fa-solid fa-trash delete" job="delete"></i>';
    list.appendChild(item);
    todoList.push({
      id: id,
      content: inputValue.value,
      status: "unchecked"
    });
    localStorage.setItem("TODO" , JSON.stringify(todoList));
    inputValue.value = "";
    id = id + 1;
  }
});
$("body").keypress(function(event){
  if(event.which == 13){
    if(inputValue.value !== ""){
      const item = document.createElement("li");
      item.classList.add("item");
      item.innerHTML = '<i class="fa fa-circle-thin checkbox" job="complete" status="unchecked" id="'+ id + '"'+ '></i><p class="todo">'+ inputValue.value + '</p><i class="fa-solid fa-trash delete" job="delete"></i>';
      list.appendChild(item);
      todoList.push({
        id: id,
        content: inputValue.value,
        status: "unchecked"
      });
      localStorage.setItem("TODO" , JSON.stringify(todoList));
      inputValue.value = "";
      id = id + 1;
    }
  }
});

clearAll.addEventListener("click" , function(){

  // clearAll.style.transform = "rotate(120deg)";

  while (list.hasChildNodes()){
    list.removeChild(list.firstChild);
  }
  todoList = [];
  localStorage.setItem("TODO" , JSON.stringify(todoList));
});

list.addEventListener("click" , function(event){

  if(event.target.attributes.job.value == "complete"){
    if(event.target.attributes.status.value == "unchecked"){
      event.target.parentNode.querySelector(".checkbox").classList.remove("fa" , "fa-circle-thin");
      event.target.parentNode.querySelector(".checkbox").classList.add("fa-solid" , "fa-circle-check");
      event.target.parentNode.querySelector(".todo").classList.toggle("todo2");
      event.target.attributes.status.value = "checked";

      for(let i in todoList){
        if(todoList[i].id == event.target.attributes.id.value){
          todoList[i].status = "checked";
          localStorage.setItem("TODO" , JSON.stringify(todoList));
          console.log(todoList[i]);
        }
      }
    }
    else if(event.target.attributes.status.value == "checked"){
      event.target.parentNode.querySelector(".checkbox").classList.remove("fa-solid" , "fa-circle-check");
      event.target.parentNode.querySelector(".checkbox").classList.add("fa" , "fa-circle-thin");
      event.target.parentNode.querySelector(".todo").classList.toggle("todo2");
      event.target.attributes.status.value = "unchecked";

      for(let i in todoList){
        if(todoList[i].id == event.target.attributes.id.value){
          todoList[i].status = "unchecked";
          localStorage.setItem("TODO" , JSON.stringify(todoList));
          console.log(todoList[i]);
        }
      }
    }
  }
  else if(event.target.attributes.job.value == "delete"){

    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    var deleteTodoData  = event.target.parentNode.querySelector(".todo").innerText;

    for(let i in todoList){
      if(todoList[i].content == deleteTodoData){
        todoList.splice(i , 1);
        localStorage.setItem("TODO" , JSON.stringify(todoList));
      }
    }
  }
});

document.body.onload = function(){

  todoList = JSON.parse(localStorage.getItem("TODO"));
  id = todoList.length;
  for(let i in todoList){
    if(todoList[i].status == "checked"){
      const item = document.createElement("li");
      item.classList.add("item");
      item.innerHTML = '<i class="fa-solid fa-circle-check checkbox" job="complete" status="'+ todoList[i].status + '" id="' + todoList[i].id +'"' +'></i><p class="todo todo2">'+ todoList[i].content + '</p><i class="fa-solid fa-trash delete" job="delete"></i>';
      list.appendChild(item);
    }
    else if(todoList[i].status == "unchecked"){
      const item = document.createElement("li");
      item.classList.add("item");
      item.innerHTML = '<i class="fa fa-circle-thin checkbox" job="complete" status="'+ todoList[i].status + '" id="' + todoList[i].id +'"' +'></i><p class="todo">'+ todoList[i].content + '</p><i class="fa-solid fa-trash delete" job="delete"></i>';
      list.appendChild(item);
    }
  }

};
