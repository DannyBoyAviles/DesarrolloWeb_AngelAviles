var Calculadora = {
//  display : '',
  btnNum: 0,
  btnNumi: 0,
  btnSuma:function Suma(numero1, numero2) {
          var resultado = numero1 + numero2;
          return resultado;
        },
  btnResta:function Resta(numero1, numero2) {
          var resultado = numero1 - numero2;
          return resultado;
        },
  /*
  btnMultimplica:function Multiplicacion(numero) {}
  btnDivide:function Division(numero) {};
  btnIgual:''
  */

};
  //operacion = Calculadora.btnResta;
  Calculadora.btnNum = Number(prompt("primer numero"));
  Calculadora.btnNumi = Number(prompt("segundo numero"));
  operacion = prompt("sumas o restas . . .? \n + \n - ");

switch (operacion) {
  case '+':
      alert("El resultado es: " + Calculadora.btnSuma(Calculadora.btnNum, Calculadora.btnNumi));
    break;
  case '-':
        alert("El resultado es: " + Calculadora.btnResta(Calculadora.btnNum, Calculadora.btnNumi));
    break;
}
