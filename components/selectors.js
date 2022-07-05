document.addEventListener("DOMContentLoaded", renderEverything);

function renderEverything() {
  let allPokemonContainer = document.querySelector("#poke-container");
  allPokemonContainer.innerText = "";
  fetchPokemon();


  (function($) {
    //Setamos o valor inicial
    let fetchPokemonShow = 24;
  
    //escondemos todos os elementos maior que o valor inicial
    $("#poke-container").slice(fetchPokemonShow).hide();
  
    $('#load-more').click(function() {
  
      //Somamos a quantidade nova a ser exibida
      fetchPokemonShow += 24;
  
      //Rodamos o loop no valor total
      for (let i = 0; i < fetchPokemonShow; i++) {
        //Mostramos o item
        $('#poke-containeri').eq(i).show();
      }
    });
  
  }(jQuery));
}

function fetchPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=24")
    .then((response) => response.json())
    .then(function (allpokemon) {
      allpokemon.results.forEach(function (pokemon) {
        fetchPokemonData(pokemon);
      });
    });
}

function fetchPokemonData(pokemon) {
  let url = pokemon.url; // <--- this is saving the pokemon url to a variable to use in the fetch.
  fetch(url)
    .then((response) => response.json())
    .then(function (pokeData) {
      let dropdownTypes = document.getElementById("type");
      const { types } = pokeData;

      // const { colors } = changeBgColor;

      renderPokemon(pokeData);
      
    });
}





const colorsNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const findPokemonColors = (nums) => {
  const speciesData = [];
  nums.forEach((num) => {
      fetch(`https://pokeapi.co/api/v2/pokemon-color/${num}`)
      .then((response) => response.json())
      .then(function (dataColors){
          const {name, pokemon_species} = dataColors;
        speciesData.push({
          name,
          species: pokemon_species
        })
      })
    }
  )
  return speciesData
}

const pokeColorData = findPokemonColors(colorsNums);
// const blackPokemons = [];

// pokeColorData.forEach((obj) => {
//   if (obj.name === 'blue') {
//     blackPokemons.push(obj.species)
//   }
// })


pokeColorData.forEach((colorObj) => {
  if (colorObj.species.includes(pokeData.species.name)) {
    pokeContainer.style.backgroundColor = colorObj.name
  } else {
    console.log('fuck')
  }
})

function renderPokemon(pokeData) {
  let allPokemonContainer = document.getElementById("poke-container");
  let pokeContainer = document.createElement("div");
  pokeContainer.classList.add("card");

  let imgContainer = document.createElement("div"); //div will be used to hold the data/details for indiviual pokemon.{}
  imgContainer.classList.add("image");

  let pokeNumber = document.createElement("p");
  pokeNumber.innerText = `#${pokeData.id}`;

  createPokeImage(pokeData.id, imgContainer);

  let infoContainer = document.createElement("div");
  infoContainer.classList.add("info");

  let pokeName = document.createElement("h4");
  pokeName.innerText = pokeData.name;

  let pokeTypes = document.createElement("ul"); //ul list will hold the pokemon types
  createTypes(pokeData.types, pokeTypes); // helper function to go through the types array and create li tags for each one

  infoContainer.append(pokeName, pokeTypes); //appending all details to the imgContaine div

  imgContainer.append(pokeNumber);
  pokeContainer.append(infoContainer, imgContainer); //appending that imgContaine div to the main div which will hold all the pokemon cards

  allPokemonContainer.append(pokeContainer);

}

function createTypes(types, ul) {
  types.forEach(function (type) {
    let typeLi = document.createElement("li");
    typeLi.innerText = type["type"]["name"];
    ul.append(typeLi);
  }); 
}

let dropdownTypes = document.getElementById("type");
const getPokemonTypes = () => {
  fetch("https://pokeapi.co/api/v2/type")
    .then((result) => result.json())
    .then((result) => {
      const { results } = result;

      const typesArray = [];
      results.forEach((resultObj) => typesArray.push(resultObj.name));

      typesArray.forEach((type) => {
        
        const divType = document.createElement('li');
        divType.classList.add("checkbox-css");
        divType.innerHTML = type;
        
  
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        divType.append(checkbox);
        dropdownTypes.append(divType);
      });
    });
};

getPokemonTypes();

function createPokeImage(pokeID, containerDiv) {
  let pokeImgContainer = document.createElement("div");
  pokeImgContainer.classList.add("image");
  let pokeImage = document.createElement("img");
  pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeID}.svg`;
  pokeImgContainer.append(pokeImage);
  containerDiv.append(pokeImgContainer);
  
  

  // function changeBgColors(colors){
  //   colors.forEach(function (cardColor){
  //   cardColor.classList.add("`$color`");
  //   });
  // }

}



// Make the drowpdown

let dropdownStart = document.querySelector(".checkbox-dropdown");
dropdownStart.addEventListener("click", (e) => {
  dropdownStart.classList.toggle("is-active");
});

////////////

// const colors = ['black', 'blue', 'brown', 'gray', 'green', 'pink', 'purple', 'red', 'white'];