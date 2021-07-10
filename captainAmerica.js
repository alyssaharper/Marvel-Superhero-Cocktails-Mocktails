var publickey = "af4ef82dfc5efae7a724a9ccead1a2be"
var captainAmericaAPI = "https://gateway.marvel.com/v1/public/characters?name=captain america&ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b"
var captAmerData
function createHeroCards() {
}
window.onload = function() {
    fetch (captainAmericaAPI)
.then ((response)=>{
   return response.json()
})
.then((data)=>{
    captAmerData = data.data.results[0]
    console.log(captAmerData);
    captAmerCard(captamerdata);
})
}
createHeroCards()

function captAmerCard(data) {
    var cardEl = document.createElement('div');
    cardEl.setAttribute("class", "card");
    var cardContentEl = document.createElement('div');
    cardContentEl.setAttribute("class", "card-content")
    var cardImageEl = document.createElement('div');
    cardImageEl.setAttribute("class", "card-image");
    var cardFigureEl = document.createElement('figure');
    cardFigureEl.setAttribute('class', "image is-4by3");
    var captAmerImageEl = document.createElement('img');
    console.log(data);
    captAmerImageEl.setAttribute("src", data.thumbnail.path + "." + data.thumbnail.extension);
    cardFigureEl.append(captAmerImageEl);
    var cardMediaContentEl = document.createElement('div');
    cardMediaContentEl.setAttribute('class', "media-content");
    var captAmerNameEl = document.createElement('p');
    captAmerNameEl.setAttribute("class", "title is-4");
    captAmerNameEl.textContent = data.name;
    cardContentEl.append(captAmerNameEl);
    var captAmerDescripEl = document.createElement('div');
    captAmerDescripEl.setAttribute("class", "content");
    captAmerDescripEl.textContent = data.description;
    cardContentEl.append(captAmerDescripEl);
    cardFigureEl.append(captAmerImageEl);
    cardImageEl.append(cardFigureEl);
    cardEl.append(cardImageEl)
    cardEl.append(cardContentEl);

    characterCardEl.append(cardEl);

}

