var count= 0;
var counter= localStorage.getItem('count', count);
var namesGreeted= {};
for(i =0; i<namesGreeted.length; i++){

}
document.getElementById('count').innerHTML = counter;

var resetbotn=document.getElementById('resetbtn')
var helloButton = document.querySelector('.helloButton');

function helloFunction(){
    var greetButton = document.getElementById("greet").value;
    var language = document.getElementsByName("language")

    if(language[0].checked && greetButton.length > 0 && namesGreeted[i] ===undefined) {
namesGreeted[i]=1;
        document.getElementById("greeting").innerHTML= 'Hello, '+ greetButton;
        document.getElementById('greet').value='';
        count++;
        document.getElementById("count").innerHTML = count;
    }
    else if(language[0].checked && greetButton.length > 0 && namesGreeted[i] !== undefined) {
    //  alert('Name already greeted in one of the languages, please type in a different name, but please find your greeting at the bottom.');
      document.getElementById("greeting").innerHTML= 'Hello, '+ greetButton;
        document.getElementById('greet').value='';
        document.getElementById("count").innerHTML = count;
    }
    else if(language[1].checked && greetButton.length > 0 && namesGreeted[i]
      ===undefined) {
        namesGreeted[i]=1;
        //alert('Name already greeted in one of the languages, please type in a different name, but please find your greeting at the bottom.');
        document.getElementById("greeting").innerHTML= 'Hallo, '+ greetButton;
        document.getElementById('greet').value='';
        count++;
        document.getElementById("count").innerHTML = count;
    }
    else if(language[1].checked && greetButton.length > 0 && namesGreeted[i] !== undefined) {
    //  alert('Name already greeted in one of the languages, please type in a different name, but please find your greeting at the bottom.');
      document.getElementById("greeting").innerHTML= 'Hallo, '+ greetButton;
        document.getElementById('greet').value='';
        document.getElementById("count").innerHTML = count;
    }
    else if(language[2].checked && greetButton.length > 0 && namesGreeted[i] === undefined) {
      //alert('Name already greeted in one of the languages, please type in a different name, but please find your greeting at the bottom.');
      document.getElementById("greeting").innerHTML= 'Molo, '+ greetButton;
        document.getElementById('greet').value='';
        count++;
        document.getElementById("count").innerHTML = count;
      }
      else if(language[2].checked && greetButton.length > 0 && namesGreeted[i] !== undefined) {
        alert('Name already greeted in one of the languages, please type in a different name, but please find your greeting at the bottom.');
        document.getElementById("greeting").innerHTML= 'Molo, '+ greetButton;
          document.getElementById('greet').value='';
          document.getElementById("count").innerHTML = count;
      }

localStorage.setItem('count', count);

}
  //store the counter
document.getElementById("count").innerHTML = counter;
helloButton.addEventListener ('click', helloFunction);
resetbotn.addEventListener('click' ,function(){
  document.getElementById('count').innerHTML =0;
});
