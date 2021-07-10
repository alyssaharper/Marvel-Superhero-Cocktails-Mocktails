
var publickey = "af4ef82dfc5efae7a724a9ccead1a2be"


var blackwidowapi = "https://gateway.marvel.com/v1/public/characters?name=black widow&ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b"
var blackwidowdata

function createHeroCards () {

}

window.onload = function() {
    fetch (blackwidowapi)
.then ((response)=>{
   return response.json()
})
.then((data)=>{
    blackwidowdata = data.data.results[0]
})
}
createHeroCards()

