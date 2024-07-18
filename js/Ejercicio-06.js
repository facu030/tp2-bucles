//6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

let escalones = parseInt(prompt("ingrese la cantidad de escalones"));

for (let i = 0; i <= escalones; i++) {
  for (let j = 0; j <= escalones; j++) {
    document.write(i);
  }
  document.write("<br>");
}
