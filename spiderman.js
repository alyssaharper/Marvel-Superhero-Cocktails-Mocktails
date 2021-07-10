var publickey = "af4ef82dfc5efae7a724a9ccead1a2be"
var spidermanAPI = "https://gateway.marvel.com/v1/public/characters?name=spider-man%20(peter%20parker)&ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b"
var spidermanData
var characterCardEl = document.getElementById('characterCard');

function createHeroCards() {
}
window.onload = function() {
    fetch (spidermanAPI)
.then ((response)=>{
   return response.json()
})
.then((data)=>{
    spidermanData = data.data.results[0]
    console.log(spidermanData);
    spidermanCard(spidermanData);
})
}
createHeroCards()

function spidermanCard(data) {
    var cardEl = document.createElement('div');
    cardEl.setAttribute("class", "card");
    var cardContentEl = document.createElement('div');
    cardContentEl.setAttribute("class", "card-content")
    var cardImageEl = document.createElement('div');
    cardImageEl.setAttribute("class", "card-image");
    var cardFigureEl = document.createElement('figure');
    cardFigureEl.setAttribute('class', "image is-4by3");
    var spidermanImageEl = document.createElement('img');
    spidermanImageEl.setAttribute("src", data.thumbnail.path + "." + data.thumbnail.extension);
    cardFigureEl.append(spidermanImageEl);
    var cardMediaContentEl = document.createElement('div');
    cardMediaContentEl.setAttribute('class', "media-content");
    var spidermanNameEl = document.createElement('p');
    spidermanNameEl.setAttribute("class", "title is-4");
    spidermanNameEl.textContent = data.name;
    cardContentEl.append(spidermanNameEl);
    var spidermanDescripEl = document.createElement('div');
    spidermanDescripEl.setAttribute("class", "content");
    spidermanDescripEl.textContent = data.description;
    cardContentEl.append(spidermanDescripEl);
    cardFigureEl.append(spidermanImageEl);
    cardImageEl.append(cardFigureEl);
    cardEl.append(cardImageEl)
    cardEl.append(cardContentEl);

    characterCardEl.append(cardEl);

    // while(characterCardEl.firstChild){
    //     characterCardEl.removeChild(characterCardEl.firstChild);

}

spidermanCard();