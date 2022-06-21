// const axios = require("axios").default;

// const findPokemonTypes = async () => {
//   let pokemonTypes;
//   try {
//     pokemonTypes = await axios.get("https://pokeapi.co/api/v2/type/");
//   } catch (error) {
//     throw new Error(error);
//   }

//   const { data: rawData } = pokemonTypes;

//   const pokemonTypesRaw = [];
//   rawData.results.forEach((type) => pokemonTypesRaw.push(type.name));

//   const dropdown = document.getElementsByClassName("checkbox-dropdown");

//   dropdown.addEventListener("click", function () {
//     pokemonTypesRaw.forEach((type) => {
//       dropdown.insertAdjacentHTML(
//         "afterbegin",
//         ` <li><label><input type="checkbox"/>${type}</label></li>`
//       );
//     });
//   });
// };

// findPokemonTypes();


//  // Create a list item
//  function createTypeList() {
//   let li = document.createElement("li");
//   let inputValue = document.getElementById("myInput").value;
//   let t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === "") {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUl").appendChild(li);
//     count++;
//     changeMessage();
//   }
//   document.getElementById("myInput").value = "";

//   let span = document.createElement("span");
//   let txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);