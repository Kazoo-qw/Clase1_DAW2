//Clase 2
console.log( 11231123 );
console.log( 11.231123 );

console.log( "Hola Mundo" )
console.log( 'Hola Mundo' )
console.log( `Hello world ${ 5 +2 } ` );

var arregloUno =[ 5,8,7, "Jesus" , true ]
let arrgloDos = [ 6, 9, 8, 3 ]
const temporal = 5
console.log ( arregloUno ) ;
console.log ( arrgloDos )
console.log ( arregloUno[3] )

let map = {
    "nombre" : "Jesus",
    apellido : "Sanchez",
    edad : 18,
    skills : [ 'Dormir', 'Respirar' ]
}
console.log(map)
console.log(map["nombre"])
console.log(map.apellido)
console.log(map.skills[0])


// Operadores Matematicos
let a = 5;
let b = 6;
console.log( a + b );
console.log( a - b );
console.log( a * b );
console.log( a / b );
console.log( a % b );
console.log( a ** 2 );
a++;
console.log( a );
a--;
console.log( a );

//Comparadores
console.log( 1 == 1 )
console.log( 1 == "1" )
console.log( 1 === "1" )
console.log( 1 !== "1" )
console.log( 1 != "1" )
console.log( a > b )
console.log( a >= b )
console.log( a < b )
console.log( a <= b )

//Operadores Logicos
console.log( a < b || a > b )
console.log( a < b && a > b )
console.log( a < b && !(a > b) )

//Condicionales
if ( a < b ){
    console.log( "Aprobó" )
}else if ( a === b ){
    console.log( "Son iguales" )
}else{
    console.log( "Final" )
}


/**EJERCICIO 
 * DECLARAR DOS VARIABLES CON NUMEROS 
 * A PARTIR DE ELLOS SACAR LAS POTENCIAS AL CUADRADO 
 * EN DOS NUEVAS VARIABLES 
 * SI LA SUMA DE LAS POTENCIAS ES MAYOR A 50 
 * DECIR "MAYOR A CINCUENTA SINO"
 * DECIR "INTENTE NEUVAMENTE"
*/

let c = 10
let d = 11
let cCuadrado = c ** 2
let dCuadrado = d ** 2
if ( (cCuadrado + dCuadrado) > 50 ){
    console.log( "Mayor a cincuenta" )
}else{
    console.log( "Intente nuevamente" )
}


for (let i = 0 ; i < 10 ; i++ ){
    console.log( i );
} 


/**EJERCICIO
 * Escribir un programa que muestre los
 * numeros del 1 al 100
 * para cada numero si es divisible por 3
 * se imprime "Fizz", Si es divisible por 5
 * se imprime "Buzz", y
 * si es divisible por ambos 3 y 5 se imprime "FizzBuzz"
 */


for (let i = 1 ; i <= 100 ; i++ ){
    if ((i % 3) === 0 && (i % 5) === 0){
        console.log( "FizzBuzz" );
    }else if ((i % 3) === 0){
        console.log( "Fizz" );
    }else if ((i % 5) === 0 ){
        console.log( "Buzz" );
    }else{
        console.log( i )
    }
}


//Formas de hacer arreglos o leerlos
let valores = [ 10,20,30,40,50,60,70,80,90 ]
for (let i = 0 ; i < valores.length; i++ ){
    console.log( valores[i] );
}

for ( let i in valores ){
    console.log( valores[i] );
}

for (let i of valores){
    console.log(i)
}

valores.forEach( function(data){
    console.log(data);
} )

valores.forEach( function(data, i){
    console.log(data, i);
} )

let res = valores.map( function(data) {
    console.log( data );
    return data *2;
})

console.log("Resultado", res);

/**
 * Crear un arreglo con las siguientes palabras
 * Hola, Adios, Buenos dias
 * A partir de ellos, generar un nuevo arreglo con las plabras anteriores pero agregando su nombre
 * Ejemplo
 * Hola jesus, adios jesus, buenos dias jesus
 */

let palabras = ["Hola", "Adios", "Buenos dias"]
let resul = palabras.map( function(data) {
    console.log( data );
    return data + " Jesus";
})

console.log("Resultado", resul);


//
let filtrado = valores.filter(function(data){
    return data % 3 == 0
})
console.log("FiltroConCondición", filtrado)

/**
 1. Crear un arreglo de nombres y recorrerlo con forEach.
 2. Usar map para convertir un arreglo de numeros en su cuadrado.
 3. Usar filter para obtener solo numeros pares.
 */

//1.
let nombres = ["Jesus", "Chapx", "Duarte", "Abdul"]
nombres.forEach(function(data){
    console.log(data)
})

//2.
let numeross = [1,2,4,6,8,11,13]
let resultado = numeross.map(function(data){
    return data **2
})

//3.
let filtro = numeross.filter(function(data){
    return data % 2 == 0
})
console.log("Resultado Filtro", filtro)