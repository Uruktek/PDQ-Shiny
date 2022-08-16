//https://pokeapi.co/api/v2/pokemon/ditto

const btn = document.querySelector('button');//Looking for the button itself
let searchUrlForPokemon = "https://pokeapi.co/api/v2/pokemon/";//The basic url before adding anything from the text box.
let pokemonNameForUrl = document.getElementById("pname").textContent;//Getting the data from the text box of choice


//Creating an event listner based on the click event of the button
btn.addEventListener('click',function(event){
    //Checking to see if the textbox is empty before issuing a null search on the api
    if (!pokemonNameForUrl) {
        fetch(url)
        .then(res => res.json())
        .then(out => console.log('This is reporting json', out));
    }
})
