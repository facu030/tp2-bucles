//9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

for (let i = 1; i <= 500; i++) {

  document.write(i);
  document.write("<br>");

  if (i % 4 == 0) {
    document.write(i + "(es multiplo de 4)");
    document.write("<br>");
  }

  if (i % 9 == 0) {
    document.write(i + "(es multiplo de 9)");
    document.write("<br>");
  }

  //si es multiplo de 5 se marca una linea osea por cada 5 lineas
  if (i % 5 == 0) {
    document.write("<hr>");
    document.write("<br>");
  }
  //lo habia hecho con muchos if y else pero desp vi no que no hacia falta ya q si no cumple pasa al otro directamente
}
