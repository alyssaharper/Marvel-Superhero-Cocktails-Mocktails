var body = document.querySelector("#body")
// Ingrdient will be a varaible affected by user selected character.
var ingredient = "lime_juice";

//Function to get random cocktail ID based on selected ingredient
var selectCocktail = function(){
    var cocktailQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient;
    

    fetch(cocktailQueryURL).then(function(response) {
        response.json().then(function (data) {
            //Gets random number based on available drinks
            var rndNum = Math.floor(Math.random() * (data.drinks.length))
            //Pulls random cocktail ID
            getCocktailName(data.drinks[rndNum].idDrink);
        })
    });
    }
    
selectCocktail();

//Takes cocktail ID and gets desired cocktail attributes.
var getCocktailName = function(cocktailID){
    var cocktailURL = ("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + cocktailID);
    fetch(cocktailURL).then(function(response) {
        response.json().then(function(data){
            //runs all functions to add data to html
            renderCocktailImage(data.drinks[0].strDrinkThumb);
            renderCocktailName(data.drinks[0].strDrink);
            for (let i=1; i<15; i++){
                if (data.drinks[0]['strIngredient' + i]!==null){
                    renderCocktailIngredients(data.drinks[0]['strMeasure' + i], data.drinks[0]['strIngredient' + i])
                }
            }

            renderCocktailInstructions(data.drinks[0].strInstructions);
        })
    })
}

//renders cocktail name
var renderCocktailName = function(n) {
  var tag = document.createElement("div");
  tag.classList.add('title'); 
  var text = document.createTextNode(n); 
  tag.appendChild(text); 
  var element = document.getElementById("cocktailCard");
  element.appendChild(tag);
}

//renders cocktail instructions
var renderCocktailInstructions = function(n) {
    var tag = document.createElement("div");
    tag.classList.add('content');
    var text = document.createTextNode(n); 
    tag.appendChild(text); 
    var element = document.getElementById("cocktailCard");
    element.appendChild(tag);
}

//renders cocktail image
var renderCocktailImage = function(n) {
    var img = document.createElement("img");
    img.classList.add('card-image');
    img.src = n;
    var element = document.getElementById("cocktailCard");
    element.appendChild(img);
}

//renders cocktail measurements if there is one and ingredients
var renderCocktailIngredients = function(a, b) {
    if (a===null) {
        var tag = document.createElement("ul");
        var ingredient = document.createTextNode(b);
        tag.appendChild(ingredient);
        
        var div = document.createElement("div")
        div.classList.add('card-content');
        div.appendChild(tag);
    
        var element = document.getElementById("cocktailCard");
        element.appendChild(tag);

    } else {
    var tag = document.createElement("ul");
    var ingredient = document.createTextNode(a+" "+b);
    tag.appendChild(ingredient);
    
    var div = document.createElement("div")
    div.classList.add('card-content');
    div.appendChild(tag);

    var element = document.getElementById("cocktailCard");
    element.appendChild(tag);
    }
}