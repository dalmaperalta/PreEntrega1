let juego1
let juego2 
let juego3
let intentos1 = 3
let intentos2 = 3
let intentos3 = 3

//JUEGO UNO
alert ("JUEGO UNO")
let respuesta1 = "4"
do{
    juego1 = prompt("CUANTO ES 2 + 2  \nTE QUEDAN " + intentos1 + " INTENTOS")
    intentos1--
    }while (juego1 !== respuesta1 && intentos1 >0)
if (juego1 === respuesta1) {
    alert ("MUY BIEN")
 } else{
     alert ("INCORRECTO")
         }
  
//JUEGO DOS         
alert ("JUEGO DOS")
let respuesta2= "3"
do{
    juego2 = prompt("¿CUANTOS SON LOS COLORS PRIMARIOS? \nTE QUEDAN " + intentos2 + " INTENTOS")
    intentos2--
}while (juego2 !== respuesta2 && intentos2 >0)
   
if (juego2 === respuesta2){
        alert ("EXCELENTE")
    }else{
        alert ("SUERTE EN LA PROXIMA")
    }

//JUEGO TRES        
alert ("JUEGO TRES")
let respuesta3 ="arroz" .toLowerCase()
do{
    juego3 = prompt("NOMBRE DE UN ALIMENTO QUE EMPIEZE Y TERMINE CON \nLAS LETRA DEL ABECEDARIO (A-Z)  \nTE QUEDAN " + intentos3 + " INTENTOS")
    intentos3--
}while (juego3 !== respuesta3 && intentos3 >0)
   
if ( juego3 === respuesta3) {
        alert ("EXCELENTE")
    }else{
        alert ("SUERTE EN LA PROXIMA")
    }

alert("Respuesta: 4 \nRespuesta: 3 \nRespuesta:arroz")


 




