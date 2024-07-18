

let escalones = parseInt(prompt("ingrese la cantidad de escalones"));

if(escalones>=0 && escalones<=50){
    for (let i = 50 ; i >= escalones; i--) {
        for (let j = 1  ; j <=i; j++) {
        document.write("  " + i)

        }
        document.write("<br>");
      }
}

    