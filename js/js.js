//Clase 2
console.log( 11231123 );
console.log( 11.231123 );

console.log( "Hola Mundo" )
console.log( 'Hola Mundo' )
console.log( `Hello world ${ 5 +2 } ` );

var arregloUno =[ 5,8,7, "Jesus" , true ]
let arrgloDos = [ 6, 9, 8, 3 ]
const num = 5
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

console.log("Hola Mundo");
//Funcion Declarativa
saludo();
function saludo() {
    console.log("Hola Mundo");
}
//Funcion Constante 
const saludoDos = function() {
    console.log("Saludo Dos")
}
saludoDos();
//Tercera forma de funcion
const saludoTres = () => {
    console.log("Saludo Tres")
}
saludoTres();

const bienvenida = ( nombre , apellido1  ) => {
    return "Bienvenido" + nombre &[apellido1];
}

let temporal = bienvenida('jesus' , 'Sanchez');
let temporal2 = bienvenida('david' , 'Abril');
console.log (temporal);
console.log (temporal2);
 

/**
 * Crear una funcion que reciba tres parametros llamados, nombre, apellido uno,
 * apellido dos en caso tal de que no contenga el apellido dos devolver : "No se
 * puede dar la bienvenida" si los datos estan completos devolver la funcion.
 */

const nombreCompleto = (nombre , apellido1, apeliido2) => {
    if (apeliido2 == undefined){
        return "No se puede dar la bienvenida"
    }
    return "Bienvenido" + nombreCompleto
}
console.log(nombreCompleto)

/**
 * Crear una funcion , que sume 3 números si el tercer numero no se envia dicho numero
 * se debe reeplazar por "5"
 */

const sumar = (a, b, c = 5) => {
    return a + b + c ;
}
console.log( sumar(1 , 2, 3));

/**
 * Crear una funcion, que sume 3 numeros y retorne el primer numero, el segundo numero
 * el tercer numero y la suma de todos ellos.
 */

const sumar_dos = (a , b , c) => {
    return [ a, b, c, a + b + c ];
}
console.log (sumar_dos(1,2,3))

/**
 * Crear una funcion que reciba dos numeros y devueval la suma, la resta, la multiplicacion y
 *  la division de los 2 numeros
 */

const sumar_tres = (a, b) => [a+b, a-b, a*b, a/b];
console.log(sumar_tres(10, 5));

//Con map
const recibaNumero = (a, b) => {
let map1 = {a, b, 'suma':a + b }
return map1
}
console.log(recibaNumero(10,5));

/**
 * Crear una funcion que reciba dos valores,
 * se debe devolver, el primer valor, el segundo valor y la suma
 * luego de ello, multiplicar el primer valor por el resultado de la suma
 */

const sumarMap = (a, b) => {
let map2 = {a, b, suma: a + b }
return map2;
}
let res1 = sumarMap(10,5);
console.log(res1.a * res1.suma)


//Formas de Map
const multiplicacion1 = (parametros) => {
    console.log(parametros);
    let multi = parametros.a * parametros.b;
    console.log(multi);
}
multiplicacion1 ( {a: 5, b:6} );

const multiplicacion2 = (parametros) => {
    let {a,b} = parametros;
    let multi = a * b;
    console.log(multi);
}
multiplicacion2 ( {a: 6, b:6} );

const multiplicacion3 = ( {a, b, c = 9} ) => {
    let multi = a * b;
    console.log(multi);
    console.log(a,b,c);
}
multiplicacion3 ( {a: 4, b:6} );

const multiplicacion4 = ( {a, b, c = 9} ) => {
    let multi = a * b * c;
    return multi;
}
console.log(multiplicacion4 ( {a: 4, b:6} ) );

const multiplicacion5 = ( {a, b, c = 9} ) => a * b * c
console.log(multiplicacion5 ( {a: 4, b:6} ) );

/**
 * Crear una funcion que reciba un nombre y una edad, si la edad es menor a 18 devuelva
 * no puede entrar, si es mayor o igual devuelva Bienvenido "Nombre"
 */

const restringir = (nombre, edad) => (edad < 18) ? "No puede entrar": "Bienvenido " + nombre
console.log(restringir("Jesus", 20))