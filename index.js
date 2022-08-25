//This is the base url for searching. Its a free and open api for any pokemon data.
//Please send donations to this team for their awesome work and for making it OSS for people.
// - CL 8/24/22
const searchUrlForPokemon = "https://pokeapi.co/api/v2/pokemon/";

//Creating an event listner based on the click event of the button
document.getElementById("button").addEventListener("click", btnClicked_Trigger);

//Adding an event listener if the user should press enter when inside the search box.
//Rather than needing them to press search they can press enter if they're on a computer
//Giving it a modern touch. - CL 8/24/22
document.getElementById("pname").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); //This is needed I think because the event can fail in a default state.  - CL 8/24/22
    document.getElementById("button").click(); //This is purely a code version of clicking on the button with the mouse. - CL 8/24/22
  }
});
//This function is triggered when either the user clicks on search or they press enter (see the function above)
//CL 8/24/22
function btnClicked_Trigger() {
  //First it's getting the text value of the text box called pname aka pokemon name - CL 8/24/22
  let pokemonNameForUrl = document.getElementById("pname").value;
  //This is taking the known API url and adding the pokemon they want to search for. - CL 8/24/22
  let newUrl = searchUrlForPokemon + pokemonNameForUrl;

  //invoing the method to get the json data. - CL 8/24/22
  jsonPokemonResult(newUrl);
}
//Remember this is an async function running on a different thread.  - CL 8/24/22
//This function gets the customurl from above and extracts the json data.  - CL 8/24/22
async function jsonPokemonResult(customUrl) {
  //fetch allows you to get the data from a website without the need for jquery or some plugin - CL 8/24/22
  const response = await fetch(customUrl); //getting the json data - CL 8/24/22

  //TODO:
  //should there be an error it will be here.
  //For example a 404 code should be seen here which means this should probally placed
  //within a try block or something for error checking with the request.
  //  - CL 8/24/22
  const customJsonData = await response.json();

  //TODO:
  //Extracting the actual data that we need for the image to display
  //The first form of this site will only be displaying the shiny itself
  //however a want for a feature is to display the normal sprite and shiny sprite together
  // - CL 8/24/22
  let extractShinySprite = customJsonData["sprites"]["front_shiny"];

  //creating an img source to display crafted by the selection of the user. - CL 8/25/22
  let htmlImageSource = `<img src="${extractShinySprite}" width="500" height="600">`;

  //Rather than trying to clear the screen the new idea is going to
  // be using the entire screen without needing to hide elements for the time being.
  // that said the issue is going to be phones as their sizes are small.
  // I'll POC this idea first and see what my thoughts are after that - CL 8/25/22
  document.body.insertAdjacentHTML("afterbegin", htmlImageSource);
}
