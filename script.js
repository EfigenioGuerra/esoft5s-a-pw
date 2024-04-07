document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const evolutionName = urlParams.get('evolucao');

    async function fetchPokemon() {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${evolutionName}`);
            const data = await response.json();
            const pokemonImage = data.sprites.front_default;

            if (!pokemonImage) {
                throw new Error("Imagem não encontrada para este Pokémon.");
            }

            const img = document.createElement('img');
            img.src = pokemonImage;
            img.alt = evolutionName;
            img.setAttribute('aria-label', `${evolutionName} Image`);

            const pokemonInfo = document.getElementById('pokemon-info');
            pokemonInfo.appendChild(img);

            let elementoPai = document.getElementById("header")

            let titulo = document.createElement("h1")
            titulo.innerHTML = ${procura.get("nome")}
            elementoPai.appendChild(titulo)

        } catch (error) {
            console.error("Ocorreu um erro ao carregar a imagem do Pokémon:", error.message);
        }
    }

    fetchPokemon();
});