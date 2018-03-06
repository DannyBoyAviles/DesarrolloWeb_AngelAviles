var Calculadora = {
  init: function() {
    this.obtenerNumeros()
    this.animacionBtn()
    this.obtenerOperador()
    this.igual()
    this.on()
    this.signo()
  },
  display:document.getElementById('display'),
  display:'0',
  memoria:'', //memoria donde se almacenaran los numeros
  concatenacion: function(){ //este metodo concatena en memoria los numeros pulsados
    if (this.memoria.length < 8){ //validacion para que solo se almacenen 8 digitos
    Calculadora.memoria = Calculadora.memoria+numero //concatena los numeros pulsados
    console.log('la memoria es: '+ this.memoria);
    datos = Number(this.memoria); //convercion de string a numero para preparar operaciones
    console.log(datos);
    display.innerHTML=this.memoria; //muestra la memoria en display
    }
  },
  obtenerNumeros: function() {
    numero=0 // declaramos variable numero para utilizarla en los sioguientes metodos
    z=1 // contador de cero
    contadorPunto=0 // contador de punto
    numero = document.getElementById('1')
    numero.onclick = function (e){numero=1, console.log('se presiono: '+numero), Calculadora.concatenacion(), z=0 } //el contador z de cero es para indicar que ya se puede concatenar mas ceros en la memoria
    numero = document.getElementById('2')
    numero.onclick = function (e){numero=2, console.log('se presiono: '+numero), Calculadora.concatenacion(), z=0 }
    numero = document.getElementById('3')
    numero.onclick = function (e){numero=3, console.log('se presiono: '+numero), Calculadora.concatenacion(), z=0 }
    numero = document.getElementById('4')
    numero.onclick = function (e){numero=4, console.log('se presiono: '+numero), Calculadora.concatenacion(), z=0 }
    numero = document.getElementById('5')
    numero.onclick = function (e){numero=5, console.log('se presiono: '+numero), Calculadora.concatenacion(), z=0 }
    numero = document.getElementById('6')
    numero.onclick = function (e){numero=6, console.log('se presiono: '+numero), Calculadora.concatenacion(), z=0 }
    numero = document.getElementById('7')
    numero.onclick = function (e){numero=7, console.log('se presiono: '+numero), Calculadora.concatenacion(), z=0 }
    numero = document.getElementById('8')
    numero.onclick = function (e){numero=8, console.log('se presiono: '+numero), Calculadora.concatenacion(), z=0 }
    numero = document.getElementById('9')
    numero.onclick = function (e){numero=9, console.log('se presiono: '+numero), Calculadora.concatenacion(), z=0 }
    numero = document.getElementById('0')
    numero.onclick = function (e){
      numero=0 //es pulsado el cero
      console.log('se presiono: '+numero)
      if (z==0) { //solo se concatena el cero
        Calculadora.concatenacion()
      }else{ //el valor del contador de cero esta en 1. no se coloca cero
        console.log('no se coloca: 0');
      }
    }
    punto = document.getElementById('punto')
    punto.onclick = function (e){
        numero='.',
        console.log('se presiono: '+numero)
        if (Calculadora.memoria=="" || Calculadora.memoria=="0"){ //validacion para colocar . al inicio de una operacion
          numero='0.'
          Calculadora.concatenacion()
          console.log('se coloca: .')
          contadorPunto=1 // contador para no colocar mas puntos
        }else if (numero=="." && contadorPunto==0){ // validacion para colocar un . en la memoria
          Calculadora.concatenacion()
          console.log('se coloca: .')
          contadorPunto=1
        } else if (numero=="." && contadorPunto==1) {

        } else {
          Calculadora.concatenacion()
        }
    }

  },
  obtenerOperador: function(){
    n1=0 //variable utilizada para almacenar el primer vcalor a operar
    operacion = document.getElementById('mas')
    operacion.onclick = function(e){operacion='+', n1=datos, console.log('se SUMARA '+ n1),Calculadora.memoria='',Calculadora.obtenerNumeros()}
    operacion = document.getElementById('menos')
    operacion.onclick = function(e){operacion='-', n1=datos, console.log('se RESTARA '+ n1),Calculadora.memoria='',Calculadora.obtenerNumeros()}
    operacion = document.getElementById('por')
    operacion.onclick = function(e){operacion='*', n1=datos, console.log('se MULTIPLICARA '+ n1),Calculadora.memoria='',Calculadora.obtenerNumeros()}
    operacion = document.getElementById('dividido')
    operacion.onclick = function(e){operacion='/', n1=datos, console.log('se DIVIDIRA '+ n1),Calculadora.memoria='',Calculadora.obtenerNumeros()}
  },
  resolver: function(){
    resultado=0
    switch (operacion) {
      case '+':
                resultado=datos+n1
                datos=resultado
                n1=Number(Calculadora.memoria)
                resultado=String(resultado) // se convierte a string para utilizar posteriormente el metodo substring(0,8)
                console.log(resultado);
                display.innerHTML=resultado.substring(0,8); //muestra solo los primeros 8 valores en pantalla
        break;
      case '-':
                resultado=n1-datos
                datos=resultado
                n1=Number(Calculadora.memoria)
                resultado=String(resultado)
                console.log(resultado);
                display.innerHTML=resultado.substring(0,8);
        break;
      case '*':
                  resultado=n1*datos
                  datos=resultado
                  n1=Number(Calculadora.memoria)
                  resultado=String(resultado)
                  console.log(resultado);
                  display.innerHTML=resultado.substring(0,8);
        break;
      case '/':
                    resultado=n1/datos
                    datos=resultado
                    n1=Number(Calculadora.memoria)
                    resultado=String(resultado)
                    console.log(resultado);
                    display.innerHTML=resultado.substring(0,8);
          break;
    }
  },
  igual:function(){
    res= document.getElementById('igual')
    res.onclick = function(e){Calculadora.resolver()}
  },
  on:function(){
    oN=document.getElementById('on')
    oN.onclick = function(e){ console.log(Calculadora.memoria="",datos=0, resultado=0, contadorPunto=0), display.innerHTML=Calculadora.memoria}
  },
  signo: function(){
    opuesto=document.getElementById('sign')
    opuesto.onclick = function (e){
      console.log('inversion de signo +/-')
      datos=-datos //coloca el signo - en al dato numerico
      display.innerHTML=datos
    }
  },
  animacionBtn: function(){ //animacion al presionar una tecla
    var tecla = document.getElementsByClassName("tecla");
    for (i=0; i<tecla.length; i++){
      tecla[i].addEventListener("click",function() {
        this.style.transform="scale(0.9)"
        setTimeout(function() {document.getElementById('1').style.transform="scale(1)"}, 200);
        setTimeout(function() {document.getElementById('2').style.transform="scale(1)"}, 200);
        setTimeout(function() {document.getElementById('3').style.transform="scale(1)"}, 200);
        setTimeout(function() {document.getElementById('4').style.transform="scale(1)"}, 200);
        setTimeout(function() {document.getElementById('5').style.transform="scale(1)"}, 200);
        setTimeout(function() {document.getElementById('6').style.transform="scale(1)"}, 200);
        setTimeout(function() {document.getElementById('7').style.transform="scale(1)"}, 200);
        setTimeout(function() {document.getElementById('8').style.transform="scale(1)"}, 200);
        setTimeout(function() {document.getElementById('9').style.transform="scale(1)"}, 200);
        setTimeout(function() {document.getElementById('0').style.transform="scale(1)"}, 200);
        setTimeout(function() {document.getElementById('mas').style.transform="scale(1)"}, 200);
        setTimeout(function() {document.getElementById('menos').style.transform="scale(1)"}, 200);
        setTimeout(function() {document.getElementById('por').style.transform="scale(1)"}, 200);
        setTimeout(function() {document.getElementById('dividido').style.transform="scale(1)"}, 200);
        setTimeout(function() {document.getElementById('raiz').style.transform="scale(1)"}, 200);
        setTimeout(function() {document.getElementById('punto').style.transform="scale(1)"}, 200);
        setTimeout(function() {document.getElementById('igual').style.transform="scale(1)"}, 200);
        setTimeout(function() {document.getElementById('sign').style.transform="scale(1)"}, 200);
        setTimeout(function() {document.getElementById('on').style.transform="scale(1)"}, 200);
        });
      }
    }
}
Calculadora.init();// inicializa el objeto calculadora
//solo para validar la rendarizacion correcta en le desarrollo (no indispensable)
//-----CARGAR PAGINA------
/*
window.onload = function(){ //Acciones tras cargar la página
  alert("Se cargo la página Correctamente")
  }
*/
