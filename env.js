const characterContainer = document.querySelector("#characterContainer");
const howBtn = document.querySelector("#howBtn");
const startBtn = document.querySelector("#startBtn");
const attackBtn = document.querySelector("#attackBtn");
const healBtn = document.querySelector("#healBtn");
const blockBtn = document.querySelector("#blockBtn");
const magicBtn = document.querySelector("#magicBtn");
const main = document.querySelector("main");
let audio = document.querySelector("audio");
const comingSoon = document.querySelectorAll(".coming-soon");
const fightingContainer = document.querySelector("#fighting-container");
let playerHealth = document.querySelector("#player-health");
let playerMagic = document.querySelector("#player-magic");
let enemyHealth = document.querySelector("#enemy-health");
let enemyMagic = document.querySelector("#enemy-magic");
let fightCommentary = document.querySelector("#fight-commentary");
let scoreText = document.querySelector("#score-text");
let menuTheme = document.querySelector("#menu-theme");

//Divers
let hitChance = [1, 1.1, 1.2, 1.3, 1.4, 1.5];
const getRandomItem = (arr) => {
	const index = Math.floor(Math.random() * arr.length);
	return arr[index];
};
const spell = 125 ;
const healed = 150 ;
let score = parseInt(localStorage.getItem("score")) || 0;
scoreText.textContent = score;
let id = 1;
audio.volume = 0.2;
let selectedCharacters = [];
let playAgain = true;
let playerTurn = true;

comingSoon.forEach((e) => {
	e.addEventListener("click", () => {
		alert("Coming Soon !");
	});
});

howBtn.addEventListener("click", () => {
	alert(
		"1) Click the Player vs AI button 2) Choose 1 fighter then click Start game 3) Click Attack, Heal or Magic to defeat your opponent 4) When the fight ends, write yes or no on the replay prompt"
	);
});
