const empleados = [
    { nameE: "Luis", email: "Luis@gmail.com" },
    { nameE: "Ana", email: "Ana@gmail.com" },
    { nameE: "Andrea", email: "Andrea@gmail.com" },
];

//Extrae la empleada Ana con todos sus datos personales:
//Extrae el email del empleado Luis --> Luis@gmail.com

const { nameE, email} = empleados;

console.log(empleados[1]);

console.log(empleados[0].email);


const pokemon = {
    name: "Bulbasaur",
    type: "grass", //en realidad es grass/poison, es doble tipo
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        defense: 49,
        speed: 45 //faltan el ataque especial y la defensa especial que son para movimientos que no son físicos :(
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}

// Cambia el nombre de la propiedad “name” por “nombre"

const { name:nombre, type, ability,stats,moves} = pokemon;

console.log(nombre);
console.log(type);
console.log(moves[1]);

// Extrae el nombre del Pokemon
// Extrae el tipo de Pokemon que es
// Extrae el movimiento “Tackle”


//Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:
const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        defense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ]
}

let pokimons = { ...pokemon, ...pikachu };

console.log(pokimons); //solo se ve el pikachu por lo visto si pusiera al pikachu name2, type2 etc si saldrian los dos pero al tener mismos nombres de propiedades no


// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos. Asi:
//   sumEveryOther(6, 8, 2, 3, 1); daria 20
//   sumEveryOther(11, 3, 12); daria 26 


function sumEveryOther(...arrayNumeros){

    let sumar=0

    for (let i=0; i<arrayNumeros.length; i++){

        sumar+=arrayNumeros[i];
    }

    return console.log(sumar);
}

sumEveryOther(6, 8, 2, 3, 1);
sumEveryOther(11, 3, 12);


//Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings) y retorne la suma solo de los números.


function addOnlyNums(...array){

    let suma=0;

    for (let i=0; i<array.length; i++){
        
        if(typeof array[i] === "number"){

            suma+=array[i]
        }
    }
    return suma;
}

console.log(addOnlyNums(1, 'perro', 2, 4)); //7 


//Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

function countTheArgs(...array){

    return array.length;
}

console.log(countTheArgs('gato', 'perro')) //2
console.log(countTheArgs('gato', 'perro', 'pollo', 'oso')) //4

//Escribe una función llamada combineTwoArrays que reciba dos array como argumentos y devuelva solo un array que combine los dos (usando spread operator).

let array1=[1,2,5,7,8];
let array2=[6,2,9,1];

console.log(combineTwoArrays(array1,array2));

function combineTwoArrays(array1,array2){

    return [...array1, ...array2];

}
  