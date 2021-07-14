var body = document.querySelector("#body")
// Ingrdient will be a varaible affected by user selected character.
var ingredient = "gin";

var selectCocktail = function(){
    var cocktailQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient;
    

    fetch(cocktailQueryURL).then(function(response) {
        response.json().then(function (data) {
            console.log(data);
            console.log(data.drinks[13].idDrink);
            getCocktailName(data.drinks[13].idDrink);
        })
    });
    }
selectCocktail();

var getCocktailName = function(d){
    var cocktailURL = ("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + d);
    fetch(cocktailURL).then(function(response) {
        response.json().then(function(data){
            console.log(data.drinks[0].strDrink);
            renderCocktailName(data.drinks[0].strDrink);
        })
    })
}

var renderCocktailName = function(r) {
    var h1 = document.createElement("h1");
    h1.textContent = r;
    body.push(h1)
}

