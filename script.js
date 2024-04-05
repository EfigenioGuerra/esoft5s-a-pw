let procura = new URLSearchParams(location.search)
document.title = "Página do " + procura.get("evolucao")

const body = document.getElementById("body")
let pokeImage = fetch('https://pokeapi.co/api/v2/pokemon/' + procura.get("evolucao"))
let criaImage = document.createElement('img')
criaImage.src = (pokeImage + "/sprites.front_defaut")
body.appendChild(criaImage)