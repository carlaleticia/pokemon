// function createNode(element) {
//     return document.createElement(element);
// }

// function append(parent, el) {
//   return parent.appendChild(el);
// }

// const cardColor = document.getElementById('card');
// const url = 'https://pokeapi.co/api/v2/pokemon-color';

// fetch(url)
// .then((resp) => resp.json())
// .then(function(data) {
//   let card = data.rescardColorts;
//   return card.map(function(card) {
//     let li = createNode('li');
//     let img = createNode('img');
//     let span = createNode('span');
//     img.src = card.picture.medium;
//     span.innerHTML = `${card.name.first} ${card.name.last}`;
//     append(li, img);
//     append(li, span);
//     append(cardColor, li);
//   })
// })
// .catch(function(error) {
//   console.log(error);
// });