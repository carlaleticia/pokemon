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

let dropdownStart = document.querySelector('.checkbox-dropdown');
dropdownStart.addEventListener('click', (e) => {
	dropdownStart.classList.toggle('is-active');
});
