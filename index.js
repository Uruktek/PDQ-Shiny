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

  jsonGet(newUrl).then((data) => {
    let extractShinySprite = data.sprites.front_shiny;
    let htmlImageSource = `<img src="${extractShinySprite}" width="500" height="600">`;
    document.body.insertAdjacentHTML("afterbegin", htmlImageSource);
  });
}
async function jsonGet(url = "") {
  const response = await fetch(url);
  return response.json();
}
