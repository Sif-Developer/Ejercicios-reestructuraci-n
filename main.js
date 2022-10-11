// //! 1.  Ejercicios destructuring

// //todo Dado el siguiente objeto:

// const empleados = [
//   { name: "Luis", email: "Luis@gmail.com" },
//   { name: "Ana", email: "Ana@gmail.com" },
//   { name: "Andrea", email: "Andrea@gmail.com" },
// ];

// //todo Extrae la empleada Ana con todos sus datos personales:

//console.log(empleados[1]);

// const {name} = empleados;
// const [h1, h2, h3] = empleados;
// console.log(h2);
// // //? {"name":"Ana", "email":"Ana@gmail.com"}

// // //todo Extrae el email del empleado Luis --> Luis@gmail.com
// const { email } = h1;
// console.log(email); //Luis@gmail.com




// //todo Dado el siguiente objeto:

const pokemon = {
  name: "Bulbasaur",
  type: "grass",
  ability: {
    primary: "Overgrow",
    hidden: "Chlorophyll",
  },
  stats: {
    hp: 45,
    attack: 49,
    deffense: 59,
    speed: 45,
  },
  moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
};




//todo Cambia el nombre de la propiedad “name” por “nombre
const {name : nombreBulbasaur} = pokemon;
// console.log(nombreBulbasaur) //Bulbasaur
//todo Extrae el nombre del Pokemon
// console.log(nombreBulbasaur) 
//todo Extrae el tipo de Pokemon que es
const {type: tipoDePokemon} = pokemon;
console.log(tipoDePokemon)
//todo Extrae el movimiento "Tackle"
const {moves} = pokemon;
console.log(moves)
const [m1,m2, ...restoMovimientos] = moves;
console.log(m2)


//! 2. Ejercicios spread/rest

//todo Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:
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
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

const pokemonFusionados = [pikachu,pokemon];
console.log(pokemonFusionados)


// //todo Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
//   sumEveryOther(6, 8, 2, 3, 1); //20
//   sumEveryOther(11, 3, 12); //26 


function sumEveryOther(...numeros){
    
const resultadoDeSuma = numeros.reduce(   //El reduce los va sumando
    (prevValue,nextValue) => prevValue + nextValue, 0
);
console.log(resultadoDeSuma)
}

sumEveryOther(1,200,34,5,6,)


// //todo Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
// addOnlyNums(1, 'perro', 2, 4); //7


const addOnlyNums = [1,,"perro", 2 ,4,];

const resultadoOnlyNums = addOnlyNums.reduce( (sumSoFar, nextValue) => {
   if ( typeof nextValue === "number" && isFinite(nextValue) ) {
      return sumSoFar + nextValue;
   }
   return sumSoFar;
}, 0); 
 
 console.log(resultadoOnlyNums);

 //No supe pasarlo a function , ERROR, ERROR, ERROR...

// //todo Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
// countTheArgs('gato', 'perro'); //2
// countTheArgs('gato', 'perro', 'pollo', 'oso'); //4


function arrayFromArgs(...varios) {
    var array1= [];
    for (var i = 0; i < arguments.length; i++) {
        array1.push(arguments[i]);
    }
    return array1;
}
const countTheArgs = arrayFromArgs('gato', 'perro', 'pollo', 'oso', "lobo" );
console.log(countTheArgs.length); //5

// //todo Escribe una función llamada arr que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).











// const {attacks}=pok0
// console.log(attacks)
// const [ , ,attack3] = attacks
// console.log(attack

// const Usuario = {
//     nombre: "Javier",
//     email: "javi@gmail.com",
//     edad: 23,
//     registrado: true,
//     seguidores: ["Ger", "Gabriel", "Jorge", "Rebeca", "Xavi"],
//   };

//   console.log(Usuario.email);
//   let { nombre = "Pedro", seguidores, registrado, email:correo, edad = 38 } = Usuario
//   const { seguidores } = Usuario;
//   console.log(seguidores);
//   const [, , , p1] = seguidores;
//   console.log(p1);

// console.log(Usuario["registrado"]);
// console.log(Usuario.seguidores[4]);
