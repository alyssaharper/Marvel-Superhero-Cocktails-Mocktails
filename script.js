var body = document.querySelector("#body")
// Ingrdient will be a varaible affected by user selected character.
var ingredient = "lime_juice";

//Function to get random cocktail ID based on selected ingredient
var selectCocktail = function(){
    var cocktailQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient;
    

    fetch(cocktailQueryURL).then(function(response) {
        response.json().then(function (data) {
            // console.log(data);
            // console.log(data.drinks[2].idDrink);
            //Gets random number based on available drinks
            var rndNum = Math.floor(Math.random() * (data.drinks.length))
            //Pulls random cocktail
            getCocktailName(data.drinks[rndNum].idDrink);
        })
    });
    }

selectCocktail();


var getCocktailName = function(cocktailID){
    var cocktailURL = ("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + cocktailID);
    fetch(cocktailURL).then(function(response) {
        response.json().then(function(data){
            //Create arrays containing just ingredients and measurements so for loop works.
            let ingredientsArray = [data.drinks[0].strIngredient1, data.drinks[0].strIngredient2, data.drinks[0].strIngredient3, data.drinks[0].strIngredient4, data.drinks[0].strIngredient5, data.drinks[0].strIngredient6, data.drinks[0].strIngredient7, data.drinks[0].strIngredient8, data.drinks[0].strIngredient9, data.drinks[0].strIngredient10, data.drinks[0].strIngredient11, data.drinks[0].strIngredient12, data.drinks[0].strIngredient13, data.drinks[0].strIngredient14, data.drinks[0].strIngredient15]
            let measureArray = [data.drinks[0].strMeasure1, data.drinks[0].strMeasure2, data.drinks[0].strMeasure3, data.drinks[0].strMeasure4, data.drinks[0].strMeasure5, data.drinks[0].strMeasure6, data.drinks[0].strMeasure7, data.drinks[0].strMeasure8, data.drinks[0].strMeasure9, data.drinks[0].strMeasure10, data.drinks[0].strMeasure11, data.drinks[0].strMeasure12, data.drinks[0].strMeasure13, data.drinks[0].strMeasure14, data.drinks[0].strMeasure15]
            renderCocktailName(data.drinks[0].strDrink);
            renderCocktailImage(data.drinks[0].strDrinkThumb);
            for (let i=0; i<ingredientsArray.length; i++) {
                if (ingredientsArray[i]!==null) {
                renderCocktailIngredients(measureArray[i],ingredientsArray[i]);}
            };
            renderCocktailInstructions(data.drinks[0].strInstructions);
        })
    })
}

var renderCocktailName = function(n) {
  var tag = document.createElement("h1"); 
  var text = document.createTextNode(n); 
  tag.appendChild(text); 
  var element = document.getElementsByTagName("body")[0];
  element.appendChild(tag);
}

var renderCocktailInstructions = function(n) {
    var tag = document.createElement("p"); 
    var text = document.createTextNode(n); 
    tag.appendChild(text); 
    var element = document.getElementsByTagName("body")[0];
    element.appendChild(tag);
}

var renderCocktailImage = function(n) {
    var img = document.createElement("img");
    img.src = n;
    var element = document.getElementsByTagName("body")[0];
    element.appendChild(img);
}

var renderCocktailIngredients = function(a, b) {
    var tag = document.createElement("ul");
    var ingredient = document.createTextNode(a + " " + b);
    tag.appendChild(ingredient);
    var element = document.getElementsByTagName("body")[0];
    element.appendChild(tag);
}