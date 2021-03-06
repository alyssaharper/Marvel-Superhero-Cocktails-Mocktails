var publickey = "af4ef82dfc5efae7a724a9ccead1a2be";
var avengerAPI = "https://gateway.marvel.com/v1/public/characters/1009165?&ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b"
//var captainAmericaAPI = "https://gateway.marvel.com/v1/public/characters?name=captain america&ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b"
var characterData
var avengerData
var characterCardEl = document.getElementById('characterCard');
var avengersLogoEl = document.getElementById('avengersLogo');

function createHeroCards(name) {
var characterName = name;
var characterAPI = "https://gateway.marvel.com/v1/public/characters?name=" + characterName + "&ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b"

    fetch (characterAPI)
    .then ((response)=>{
       return response.json()
    })
    .then((data)=>{
        characterData = data.data.results[0]
        // console.log(characterData);
        characterCard(characterData);
    })
}

    window.onload = function() {
        // console.log("onwindowload")    
    fetch (avengerAPI)
    .then ((response)=>{
       return response.json()
    })
    .then((data)=>{
        avengerData = data.data.results[0]
        // console.log(avengerData);
        getMarvelIcon(avengerData);
    })
    }

function characterCard(data) {

    var cardEl = document.createElement('div');
    cardEl.setAttribute("class", "card");
    var cardContentEl = document.createElement('div');
    cardContentEl.setAttribute("class", "card-content")
    var cardImageEl = document.createElement('div');
    cardImageEl.setAttribute("class", "card-image");
    var cardFigureEl = document.createElement('figure');
    cardFigureEl.setAttribute('class', "image is-4by3");
    var characterImageEl = document.createElement('img');
    characterImageEl.setAttribute("src", data.thumbnail.path + "." + data.thumbnail.extension);
    var cardMediaContentEl = document.createElement('div');
    cardMediaContentEl.setAttribute('class', "media-content");
    var characterEl = document.createElement('p');
    characterEl.setAttribute("class", "title is-4");
    characterEl.textContent = data.name;
    cardContentEl.append(characterEl);
    var characterDescripEl = document.createElement('div');
    characterDescripEl.setAttribute("class", "content");
    characterDescripEl.textContent = data.description;
    cardContentEl.append(characterDescripEl);
    cardFigureEl.append(characterImageEl);
    cardImageEl.append(cardFigureEl);
    cardEl.append(cardImageEl)
    cardEl.append(cardContentEl);

    characterCardEl.append(cardEl);
}



function getMarvelIcon(data) {
avengersLogoEl.setAttribute("src", data.thumbnail.path + "." + data.thumbnail.extension);

}

var bwcharClick = document.getElementById('BLACKWIDOW');
bwcharClick.addEventListener("click", function() {
    while(characterCardEl.firstChild){
        characterCardEl.removeChild(characterCardEl.firstChild);
    } 
    console.log();
    createHeroCards('black widow')
})

var cacharClick = document.getElementById('CAPTAINAMERICA');
cacharClick.addEventListener("click", function() {
    while(characterCardEl.firstChild){
        characterCardEl.removeChild(characterCardEl.firstChild);
    } 
    console.log();
    createHeroCards('captain america')
})

var hucharClick = document.getElementById('HULK');
hucharClick.addEventListener("click", function() {
    while(characterCardEl.firstChild){
        characterCardEl.removeChild(characterCardEl.firstChild);
    } 
    console.log();
    createHeroCards('hulk')
})

var spcharClick = document.getElementById('SPIDERMAN');
spcharClick.addEventListener("click", function() {
    while(characterCardEl.firstChild){
        characterCardEl.removeChild(characterCardEl.firstChild);
    } 
    console.log();
    createHeroCards('spider-man (peter parker)')
})