// 1- Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes
let mes = prompt("Ingrese el mes").toLocaleLowerCase();
//.toLocaleLowerCase() = pone las letras del string en minúsculas.

const obtenerDiasMes = function(mes){
    if(mes  === "enero" || mes === "marzo" || mes === "mayo" || mes === "julio" || mes === "agosto" || mes === "octubre" || mes === "diciembre"){
        console.log(`El mes de ${mes} tiene 31 días.`)
    }
    else if(mes === "abril" || mes === "junio" || mes === "septiembre" || mes === "noviembre") {
        console.log(`El mes de ${mes} tiene 30 días.`)
    }
//sumé este 'else if' porque tenia que especificar que enero tiene 28 días para poder usar 'else' para los datos incorrectos que pudiera ingresar el usuario
    else if (mes === "febrero"){
        console.log(`El mes de ${mes} tiene 28 días.`)}
    else {
        console.log(`El dato que ingresó no corresponde a un mes.`)
    }
}

obtenerDiasMes(mes);

//2- Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo
let numero = Number(prompt("Ingrese un número"));

const esPositivoONegativo = function (numero) {
    if( numero > 0){
        console.log(`Positivo`)
    }
    else if( numero < 0){
        console.log(`Negativo`)
    }
}

esPositivoONegativo(numero);

//3- Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar
let numero = Number(prompt("Ingrese un número"));

const esParOImpar = function (numero) {
    if(numero % 2 === 0){
        console.log(`Es par`)
    }
//Acá agregué un 'else if' para que me diera números impares porque si escribía palabras (ej helado) me aparecía en consola Es impar.   
    else if(numero % 2 === 1){
        console.log(`Es impar`)
    }
    else {
        console.log(`El dato ingresado es incorrecto`)
    }
}

esParOImpar(numero);

//4- Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.
let asistencia = Number(prompt("Cual es su porcentaje de asistencia?"));
let materiasAprobadas = Number(prompt("Cuantas materias tiene aprobadas?"));
let tesisAprobada = prompt("Usted tiene la tesis aprobada? Responda si o no").toLocaleLowerCase();

const puedeGraduarse = function(asistencia, materiasAprobadas, tesisAprobada){
    if ( asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada === "si"){
        console.log(`¡Felicitaciones! Usted puede graduarse.`)
    }
//Igual que en el ejercicio anterior, cambié el 'else' por un 'else if' para que tenga un valor TRUE para los datos que no cumplen los requisitos.
//el condicional 'else' fue agregado para que aparezca la leyenda correspondiente a datos incorrectos.
    else if
        ( asistencia < 75 || materiasAprobadas < 50 || tesisAprobada === "no"){
        console.log(`Lamentablemente, usted no cumple todos los requisitos para poder graduarse.`)
        }
    else {
        console.log(`Los datos ingresados son incorrectos.`)}
}

puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada);

//Hagan las pruebas muteando los ejercicios porque se repite mucho la variable 'numero' y puede que se les rompa todo.
//¡Besos!