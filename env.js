const characterContainer = document.querySelector("#characterContainer");
const howBtn = document.querySelector("#howBtn");
const startBtn = document.querySelector("#startBtn");
const attackBtn = document.querySelector("#attackBtn");
const healBtn = document.querySelector("#healBtn");
const main = document.querySelector("main");
const audio = document.querySelector("audio");
const comingSoon = document.querySelectorAll(".coming-soon");
const fightingContainer = document.querySelector("#fighting-container");
let healthBar = document.querySelector(".health-bar");
let magicBar = document.querySelector(".magic-bar");
let fightCommentary = document.querySelector("#fight-commentary")

//Scores declarations
let score = 0;
let winCounter = 0;
let lossCounter = 0;

//Divers
let id = 1;
audio.volume = 0.2;
let selectedCharacters = [];

comingSoon.forEach((e) => {
	e.addEventListener("click", () => {
		alert("Coming Soon !");
	});
});

howBtn.addEventListener("click", () => {
	alert(
		"Click the 1 player button, choose 1 fighter to start the game then click start game. You can attack or heal to defeat your opponent."
	);
});
