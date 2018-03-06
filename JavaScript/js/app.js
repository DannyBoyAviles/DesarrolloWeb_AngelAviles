//calculadora.pantalla="";
var display = document.getElementById('display');
  n='';
  ni=1;
  memoria='0';
//var calculadora = new Object();
x = document.getElementById('1');
  x.addEventListener("click",function(event){
    n='1';
    console.log(n);
    numero();
});
x = document.getElementById('2');
  x.addEventListener("click",function(event){
   n='2';
   console.log(n);
    numero();
});
var tres = document.getElementById('3');
tres.addEventListener("click",function(event){
  n = '3';
  console.log(n)
  numero();
});
var cuatro = document.getElementById('4');
cuatro.addEventListener("click",function(event){
  n = '4';
  console.log(n)
  numero();
});
var cinco = document.getElementById('5');
cinco.addEventListener("click",function(event){
  n = '5';
  console.log(n)
  numero();
});
var seis = document.getElementById('6');
seis.addEventListener("click",function(event){
  n = '6';
  console.log(n)
  numero();
});
var siete = document.getElementById('7');
siete.addEventListener("click",function(event){
  n = '7';
  console.log(n)
  numero();
});
var ocho = document.getElementById('8');
ocho.addEventListener("click",function(event){
  n = '8';
  console.log(n)
  numero();
});
var nueve = document.getElementById('9');
nueve.addEventListener("click",function(event){
  n = '9';
  console.log(n)
  numero();
});
var cero = document.getElementById('0');
cero.addEventListener("click",function(event){
  n = '0';
  console.log(n)
  numero();
});


var punto = document.getElementById('punto');
punto.addEventListener("click",function(event){
  n = '.';
  console.log(n)
/*
if (n=='0'){display.innerHTML='0.'; n='.'; ni=1;
}else if (n=='.' && ni==1){display.innerHTML+=n; n+=n}
  /*if(n=='.'){display.innerHTML='0'+n; ni=1;
    } else if (n=='.' && ni==1){}
        else{display.innerHTML+=n; n+=n} ni=0;*/

});


var on = document.getElementById('on');
on.addEventListener("click",function(event){
  n = '0';
  console.log(n)
  display.innerHTML=n;
});


function numero (){
  if(n=='0'||ni==1){display.innerHTML=n;}else {display.innerHTML+=n; memoria+=n; }ni=0;
}

//igualar el display a 0 (el display es una memoria para concatenar uno o mas numeros)
//capturar los numeros del html por ID
//guardar los IDnumeros en la pantalla
//verificar si existen IDnumero diferente o igual a cero en el display (DISPLAY=="0")
//TRUE: agrecar numeros en memoria  FALSE: ya existe una memoria de numeros, concatenar con otra memoria (en este punto se concatenan las operaciones)
// definir funcion de operaciones


/*
//document.getElementById('1');
calculadora.dos = 2;
calculadora.tres = 3;
calculadora.cuatro = 4;
calculadora.cinco = 5;
calculadora.seis = 6;
calculadora.siete = 7;
calculadora.ocho = 8;
calculadora.nueva = 9;
calculadora.cero = 0;
calculadora.punto= ".";
calculadora.suma = function(){};
calculadora.resta = function(){};
calculadora.multiplicacion = function(){};
calculadora.division = function(){};
calculadora.on = function(){};
calculadora.igual = function(){};
*/
//console.log(calculadora);
