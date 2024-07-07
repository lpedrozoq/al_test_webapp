/*
Primitivos: (inmutables, se pasan por valor)
number
string
boolean
null
undefined
symbol
bigint

Complejos: (mutables, se pasan por referencia)
object
array
function
*/

let numero = 23
numero = 23 + 10
console.log(numero)

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

let usuaro = {nombre : "Pepito", edad : 15}
usuaro.edad = 20
console.log(usuaro)

let frutas = ['manzana','pera']
frutas[0] = 'sandia'
console.log(frutas)

function cambiarNombre(objeto) {
    objeto.nombre = 'Nuevo nombre';
}

let persona = {nombre : "Antonio"};

cambiarNombre(persona)
console.log(persona)

console.log()

let cajaDeAndy = {juguete : "Woody"}
let cajaDeBonny = cajaDeAndy;  //Se copia la referencia a cajaDeAndy a cajaDeBonny
cajaDeAndy.juguete = "Buzz"; //Afecta cajaDeBonny
console.log(cajaDeAndy)
console.log(cajaDeBonny)


