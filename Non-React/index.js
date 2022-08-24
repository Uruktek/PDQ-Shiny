//https://pokeapi.co/api/v2/pokemon/ditto

//const btn = document.querySelector("button"); //Looking for the button itself
const searchUrlForPokemon = "https://pokeapi.co/api/v2/pokemon/"; //The basic url before adding anything from the text box.

//Creating an event listner based on the click event of the button
document.getElementById("button").addEventListener("click", btnClicked_Trigger);
document
  .getElementById("button")
  .addEventListener("keypress", function (event) {
    console.log("Clicked?");
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("button").click();
      console.log("clicked?");
    }
  });

function btnClicked_Trigger() {
  let pokemonNameForUrl = document.getElementById("pname").value;
  console.log(pokemonNameForUrl);
  let newUrl = searchUrlForPokemon + pokemonNameForUrl;
  console.log(newUrl);
}
