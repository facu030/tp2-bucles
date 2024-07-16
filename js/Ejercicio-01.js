/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, 
si la edad ingresada no es un número válido indicarlo en un mensaje.

*/
const edad = parseInt(prompt("ingrese la edad"));
console.log(edad);

if (edad >= 18) {
  document.write("su edad es: " + edad + "  es mayor y ya puede conducir");
} else if (edad < 18) {
  document.write("menor de edad no puede conducir " + edad);
}
