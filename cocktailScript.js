var body = document.querySelector("#body")
// Ingrdient will be a varaible affected by user selected character.
let selectIngredient = 'lime_juice';
let cmon = 'lemme';
//Function to get random cocktail ID based on selected ingredient
var selectCocktail = function(ingredientHere){
    var cocktailQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredientHere;
    

    fetch(cocktailQueryURL).then(function(response) {
        response.json().then(function (data) {
            //Gets random number based on available drinks
            var rndNum = Math.floor(Math.random() * (data.drinks.length))
            //Pulls random cocktail ID
            getCocktailName(data.drinks[rndNum].idDrink);
        })
    });
}

selectCocktail(selectIngredient);

//Takes cocktail ID and gets desired cocktail attributes.
var getCocktailName = function(cocktailID){
    var cocktailURL = ("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + cocktailID);
    fetch(cocktailURL).then(function(response) {
        response.json().then(function(data){
        //runs all functions to add data to html

            //renders cocktail image
            var img = document.createElement("img");
            img.classList.add('card-image');
            img.width = 300;
            img.height = 300;
            img.src = (data.drinks[0].strDrinkThumb);

            var divcard = document.createElement("div")
            divcard.classList.add('card');
            divcard.appendChild(img);
            
            
            //renders cocktail name
            var cocktailTitle = document.createElement("h1");
            cocktailTitle.setAttribute('class', 'title is-4'); 
            // var text = document.createTextNode(data.drinks[0].strDrink); 
            // cocktailTitle.appendChild(text); 
            cocktailTitle.textContent = data.drinks[0].strDrink
            divcard.appendChild(cocktailTitle);
            var element = document.getElementById("cocktailCard");
            // var element = document.getElementById("cocktailCard");
            // element.appendChild(tag);
            var cocktailInstructions = document.createElement("p");
            cocktailInstructions.classList.add('cocktailInstructions');
            var text = document.createTextNode(data.drinks[0].strInstructions); 
            cocktailInstructions.appendChild(text); 

            var cocktailCardContent = document.createElement("div");
            cocktailCardContent.classList.add('cocktailCardContent');
            cocktailCardContent.appendChild(cocktailTitle);
            
            
            // renders cocktail measurements and ingredients
            for (let i=1; i<15; i++){
                //checks to see if an ingredient exists, if it does the loop runs
                if (data.drinks[0]['strIngredient' + i]!==null){
                    //if theres no measurement, only render intredient
                    if ((data.drinks[0]['strMeasure' + i])===null) {
                        var tag = document.createElement("ul");
                        var ingredient = document.createTextNode(data.drinks[0]['strIngredient' + i]);
                        tag.appendChild(ingredient);
                        
                        // var div = document.createElement("div")
                        // div.classList.add('card-content');
                        cocktailCardContent.appendChild(tag);
                        
                        // var element = document.getElementById("cocktailCard");
                        // divcard.appendChild(tag);
                        
                    } else {
                        //if there is a measurement. render measurement and ingredient
                        var tag = document.createElement("ul");
                        var ingredient = document.createTextNode((data.drinks[0]['strMeasure' + i])+" "+(data.drinks[0]['strIngredient' + i]));
                        tag.appendChild(ingredient);
                        
                        // var div = document.createElement("div")
                        // div.classList.add('card-content');
                        cocktailCardContent.appendChild(tag);
                        
                        // var element = document.getElementById("cocktailCard");
                        // divcard.appendChild(tag);
                    }
                }
            }
            cocktailCardContent.appendChild(cocktailInstructions);
            divcard.appendChild(cocktailCardContent);
            
            var saveBtn = document.createElement("button");
            saveBtn.setAttribute('class', 'button')
            saveBtn.textContent='save';
            cocktailCardContent.appendChild(saveBtn);
            element.appendChild(divcard);

            saveBtn.addEventListener("click", saveToLocal);

            function saveToLocal(){
                console.log(selectIngredient);
                var newObj = {
                    heroName: selectIngredient,
                    drinkID:  cocktailID
                }
            
                historyArr.push(newObj)
                localStorage.setItem("history", JSON.stringify(historyArr))
            }

        })
    })
}

var historyArr = [];
if (localStorage.getItem("history")){
    historyArr = JSON.parse(localStorage.getItem("history"))
}
