//https://pokeapi.co/api/v2/pokemon/ditto

let url = "https://pokeapi.co/api/v2/pokemon/ditto";

//Then is a part of a Promise which has a on success or on failure
//The first then with response is the success and can be manuplated
let stuff;

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => console.log(jsondata));
