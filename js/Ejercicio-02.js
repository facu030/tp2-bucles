/*
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:

Input: 5
Input: 50
Input: hola10

Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido
*/

let notas = parseInt(prompt("ingrese la cantidad de notas"));

for (let i = 1; i <= notas; i++) {
  let nota = parseInt(prompt("ingrese la nota en un rango de 0 a 10"));

  if (isNaN(nota)) {
    alert("introducir numero valido");
  } else {
    if (nota >= 0 && nota <= 10) {
      if (nota >= 0 && nota <= 2) {
        alert("Muy deficiente su nota es : " + nota);
      } else if (nota >= 3 && nota <= 4) {
        alert("Insuficiente su nota es : " + nota);
      } else if (nota >= 5 && nota <= 6) {
        alert("Suficiente su nota es : " + nota);
      } else if (nota == 7) {
        alert("Bien su nota es : " + nota);
      } else if (nota >= 8 && nota <= 9) {
        alert("Notable su nota es : " + nota);
      } else if (nota == 10) {
        alert("Sobresaliente su nota es : " + nota);
      }
    } else {
      alert("Numero erroneo");
    }
  }
}
