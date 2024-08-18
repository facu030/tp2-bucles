//7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).


let escalones = parseInt(prompt("ingrese la cantidad de escalones"));

if(escalones>=1 && escalones<=50){
    for(let i = 1 ; i <= escalones ; i--){
        for(let j=0 ; j>i ; j--){
            document.write(i)
        }
    }
    document.write("<br>")

}else{
    alert("escalones entre 1 y 50");
    document.write("escalones entre 1 y 50");
}