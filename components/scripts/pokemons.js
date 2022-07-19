document.querySelector('#submit').addEventListener('click', () => {
	const userInput = document.querySelector('#userInput');
	request(userInput);
});

request = (userInput) => {
	fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
		.then((response) => response.json())
		.then(function(pokeDataSpecie) {
			renderPokeColor(pokeDataSpecie);
		});
};

// function fetchPokemonSpecies() {
// 	fetch('https://pokeapi.co/api/v2/pokemon-species').then((response) => response.json()).then(function(allSpecies) {
// 		allSpecies.results.forEach(function(pokemonSpecie) {
// 			pokemonData(pokemonSpecie);
// 		});
// 	});
// }

// function pokemonDataSpecie(pokemonSpecie) {
// 	let link = pokemonSpecie.url; // <--- this is saving the pokemon url to a variable to use in the fetch.
// 	fetch(link).then((response) => response.json()).then(function(pokeDataSpecie) {
// 		renderPokeColor(pokeDataSpecie);
// 	});
// }

// function renderPokeColor(pokeDataSpecie) {
// 	let renderPokeColor = document.getElementsByClassName('card');
// 	renderPokeColor.classList.add(`${pokeDataSpecie.id.color}`);

// 	containerPokemon.append(renderPokeColor);
// }
