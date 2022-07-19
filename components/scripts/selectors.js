document.addEventListener('DOMContentLoaded', renderEverything);

function renderEverything() {
	let allPokemonContainer = document.querySelector('#poke-container');
	allPokemonContainer.innerText = '';
	fetchPokemon();
}

function fetchPokemon() {
	fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
		.then((response) => response.json())
		.then(function(allpokemon) {
			allpokemon.results.forEach(function(pokemon) {
				fetchPokeApi(pokemon);
			});
		});
}
let limit = 24;
let changeLimit = limit + 24;

function loadMoreBtn() {
	loadMoreBtn = document.getElementById('loadMoreBtn');
	loadMoreBtn.addEventListener('onclick', changeLimit);
	loadMoreBtn.addEventListener('DOMContentLoaded', renderEverything);
}

function fetchPokeApi(pokemon) {
	let pokeApi = pokemon.url;
	fetch(pokeApi).then((response) => response.json()).then(function(pokeData) {
		let dropdownTypes = document.getElementById('type');
		const { types } = pokeData;

		renderPokemon(pokeData);
	});
}

function renderPokemon(pokeData) {
	let allPokemonContainer = document.getElementById('poke-container');
	let pokeContainer = document.createElement('div');
	pokeContainer.classList.add('card');

	let imgContainer = document.createElement('div'); //div will be used to hold the data/details for indiviual pokemon.{}
	imgContainer.classList.add('image');

	let pokeNumber = document.createElement('p');
	pokeNumber.innerText = `#${pokeData.id}`;

	createPokeImage(pokeData.id, imgContainer);

	let infoContainer = document.createElement('div');
	infoContainer.classList.add('info');

	let pokeName = document.createElement('h4');
	pokeName.innerText = pokeData.name;

	let pokeTypes = document.createElement('ul'); //ul list will hold the pokemon types
	createTypes(pokeData.types, pokeTypes); // helper function to go through the types array and create li tags for each one

	infoContainer.append(pokeName, pokeTypes); //appending all details to the imgContaine div

	imgContainer.append(pokeNumber);
	pokeContainer.append(infoContainer, imgContainer); //appending that imgContaine div to the main div which will hold all the pokemon cards

	allPokemonContainer.append(pokeContainer);
}

function createTypes(types, ul) {
	types.forEach(function(type) {
		let typeLi = document.createElement('li');
		typeLi.innerText = type['type']['name'];
		ul.append(typeLi);
	});
}
// Make the drowpdown

let dropdownTypes = document.getElementById('type');
const getPokemonTypes = () => {
	fetch('https://pokeapi.co/api/v2/type').then((result) => result.json()).then((result) => {
		const { results } = result;

		const typesArray = [];
		results.forEach((resultObj) => typesArray.push(resultObj.name));

		typesArray.forEach((type) => {
			const divType = document.createElement('li');
			divType.classList.add('checkbox-css');
			divType.innerHTML = type;

			let checkbox = document.createElement('input');
			checkbox.type = 'checkbox';

			divType.append(checkbox);
			dropdownTypes.append(divType);
		});
	});
};

getPokemonTypes();

function createPokeImage(pokeID, containerDiv) {
	let pokeImgContainer = document.createElement('div');
	pokeImgContainer.classList.add('image');
	let pokeImage = document.createElement('img');
	pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeID}.svg`;
	pokeImgContainer.append(pokeImage);
	containerDiv.append(pokeImgContainer);
}

function createTypes(types, ul) {
	types.forEach(function(type) {
		let typeLi = document.createElement('li');
		typeLi.innerText = type['type']['name'];
		ul.append(typeLi);
	});
}

getPokemonTypes();

let dropdownStart = document.querySelector('.checkbox-dropdown');
dropdownStart.addEventListener('click', (e) => {
	dropdownStart.classList.toggle('is-active');
});

// const colors = ['black', 'blue', 'brown', 'gray', 'green', 'pink', 'purple', 'red', 'white'];
