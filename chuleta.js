// const personas = ['Juan', 'Laura', 'Patricia', 'María', 'Paula']

// // console.log(personas[2])
// // console.log(personas[5])

// const [ , , , ,per,p7] = personas

// console.log(p7)

const Usuario = {
    nombre: "Javier",
    email: "javi@gmail.com",
    edad: 23,
    registrado: true,
    seguidores: ["Ger", "Gabriel", "Jorge", "Rebeca", "Xavi"],
  };
  
  // console.log(Usuario.email);
  // let { nombre = "Pedro", seguidores, registrado, email:correo, edad = 38 } = Usuario
  const { seguidores } = Usuario;
  console.log(seguidores);
  const [, , , p1] = seguidores;
  console.log(p1);
  
  // console.log(Usuario["registrado"]);
  // console.log(Usuario.seguidores[4]);
  
  const Pokemon = {
    count: 1126,
    next: "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
    previous: null,
    results: [
      {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
        attacks:['hoja afilada','latigo cepa','drenadoras']
      },
      {
        name: "ivysaur",
        url: "https://pokeapi.co/api/v2/pokemon/2/",
      },
      {
        name: "venusaur",
        url: "https://pokeapi.co/api/v2/pokemon/3/",
  
      },
    ],
  };
  
  // const { count: contador, results } = Pokemon;
  
  // const [pok1] = results;
  
  // const { name } = pok1;
  // console.log(name);
  
  // results.forEach((result) => {
  //     // result.url
  //     // ({ a, b } = { a: 10, b: 20 });
  
  //   const { url } = result;
  //   console.log(url)
  // });
  
  
  // const {previous,results} = Pokemon
  // console.log(results)
  
  // const [, pok2]= results
  
  // const {name}= pok2
  // console.log(name)
  
  // const {results}= Pokemon
  // console.log(results)
  // const [pok0]= results
  // console.log(pok0)
  // const {attacks}=pok0
  // console.log(attacks)
  // const [ , ,attack3] = attacks
  // console.log(attack3)
  
  // let arrayMin = [2, 5, 7, 1, 9];
  // console.log(arrayMin)
  // console.log(...arrayMin)
  // let minimo = Math.min(...arrayMin);
  // console.log(minimo)
  
  // const array1 = ['patata', 'tomate', 'lechuga'];
  // const array2 = [1, true, 'chocolate']
  
  // const newArray = [...array1,...array2]
  // console.log(newArray)
  
  // const objeto1 = {
  //     a: 10,
  //     b: 'caracola'
  // }
  
  // const objeto2 = {
  //     c: 2,
  //     d: 'cocacola'
  // }
  
  // const newObj = {...objeto1,...objeto2}
  
  // console.log(newObj)
  
//   const Usuario2 = {
//       nombre: 'Laura',
//       email: 'laura@gmail.com',
//       edad: 31,
//       registrado: false,
//       seguidores: ['Ger', 'Gabriel', 'Angela'],
//       passwrod:'mimamamemima'
//   }
  
//   const {passwrod,registrado,...resto} = Usuario2
//   console.log(resto)
  
  
  
//   const listarArticulos = (...articulos) => {
//       console.log(articulos);
//   }
  
//   listarArticulos('Hola', 2, true, {a:3, c:17}, [1,2,3,4])
//   // listarArticulos('Tarjeta de credito', 'Paragüas', 'Mochila')
//   // listarArticulos(2,3,7,10,23)