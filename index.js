const searchUrlForPokemon = "https://pokeapi.co/api/v2/pokemon/";

let touchEvent = "ontouchstart" in window ? "touchstart" : "click";
document
  .getElementById("button")
  .addEventListener(touchEvent, btnClicked_Trigger);

document.getElementById("pname").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    //event.preventDefault();
    document.getElementById("button").click();
  }
});

function btnClicked_Trigger() {
  let pokemonNameForUrl = document.getElementById("pname").value.toLowerCase();
  let newUrl = searchUrlForPokemon + pokemonNameForUrl;

  jsonGet(newUrl).then((data) => {
    let extractShinySprite = data.sprites.front_shiny;
    let htmlImageSource = `<img src="${extractShinySprite}" width="100" height="100">`;
    setPageBlank();
    document.body.insertAdjacentHTML("afterbegin", htmlImageSource);
    refreshPage();
  });
}
async function jsonGet(url = "") {
  const response = await fetch(url);
  return response.json();
}

function setPageBlank() {
  let lbl = document.getElementById("lbl");
  let pname = document.getElementById("pname");
  let button = document.getElementById("button");

  lbl.parentNode.removeChild(lbl);
  pname.parentNode.removeChild(pname);
  button.parentNode.removeChild(button);
}

function refreshPage() {
  setTimeout(function () {
    location.reload();
  }, 5000);
}
