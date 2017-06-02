var greetButton = document.getElementById("greet");
var language = document.getElementsByName("language");
var output =  document.getElementById("greeting");
var  counting = document.getElementById("count");
var resetbotn=document.getElementById('resetbtn');
function hello(){

  var name = greetButton.value;
document.getElementById('greet').value='';
  var radioButtons = radioButton();

output.innerHTML = helloFunction(name, radioButtons);
if(radioButtons !=='none'){
  counting.innerHTML = countNames(name);
  console.log(radioButtons);
}

};
resetbotn.addEventListener('click' ,function(){
  document.getElementById('count').innerHTML =resetButton();
});
