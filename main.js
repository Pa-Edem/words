import { wordList } from './lib.js';

const TTL = 30; // общее время на слово в секундах 
let currentWord = "", // текущее слово
	numWin = 0, // счётчик угаданных слов
	numLose = 0, // счётчик неугаданных слов
	secondsLeft = 0, // количество оставшихся секунд
	timer = null, // ссылка на таймер
	strTimer = null, //<span id="strTimer">
	btnStart = null, //<button id="btnStart">
	txtResult = null, //<input id="txtResult">
	strWin = null, //<span id="strWin">
	strLose = null, //<span id="strLose">
	strWord = null, //<h2 id="strWord">
	h3 = null; //<h3>

window.onload = function () {
	strWin = document.getElementById("strWin");
	strLose = document.getElementById("strLose");
	strWord = document.getElementById("strWord");
	strTimer = document.getElementById("strTimer");
	strTimer.textContent = secondsLeft + ' сек.';
	btnStart = document.getElementById("btnStart");
	btnStart.addEventListener('click', newGame);
	txtResult = document.getElementById("txtResult");
	txtResult.addEventListener('keyup', checkInput);
	h3 = document.getElementsByTagName("h3")[0];
	btnStart.focus();
}

function newGame() {
	wordList.shuffle();
	numWin = 1 * strWin.textContent;
	numLose = 1 * strLose.textContent;
	if ((numWin + numLose) >= wordList.length) {
		alert('Слова для игры закончились.');
		return;
	}
	currentWord = wordList[numWin + numLose];
	txtResult.disabled = false;
	txtResult.focus();
	txtResult.value = '';
	secondsLeft = TTL;
	strTimer.textContent = secondsLeft + ' сек.';
	strWord.textContent = currentWord.split('').shuffle().join('');
	btnStart.disabled = true;
	getTime();
}

function getTime() {
	timer = setInterval(function () {
		secondsLeft--;
		strTimer.textContent = secondsLeft + ' сек.';
		if (secondsLeft == 0) {
			clearInterval(timer);
			numLose++;
			strLose.textContent = numLose;
			btnStart.disabled = false;
			btnStart.focus();
		}
	}, 1000);
}

function checkInput() {
	if (txtResult.value.toUpperCase() == currentWord) {
		numWin++;
		strWin.textContent = numWin;
		txtResult.disabled = true;
		btnStart.disabled = false;
		clearInterval(timer);
		btnStart.focus();
	}
}