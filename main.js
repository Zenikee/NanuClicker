var saveGame = localStorage.getItem('NanuSave')
var gameData = {
  nanu: 0,
  nanuPerClick: 1,
  nanuPerClickCost: 10,
  lastTick: Date.now()
}

var intvalue = Math.floor( floatvalue );
var intvalue = Math.ceil( floatvalue );
var intvalue = Math.round( floatvalue );
var intvalue = Math.trunc( floatvalue );

function update(id, content) {
  document.getElementById(id).innerHTML = content;
}

function mineNanu() {
  gameData.nanu += gameData.nanuPerClick
  update("nanuMined", gameData.nanu + " Nanuchundris")
}

function buyNanuPerClick() {
  if (gameData.nanu >= gameData.nanuPerClickCost) {
    gameData.nanu -= gameData.nanuPerClickCost
    gameData.nanuPerClick += 1
    gameData.nanuPerClickCost *= 2
    update("nanuMined", gameData.nanu + " Nanuchundris")
    update("perClickUpgrade", "Mejorar a Nanuchundris (Actualmente nivel " + format(gameData.nanuPerClick, "scientific") + ") Costo: " + gameData.nanuPerClickCost + " Nanuchundris")
  }
}

var mainGameLoop = window.setInterval(function() {
  diff = Date.now() - gameData.lastTick;
  gameData.lastTick = Date.now()
  gameData.nanu += gameData.nanuPerClick * (diff / 1000)
  update("nanuMined", gameData.nanu + " Nanuchundris")
}, 1000)

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('NanuSave', JSON.stringify(gameData))
}, 15000)

function tab(tab) {
  document.getElementById("mineNanuMenu").style.display = "none"
  document.getElementById("shopMenu").style.display = "none"
  document.getElementById(tab).style.display = "inline-block"
}
tab("mineGoldMenu")

function format(number, type) {
	let exponent = Math.floor(Math.log10(number))
	let mantissa = number / Math.pow(10, exponent)
	if (exponent < 3) return number.toFixed(1)
	if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent
	if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3)
}

if (typeof saveGame.nanu !== "undefined") gameData.nanu = saveGame.nanu;
if (typeof saveGame.nanuPerClick !== "undefined") gameData.nanuPerClick = saveGame.nanuPerClick;
if (typeof saveGame.nanuPerClickCost !== "undefined") gameData.nanuPerClickCost = saveGame.nanuPerClickCost;
if (typeof saveGame.lastTick !== "undefined") gameData.lastTick = saveGame.lastTick;
