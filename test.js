const axios = require("axios").default;

const getPokemon = async () => {
  let pokemon;

  try {
    pokemon = await axios({
        url: 'https://pokeapi.co/api/v2/pokemon',
        method: 'GET'
    });
    console.log(pokemon);
  } catch (error) {
    throw new Error("Cannot find pokemon");
  }
};

getPokemon();
