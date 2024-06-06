async function fetchPokemon() {
    const pokemonId = Math.floor(Math.random() * 898) + 1; // Genera un número aleatorio entre 1 y 898
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      displayPokemon(data);
    } catch (error) {
      console.log('Error al obtener el Pokémon:', error);
    }
  }
  
  function displayPokemon(pokemon) {
    const pokemonContainer = document.getElementById('pokemon-container');
  
    const card = `
      <div class="col-md-4">
        <div class="card">
          <img src="${pokemon.sprites.front_default}" class="card-img-top img-fluid" alt="${pokemon.name}">
          <div class="card-body">
            <h5 class="card-title">${pokemon.name}</h5>
            <p class="card-text"><strong>Tipo:</strong> ${pokemon.types.map(type => type.type.name).join(', ')}</p>
            <p class="card-text"><strong>Peso:</strong> ${pokemon.weight} kg</p>
            <p class="card-text"><strong>Altura:</strong> ${pokemon.height} cm</p>
          </div>
        </div>
      </div>
    `;
  
    pokemonContainer.innerHTML = card;
  }
  