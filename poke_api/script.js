const pokeApi = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/`;

// DOM elements
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchRandom = document.getElementById("search-random");
const searchForm = document.getElementById("search-form");

// Pokémon info
const pokemonName = document.getElementById("pokemon-name");
const pokemonID = document.getElementById("pokemon-id");
const spriteContainer = document.getElementById("sprite-container");
const types = document.getElementById("types");
const height = document.getElementById("height");
const weight = document.getElementById("weight");

// pokemon stats
const pokeHp = document.getElementById("hp");
const pokeAttack = document.getElementById("attack");
const pokeDefense = document.getElementById("defense");
const pokeSpAttack = document.getElementById("special-attack");
const pokeSpDefense = document.getElementById("special-defense");
const pokeSpeed = document.getElementById("speed");

const getPokemon = async () => {
    try {
        const pokemonIdName = searchInput.value.toLowerCase();
        const res = await fetch(`${pokeApi}${pokemonIdName}`);
        const data = await res.json();
        console.log(data);

        // Set Pokémon info
        pokemonName.textContent = `${data.name}`;
        pokemonID.textContent = `#${data.id}`;
        spriteContainer.innerHTML = `<img src="${data.sprites.front_default}" alt="Pokémon Sprite">`;
        types.innerHTML = data.types.map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`).join("");
        pokeHp.textContent = `${data.stats[0].base_stat}`;
        pokeAttack.textContent = `${data.stats[1].base_stat}`;
        pokeDefense.textContent = `${data.stats[2].base_stat}`;
        pokeSpAttack.textContent = `${data.stats[3].base_stat}`;
        pokeSpDefense.textContent = `${data.stats[4].base_stat}`;
        pokeSpeed.textContent = `${data.stats[5].base_stat}`;
    } catch (err) {
        console.log(err);
        alert("Pokémon not found");
    }
};

const getRandomPokemon = async () => {
    try {
        const randomId = Math.floor(Math.random() * 898) + 1; // Pokémon IDs range from 1 to 898
        const res = await fetch(`${pokeApi}${randomId}`);
        const data = await res.json();
        console.log(data);

        // Set Pokémon info
        pokemonName.textContent = `${data.name}`;
        pokemonID.textContent = `#${data.id}`;
        spriteContainer.innerHTML = `<img src="${data.sprites.front_default}" alt="Pokémon Sprite">`;
        types.innerHTML = data.types.map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`).join("");
        pokeHp.textContent = `${data.stats[0].base_stat}`;
        pokeAttack.textContent = `${data.stats[1].base_stat}`;
        pokeDefense.textContent = `${data.stats[2].base_stat}`;
        pokeSpAttack.textContent = `${data.stats[3].base_stat}`;
        pokeSpDefense.textContent = `${data.stats[4].base_stat}`;
        pokeSpeed.textContent = `${data.stats[5].base_stat}`;
    } catch (err) {
        console.log(err);
        alert("Pokémon not found");
    }
};

const resetDisplay = () => {
    const sprite = document.getElementById("sprite");
    if (sprite) sprite.remove();

    // reset stats
    pokemonName.textContent = "";
    pokemonID.textContent = "";
    types.innerHTML = "";
    height.textContent = "";
    weight.textContent = "";
    hp.textContent = "";
    attack.textContent = "";
    defense.textContent = "";
    specialAttack.textContent = "";
    specialDefense.textContent = "";
    speed.textContent = "";
};

searchForm.addEventListener("submit", e => {
    e.preventDefault();
    getPokemon();
});

searchRandom.addEventListener("click", e => {
    e.preventDefault();
    getRandomPokemon();
});
