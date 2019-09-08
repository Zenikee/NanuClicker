let nanu = 0,
	nanuPerClick = 1,
	nanuPerBuilding = [ 0.1, 1, 8, 47, 260, 1400, 7800, 44000, 260000 ],
	nanuPerSecond = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	nanuUpgradeCost = [ 15, 100, 1100, 12000, 130000, 1400000, 20000000, 330000000, 5100000000 ],
	nanuUpgradeTotal = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

setInterval(function() {
	update('nanuMined', round(nanu, 1) + ' Nanus Recogidos');
	update('secondNanus', round(nanuSum(nanuPerSecond), 1) + ' Nanus por segundo');
	for (var i = 0; i < nanuUpgradeCost.length; i++) {
		if (nanu <= nanuUpgradeCost[i]) {
			btncolor('upgrade' + [ i ], '#415842');
		}
		if (nanu >= nanuUpgradeCost[i]) {
			btncolor('upgrade' + [ i ], '#4caf50');
		}
	}
}, 100);

setInterval(function() {
	nanu += nanuSum(nanuPerSecond);
	update('nanuMined', round(nanu, 1) + ' Nanus Recogidos');
}, 1000);

function update(id, content) {
	document.getElementById(id).innerHTML = content;
}

function btncolor(btn, color) {
	document.getElementById(btn).style.background = color;
}

function mineNanu() {
	nanu += nanuPerClick;
	update('nanuMined', round(nanu, 1) + ' Nanus Recogidos');
}

function buyUpgrade0() {
	if (nanu >= nanuUpgradeCost[0]) {
		nanu -= nanuUpgradeCost[0];
		nanuPerSecond[0] += nanuPerBuilding[0];
		nanuUpgradeTotal[0] += 1;
		nanuUpgradeCost[0] *= 1.15 ** nanuUpgradeTotal[0];
		update('nanuMined', round(nanu, 1) + ' Nanus Recogidos');
		update('total0', 'Total: ' + nanuUpgradeTotal[0] + ' |');
		update('costo0', 'Costo: ' + Math.floor(nanuUpgradeCost[0]) + ' |');
		update('produce0', 'Produce: ' + round(nanuPerSecond[0], 1) + 'NpS');
	}
}

function buyUpgrade1() {
	if (nanu >= nanuUpgradeCost[1]) {
		nanu -= nanuUpgradeCost[1];
		nanuPerSecond[1] += nanuPerBuilding[1];
		nanuUpgradeTotal[1] += 1;
		nanuUpgradeCost[1] *= 1.15 ** nanuUpgradeTotal[1];
		update('nanuMined', round(nanu, 1) + ' Nanus Recogidos');
		update('total1', 'Total: ' + nanuUpgradeTotal[1] + ' |');
		update('costo1', 'Costo: ' + Math.floor(nanuUpgradeCost[1]) + ' |');
		update('produce1', 'Produce: ' + round(nanuPerSecond[1], 1) + 'NpS');
	}
}

function buyUpgrade2() {
	if (nanu >= nanuUpgradeCost[2]) {
		nanu -= nanuUpgradeCost[2];
		nanuPerSecond[2] += nanuPerBuilding[2];
		nanuUpgradeTotal[2] += 1;
		nanuUpgradeCost[2] *= 1.15 ** nanuUpgradeTotal[2];
		update('nanuMined', round(nanu, 1) + ' Nanus Recogidos');
		update('total2', 'Total: ' + nanuUpgradeTotal[2] + ' |');
		update('costo2', 'Costo: ' + Math.floor(nanuUpgradeCost[2]) + ' |');
		update('produce2', 'Produce: ' + round(nanuPerSecond[2], 1) + 'NpS');
	}
}

function buyUpgrade3() {
	if (nanu >= nanuUpgradeCost[3]) {
		nanu -= nanuUpgradeCost[3];
		nanuPerSecond[3] += nanuPerBuilding[3];
		nanuUpgradeTotal[3] += 1;
		nanuUpgradeCost[3] *= 1.15 ** nanuUpgradeTotal[3];
		update('nanuMined', round(nanu, 1) + ' Nanus Recogidos');
		update('upgrade3', round(nanuPerSecond[3], 1) + ' Nanus/s, Costo: ' + Math.floor(nanuUpgradeCost[3]));
	}
}

function buyUpgrade4() {
	if (nanu >= nanuUpgradeCost[4]) {
		nanu -= nanuUpgradeCost[4];
		nanuPerSecond[4] += nanuPerBuilding[4];
		nanuUpgradeTotal[4] += 1;
		nanuUpgradeCost[4] *= 1.15 ** nanuUpgradeTotal[4];
		update('nanuMined', round(nanu, 1) + ' Nanus Recogidos');
		update('upgrade4', round(nanuPerSecond[4], 1) + ' Nanus/s, Costo: ' + Math.floor(nanuUpgradeCost[4]));
	}
}

function buyUpgrade5() {
	if (nanu >= nanuUpgradeCost[5]) {
		nanu -= nanuUpgradeCost[5];
		nanuPerSecond[5] += nanuPerBuilding[5];
		nanuUpgradeTotal[5] += 1;
		nanuUpgradeCost[5] *= 1.15 ** nanuUpgradeTotal[5];
		update('nanuMined', round(nanu, 1) + ' Nanus Recogidos');
		update('upgrade5', round(nanuPerSecond[5], 1) + ' Nanus/s, Costo: ' + Math.floor(nanuUpgradeCost[5]));
	}
}

function buyUpgrade6() {
	if (nanu >= nanuUpgradeCost[6]) {
		nanu -= nanuUpgradeCost[6];
		nanuPerSecond[6] += nanuPerBuilding[6];
		nanuUpgradeTotal[6] += 1;
		nanuUpgradeCost[6] *= 1.15 ** nanuUpgradeTotal[6];
		update('nanuMined', round(nanu, 1) + ' Nanus Recogidos');
		update('upgrade6', round(nanuPerSecond[6], 1) + ' Nanus/s, Costo: ' + Math.floor(nanuUpgradeCost[6]));
	}
}

function buyUpgrade7() {
	if (nanu >= nanuUpgradeCost[7]) {
		nanu -= nanuUpgradeCost[7];
		nanuPerSecond[7] += nanuPerBuilding[7];
		nanuUpgradeTotal[7] += 1;
		nanuUpgradeCost[7] *= 1.15 ** nanuUpgradeTotal[7];
		update('nanuMined', round(nanu, 1) + ' Nanus Recogidos');
		update('upgrade7', round(nanuPerSecond[7], 1) + ' Nanus/s, Costo: ' + Math.floor(nanuUpgradeCost[7]));
	}
}

function buyUpgrade8() {
	if (nanu >= nanuUpgradeCost[8]) {
		nanu -= nanuUpgradeCost[8];
		nanuPerSecond[8] += nanuPerBuilding[8];
		nanuUpgradeTotal[8] += 1;
		nanuUpgradeCost[8] *= 1.15 ** nanuUpgradeTotal[8];
		update('nanuMined', round(nanu, 1) + ' Nanus Recogidos');
		update('upgrade8', round(nanuPerSecond[8], 1) + ' Nanus/s, Costo: ' + Math.floor(nanuUpgradeCost[8]));
	}
}

function nanuSum(input) {
	if (toString.call(input) !== '[object Array]') return false;

	var total = 0;
	for (var i = 0; i < input.length; i++) {
		if (isNaN(input[i])) {
			continue;
		}
		total += Number(input[i]);
	}
	return total;
}

function round(value, precision) {
	var multiplier = Math.pow(10, precision || 0);
	return Math.round(value * multiplier) / multiplier;
}
