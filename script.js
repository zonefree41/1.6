let pokemonRepository = (function () {
  let repository = [
    {
      name: "Bulbasaur",
      height: 0.7,
      types: ["grass", "poison"],
    },
    {
      name: "Charizard",
      height: 1.7,
      types: ["fire", "flying"],
    },
    {
      name: "Squirtle",
      height: 1,
      types: ["water"],
    },
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return repository;
  }
  function addListItem(pokemon) {
    const pokemonList = document.querySelector('.pokemon-list');  // Selects the first element with class 'pokemonList'
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.classList.add('button-class');
    button.addEventListener('click', function (event) {
      console.log(event);
    });
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();
(function () {
  // The showDetails function that displays Pokemon information
  function showDetails() {
    const pokemonDetails = document.getElementById('pokemonDetails');
    // Sample Pokemon details (you can fetch or use real data here)
    pokemonDetails.innerHTML =
      `<p>Name: Pikachu</p>
      <p>Type: Electric</p>
      <p>Ability: Static</p>` ;
  }
  // Adding an event listener to the Pokemon button
  document.addEventListener('click', function () {
    const pokemonButton = document.getElementById('pokemonButton');
    pokemonButton.addEventListener('click', showDetails);
  });
  document.getElementById('pokemonButton').addEventListener('click', showDetails);
})();
pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
