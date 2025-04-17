let characterContainer = document.querySelector("#characterContainer");
let selectedCharacters = [];
let howBtn = document.querySelector("#howBtn");
let startBtn = document.querySelector("#startBtn");
let attackBtn = document.querySelector("#attackBtn");
let healBtn = document.querySelector("#healBtn");
let main = document.querySelector("main");
let id = 1;
let score = 0;
let winCounter = 0;
let lossCounter = 0;
const audio = document.querySelector("audio");
audio.volume = 0.2;
let comingSoon = document.querySelectorAll(".coming-soon");

comingSoon.forEach((e) => {
	e.addEventListener("click", () => {
		alert("Coming Soon !");
	});
});
howBtn.addEventListener("click", () => {
	alert(
		"Click play, choose 1 fighter to start the game then click start game. You can attack or heal to defeat your opponent."
	);
});
