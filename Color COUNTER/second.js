var btnincreasae = document.getElementById('increase');
var btnreset = document.getElementById('reset');
var btndecreasae = document.getElementById('decrease');
var numbr = document.getElementById('number');

var count = 0;

numbr.textContent = count;

btnincreasae.addEventListener('click', function(){
    count++;
    numbr.textContent = count;
    if(numbr.textContent > 0)
    numbr.style.color = "green";
    if(numbr.textContent == 0)
    numbr.style.color = "black";
},false);

btndecreasae.addEventListener('click', function(){
    count--;
    numbr.textContent = count;
    if(numbr.textContent < 0)
    numbr.style.color = "red";
    if(numbr.textContent == 0)
    numbr.style.color = "black";
},false);

btnreset.addEventListener('click', function(){
    count = 0;
    numbr.textContent = count;
    numbr.style.color = "black";
},false);