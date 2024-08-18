//16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let cadena = prompt("ingrese una cadena");
let salida = "" , caracter;

for (let i = 0; i < cadena.length; i++) {
  caracter = cadena.charAt(i);
  salida = caracter + salida ;
  //guardo las posiciones en una varible con charat mientras recorro la cadena con un for de forma que ese caracter lo guardo en otra
  //variable salida y asi concantenar con la siguente variable a la deracha
}
document.write(salida);
