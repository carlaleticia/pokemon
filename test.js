// const axios = require("axios").default;

///not
// const getPokemon = async () => {
//   let pokemon;

//   try {
//     pokemon = await axios({
//         url: 'https://pokeapi.co/api/v2/pokemon',
//         method: 'GET'
//     });
//     console.log(pokemon);
//   } catch (error) {
//     throw new Error("Cannot find pokemon");
//   }
// };
// getPokemon();

///right

// const typePokemon = async() =>{
// let type;
// try{
//   type = await axios({
//     url:"https://pokeapi.co/api/v2/type/",
//     method: 'GET'
//   });
// console.log(type);
// } catch (error) {
// throw new Error("Cannot find pokemon");
// }
// };
// typePokemon();