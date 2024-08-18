


let escalones = parseInt(prompt("ingrese la cantidad de escalones"));

if(escalones >=1 && escalones<=50){
    for (let i = 0; i <= escalones; i++) {
        for (let j = 1; j <= i; j++) {
          document.write(j);
        }
        document.write("<br>");
      }
}