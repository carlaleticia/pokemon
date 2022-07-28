const pokeContainer = document.getElementById('poke-container');
const pokeLimit = 36;

// function loadMoreBtn() {
let loadMoreBtn = document.getElementById('loadMoreBtn');
loadMoreBtn.addEventListener('click', (e) => {
	pokeLimit + 24;
});

const pokeColors = {
	normal: '#f8edeb',
	fire: '#ffcfd2',
	grass: '#b9fbc0',
	electric: '#fbf8cc',
	water: '#ade8f4',
	ground: '#c3a995',
	rock: '#9d6b53',
	fairy: '#fadde1',
	poison: '#cdb4db',
	bug: '#f8d5a3',
	dragon: '#95d5b2',
	psychic: '#f2daff',
	flying: '#eae8ff',
	fighting: '#72efdd'
};

const pokeMainTypeColor = Object.keys(pokeColors);

const fetchPokemons = async () => {
	for (let i = 1; i <= pokeLimit; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const data = await res.json();
	createPokemonCard(data);
	// createPokemonFullCard(data);
};

const createPokemonCard = (pokemon) => {
	let allPokemonContainer = document.getElementById('poke-container');
	let pokeCard = document.createElement('div');
	pokeCard.classList.add('card');

	const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const pokeId = pokemon.id.toString().padStart(3, '0');

	const pokeAllTypes = pokemon.types.map((type) => type.type.name);
	// const types = pokeAllTypes.map((type) => {
	// 	// Study this part
	// 	return `<ul class="pokeType">${type}</ul>`;
	// });
	const types = pokeAllTypes.join('\r\n');

	const pokeType = pokeMainTypeColor.find((type) => pokeAllTypes.indexOf(type) > -1); //  get the bgcolor for the card
	const pokeColor = pokeColors[pokeType];

	pokeCard.style.backgroundColor = pokeColor;

	const pokemonInnerHTML = `
    <div class="info">
        <h4 class="pokeName">${pokeName}</h4>
        <ul class="pokeType">${types}</ul>

    </div>
    <div class="pokeImg">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg" alt="${pokeName}">
        <p class="pokeId">#${pokeId}</p>
    </div>
    
    `;

	pokeCard.innerHTML = pokemonInnerHTML;

	allPokemonContainer.appendChild(pokeCard);

	// pokeCard.addEventListener('click', createPokemonFullCard());

	// Create Full Card Pokemon
};

const createPokemonFullCard = (pokemon) => {
	const pokeAbilities = pokemon.abilities.map((abilities) => abilities.ability.name.replace('-', ' '));
	const pokeExperience = pokemon.base_experience;
	const pokeHealth = pokemon.stats[0].base_stat;
	const pokeAttack = pokemon.stats[1].base_stat;
	const pokeDefense = pokemon.stats[2].base_stat;
	const pokeAttackSuper = pokemon.stats[3].base_stat;
	const pokeDefenseSuper = pokemon.stats[4].base_stat;

	function getPokeGeneretion() {
		if (pokemon.id > 0 && pokemon.id <= 151) return 'Generation 1';
		if (pokemon.id > 151 && pokemon.id <= 251) return 'Generation 2';
		if (pokemon.id > 251 && pokemon.id <= 386) return 'Generation 3';
		if (pokemon.id > 386 && pokemon.id <= 493) return 'Generation 4';
		if (pokemon.id > 493 && pokemon.id <= 649) return 'Generation 5';
		if (pokemon.id > 649 && pokemon.id <= 721) return 'Generation 6';
		if (pokemon.id > 721 && pokemon.id <= 809) return 'Generation 7';
		if (pokemon.id > 809 && pokemon.id <= 890) return 'Generation 8';
		if (pokemon.id <= 0 || pokemon.id > 891) return 'New';
	}

	const displayInfoInnerHTML = `
	<main class="displayCard">
	<container class="pokeCard">
		<div class="pokeImgCard">
			<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg" alt="${pokeName}">
			<ul class="pokeType">${pokeAllTypes}</ul>
		</div>

		<div class="pokeInfoCard">
			<div class="pokeInfo">
				<div class="pokeTitle">
					<h3 class="pokeName">${pokeName}</h3>
					<p class="pokeGen">${getPokeGeneretion()}</p>
				</div>
				<p class="pokeId">#${pokeId}</p>
			</div>
			<div class="pokeAbilities">
				<h3>Abilities</h3>
				<p> ${pokeAbilities}</p>
			</div>
			<div class="points">
				<div class="pokeExperience">
					<h3>Experience</h3>
					<p>${pokeExperience}</p>
				</div>
				<div class="pokeHealth">
					<h3>Healthy Points</h3>
					<p>${pokeHealth}</p>
				</div> 
			</div>
			<div class="pokeRangers">
				<div>
					<p class="pokeAttack">${pokeAttack}</p>
					<p>Attack</p>
				</div>
				<div>
					<p class="pokeDefense">${pokeDefense}</p>
					<p>Defense</p>
					
				</div>
				<div >
					<p class="pokeAttackSuper">${pokeAttackSuper}</p>
					<p>Sp Attack</p>
				</div>
				<div >
					<p class="pokeDefense">${pokeDefenseSuper}</p>
					<p>Sp Defense</p>
				</div>
			</div>
		</div>
	</container>
	<main>
	`;

	pokeCardDesc.innerHTML = displayInfoInnerHTML;
	pokeDescription.appendChild(pokeCardDesc);
};

fetchPokemons();
// const card = document.querySelector.getElementsByClassName('card');
// card.addEventListener('click', (createPokemonFullCard.innerHTML = displayInfoInnerHTML));
