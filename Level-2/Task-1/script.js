var inputValue = document.querySelector(".input");
var answerValue = document.querySelector(".answer");

document.querySelector(".input").addEventListener('input' , function(){
  for(let i in inputValue.value){
    console.log("h");
  }
})
function buttons(num){
  inputValue.value += num;
};
function AC(){
  inputValue.value = "";
  answerValue.value = "";
}
function Clear(){
  inputValue.value = inputValue.value.slice(0 , inputValue.value.length-1);
}
function calculation(){
  var original = inputValue.value;
  for(let x in inputValue.value){
    if(inputValue.value[x] == "÷"){
      inputValue.value = inputValue.value.slice(0 , x++) + "/" + inputValue.value.slice(x++);
    }
    if(inputValue.value[x] == "×"){
      inputValue.value = inputValue.value.slice(0 , x++) + "*" + inputValue.value.slice(x++);
    }
  }
  answerValue.value = eval(inputValue.value);
  inputValue.value = original;
}
$("body").keypress(function(event){
  if(event.which == 13){
    calculation();
  }
});
document.querySelectorAll("button").forEach((element) => {
  element.addEventListener("click" , ()=>{
    element.style.backgroundColor = '#F279BC';
    if(element.className == "division" || element.className == "multiplication" || element.className == "addition" || element.className == "subtraction" || element.className == "equal"){
      setTimeout(function(){
        element.style.backgroundColor = '#44424C';
      },100)
    }
    else{
      setTimeout(function(){
        element.style.backgroundColor = '#4B47B1';
      },100)
    }
  })
});
