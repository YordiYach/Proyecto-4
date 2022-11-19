const pokemonContainer = document.querySelector(".contenedor");

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
    });
}

function fetchPokemons(cantidad) {
  for (let i = 1; i <= cantidad; i++){
    let aleatorio = Math.floor(Math.random()*100);
    fetchPokemon(aleatorio);
}
}

fetchPokemons(6);

function createPokemon(pokemon) {
  const card = document.createElement('div');
  card.classList.add('pokemon-block');

  const spriteContainer = document.createElement('div');
  spriteContainer.classList.add('image-container');

  const sprite = document.createElement('img');
  sprite.src = pokemon.sprites.front_default

  spriteContainer.appendChild(sprite);

  const numero = document.createElement('p');
  numero.textContent = `Pokemon No. #${pokemon.id.toString().padStart(3,0)}`;

  const name = document.createElement('p');
  name.classList.add('name');
  name.textContent = pokemon.name

  card.appendChild(spriteContainer);
  card.appendChild(numero);
  card.appendChild(name);

  pokemonContainer.appendChild(card);
}

