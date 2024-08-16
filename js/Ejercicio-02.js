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

let notas;

do {
  notas = parseInt(prompt("ingrese notas del 0 a 10"));
  if (!isNaN(notas)) {
    if (notas >= 0 && notas <= 10) {
      //podemos hacer con if pero es mejor con switch dependiendo de cada caso muestra un codigo
      switch (notas) {
        case 0:
        case 1:
        case 2:
          alert("Muy deficiente");
          document.write("Muy deficiente");
          break;
        case 3:
        case 4:
          alert("Insuficiente");
          document.write("Insuficiente");
          break;
        case 5:
        case 6:
          alert("suficiente");
          document.write("suficiente");
          break;
        case 7:
          alert("bien");
          document.write("bien");
          break;
        case 8:
        case 9:
          alert("notable");
          document.write("notable");
          break;
        case 10:
          alert("sobresaliente");
          document.write("sobresaliente");
          break;
      }
    } else {
      alert("ingrese numero entre 0 y 10");
    }
  } else {
    alert("ingrese un numero valido");
  }
} while (confirm("desea continuar?"));
//confirm es un booleano true o false
