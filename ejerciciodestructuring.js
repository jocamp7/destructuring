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


// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números 
// y devuelva la suma de todos. Asi:
//   sumEveryOther(6, 8, 2, 3, 1); daria 20
//   sumEveryOther(11, 3, 12); daria 26 

function sumEveryOther (){
    return //sumar todos los numeros que te pasen;
}



  