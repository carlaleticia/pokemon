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
