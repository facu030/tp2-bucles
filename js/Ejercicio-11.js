//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.

let edad1 = parseInt(prompt("ingrese la primera edad"));
let nombre1 = prompt("ingrese el primer nombre");

let edad2 = parseInt(prompt("ingrese la segunda edad"));
let nombre2 = prompt("ingrese el segundo nombre");

let edad3 = parseInt(prompt("ingrese la tercera edad"));
let nombre3 = prompt("ingrese el tercer nombre");

//max calcula el numero mayor
let mayor = Math.max(edad1, edad2, edad3);

//para mostrar el nombre del mayor

if (mayor == edad1) {
  document.write("el nombre con mayor edad es : " + nombre1);
}
if (mayor == edad2) {
  document.write("el nombre con mayor edad es : " + nombre2);
}
if (mayor == edad3) {
  document.write("el nombre con mayor edad es : " + nombre3);
}
