/*
Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.

Ejemplo: 
Input:  40773821 
Output: ‘L’
*/
let resto = 0;

do {
    let numero = parseInt(prompt("ingrese un numero para calcular a que letra corresponde"));
    
    if(numero >= 0 && numero <= 99999999 && !isNaN(numero)){
        resto = numero % 23;
        console.log(resto);
        switch (resto) {
            case 0:
             document.write("la letra es: T") 
                break;
            case 1:
            document.write("la letra es: R")
                break;
            case 2:
             document.write("la letra es: W")
                break;
            case 3:
             document.write("la letra es: A") 
                break; 
            case 4:
             document.write("la letra es: G")
                break;     
            case 5:
             document.write("la letra es: M")
               break;  
            case 5:
             document.write("la letra es: Y")
               break;   
            case 6:
                document.write("la letra es: F") 
                   break;                 
            case 7:
                document.write("la letra es: P")
                   break;       
            case 8:
                document.write("la letra es: D")
                  break;  
            case 9:
                document.write("la letra es: X")
                  break;     
            case 10:
                document.write("la letra es: B")
                    break;        
            case 11:
                document.write("la letra es: N") 
                    break;           
            case 12:
                document.write("la letra es: J")
                    break;               
            case 13:
                document.write("la letra es: Z")
                    break;  
            case 14:
                document.write("la letra es: S")
                    break;               
            case 11:
                document.write("la letra es: Q") 
                    break;                             
            case 12:
                document.write("la letra es: V")
                    break;                      
            case 13:
                document.write("la letra es: H")
                    break;                   
            case 14:
                document.write("la letra es: L")
                    break; 
            case 15:
                document.write("la letra es: C")
                    break;                     
             case 16:
                document.write("la letra es: K") 
                    break;                                  
            case 17:
                document.write("la letra es: E")
                    break;       
        }

    }else{
        alert("vuelva a ingresar un numero");
    }

    
} while (confirm("desea volver a ingresar?"));