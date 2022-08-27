const searchUrlForPokemon = "https://pokeapi.co/api/v2/pokemon/";
document.getElementById("button").addEventListener("click", btnClicked_Trigger);
document.getElementById("pname").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button").click();
  }
});
function btnClicked_Trigger() {
  let pokemonNameForUrl = document.getElementById("pname").value;
  let newUrl = searchUrlForPokemon + pokemonNameForUrl;
  jsonPokemonResult(newUrl);
}
async function jsonPokemonResult(customUrl) {
  const response = await fetch(customUrl);
  try {
    const customJsonData = await response.json();
    let htmlImageSource = `<img src="${extractShinySprite}" width="500" height="600">`;
    let extractShinySprite = customJsonData["sprites"]["front_shiny"];
    document.body.insertAdjacentHTML("afterbegin", htmlImageSource);
  } catch (error) {}
}
