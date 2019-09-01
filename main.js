var gameData = {
  nanu: 0,
  nanuPerClick: 1,
  nanuPerClickCost: 10
}

function mineNanu() {
  gameData.nanu += gameData.nanuPerClick
  document.getElementById("nanuMined").innerHTML = gameData.nanu + " Nanuchundris Recogidos"
}

function buyNanuPerClick() {
  if (gameData.nanu >= gameData.nanuPerClickCost) {
    gameData.nanu -= gameData.nanuPerClickCost
    gameData.nanuPerClick += 1
    gameData.nanuPerClickCost *= 2
    document.getElementById("nanuMined").innerHTML = gameData.nanu + " Nanuchundris Recogidos"
    document.getElementById("perClickUpgrade").innerHTML = "Mejorar a Nanuchundris (Actualmente nivel " + gameData.nanuPerClick + ") Costo: " + gameData.nanuPerClickCost + " Nanuchundris"
  }
}

var mainGameLoop = window.setInterval(function() {
  mineNanu()
}, 1000)
