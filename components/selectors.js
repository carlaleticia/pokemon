document.addEventListener("DOMContentLoaded", renderEverything);

function renderEverything() {
  let allPokemonContainer = document.querySelector("#poke-container");
  allPokemonContainer.innerText = "";
  fetchPokemon();
}

function fetchPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=354")
    .then((response) => response.json())
    .then(function (allpokemon) {
      allpokemon.results.forEach(function (pokemon) {
        fetchPokemonData(pokemon);
      });
    });
}

function fetchPokemonData(pokemon) {
  let url = pokemon.url; // <--- this is saving the pokemon url to a variable to use in the fetch.
  //Example: https://pokeapi.co/api/v2/pokemon/1/"
  fetch(url)
    .then((response) => response.json())
    .then(function (pokeData) {
      let dropdownTypes = document.getElementById("type");
      const { types } = pokeData;

      // types.forEach((type) => {
      //   dropdownTypes.insertAdjacentHTML(
      //     "afterbegin",
      //     `<li><label><input type="checkbox"/>${type}</label></li>`
      //   );
      // });

      renderPokemon(pokeData);
    });
}

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

      console.log(typesArray);

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

// let dropdownTypes = document.getElementById("type");
// const createDropdown = (types) => {
//   console.log(types);
//   types.forEach((type) => {
//     dropdownTypes.insertAdjacentHTML(
//       "afterbegin",
//       `<li><label><input type="checkbox"/>${type}</label></li>`
//     );
//   });
// };

// createDropdown(typesList);

function createPokeImage(pokeID, containerDiv) {
  let pokeImgContainer = document.createElement("div");
  pokeImgContainer.classList.add("image");
  // pokeImgContainer.style="flex"
  let pokeImage = document.createElement("img");
  pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeID}.svg`;
  pokeImgContainer.append(pokeImage);
  containerDiv.append(pokeImgContainer);
}

// Make the drowpdown

let dropdownStart = document.querySelector(".checkbox-dropdown");
dropdownStart.addEventListener("click", (e) => {
  dropdownStart.classList.toggle("is-active");
});

/////////////

// let dropdownTypes = document.getElementById('type');
// dropdownTypes.insertAdjacentHTML('afterbegin', `<li><label><input type="checkbox"/>${type}</label></li>`);

// document.body.onload = adcElemento;

// function adcElemento () {
//   // cria um novo elemento div
//   // e dá à ele conteúdo
//   let divNova = document.createElement("li");
//   let conteudoNovo = document.createElement("input").type('checkbox')
//   divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

//   // adiciona o novo elemento criado e seu conteúdo ao DOM
//   let divAtual = document.getElementById("type");
//   document.body.insertafter(divNova, divAtual);
// }

// function deleteEverything(event){
//   event.target.style = 'none';
//   let allPokemonContainer = document.querySelector('#poke-container')
//   allPokemonContainer.innerText = ""

// let generateBtn = document.createElement('button')
// generateBtn.classList.add('secondary', 'button')
// generateBtn.addEventListener('DOMContentLoaded', renderEverything);

// allPokemonContainer.append(generateBtn)
// }
