let characterContainer = document.querySelector("#characterContainer");
let selectedCharacters = [];
let startBtn = document.querySelector("#startBtn");
let attackBtn = document.querySelector("#attackBtn");
let main = document.querySelector("main");
let id = 1;
let score = 0;
let winCounter = 0;
let lossCounter = 0;
const audio = document.querySelector("audio");
audio.volume = 0.2;

class Character {
	constructor(id, name, health, strength, defense, magic, img) {
		this.id = id++;
		this.name = name;
		this.health = health;
		this.strength = strength;
		this.defense = defense;
		this.magic = magic;
		this.img = img;
	}

	attack(target) {
		target.health -= this.strength;
		if (target.health <= 0 && this.health <= 0) {
			return alert(`${target.name} and ${this.name} are dead !  TIE !!!`);
		}
		if (target.health <= 0) {
			return alert(`${target.name} is dead ! ${this.name} WINS !!!`);
		}
		alert(
			`${this.name} attacks, ${target.name} has lost ${this.strength} health points !`
		);
	}
	// heal(health, magic) {
	// 	console.log(`You healed ${health} points and lost ${magic} points !`);
	// }
	// block(name, health, defense) {
	// 	console.log(
	// 		`${name} blocks ${target.name}'s attack and lost ${health} health points !`
	// 	);
	// }
	// magicAttack(magic, health) {
	// 	console.log(
	// 		`Your magic did ${health} damage and you lost ${magic} points !`
	// 	);
	// }
}

let playableCharacters = [
	(Cat = new Character(id++, "Cat", 100, 20, 0, 5, "/assets/cat.gif")),
	(HollowKnight = new Character(
		id++,
		"Hollow Knight",
		100,
		20,
		0,
		5,
		"/assets/hollow-knight.gif"
	)),
	(DarkMage = new Character(
		id++,
		"Dark Mage",
		100,
		20,
		0,
		5,
		"/assets/dark-mage.gif"
	)),
	(Kratos = new Character(
		id++,
		"Kratos",
		100,
		20,
		0,
		5,
		"/assets/kratos.gif"
	)),
	(Goku = new Character(
		id++,
		"Son Goku",
		100,
		100,
		50,
		100,
		"/assets/goku.gif"
	)),
	(Skeleton = new Character(
		id++,
		"Skeleton",
		100,
		20,
		0,
		5,
		"/assets/Skeleton/GIFS/Skeleton Idle.gif"
	)),
	(Mario = new Character(
		id++,
		"Mario",
		100,
		20,
		0,
		5,
		"https://i.pinimg.com/originals/f5/75/2c/f5752c7c9f03832209f0bb8b57214281.gif"
	)),
	(Sonic = new Character(
		id++,
		"Sonic",
		100,
		20,
		0,
		5,
		"https://media.tenor.com/oir5PjIye9sAAAAj/sonic.gif"
	)),
];
console.log(playableCharacters);

playableCharacters.forEach((character) => {
	//Création et style d'éléments
	div = document.createElement("div");
	div.classList.add("character-div");
	div.setAttribute("id", character.id);

	img = document.createElement("img");
	img.src = character.img;

	//Ajout des éléments
	div.appendChild(img);
	characterContainer.appendChild(div);

	div.addEventListener("click", () => {
		console.log(character);
		addSelectCharacter(character);
	});
});

const addSelectCharacter = (character) => {
	if (selectedCharacters.length >= 0) {
		selectedCharacters = [];
	}
	selectedCharacters.push(character);
	alert(`You selected ${character.name}`);
	// Choix aléatoire d’un personnage dans le tableau
	let randomIndex = Math.floor(Math.random() * playableCharacters.length);
	let computerChoice = playableCharacters[randomIndex];

	selectedCharacters.push(computerChoice);
	alert(`Computer selected : ${computerChoice.name}`);
	console.log(selectedCharacters);
};

startBtn.addEventListener("click", () => {
	if (selectedCharacters.length <= 0) {
		return alert("Please choose a fighter");
	}
	main.innerHTML = "";
	audio.src = "/assets/fight-theme.mp3";
	section = document.createElement("section");
	section.classList.add("fighting-container");
	main.appendChild(section);
	main.appendChild(attackBtn);
	main.style.backgroundImage =
		"url('https://cdn1.epicgames.com/ue/product/Screenshot/2a-1920x1080-07c9dfe6bf588f8db7dac536c295896a.png?resize=1&w=1920')";

	attackBtn.classList.remove("hidden");
	attackBtn.addEventListener("click", () => {
		selectedCharacters[0].attack(selectedCharacters[1]);
		selectedCharacters[1].attack(selectedCharacters[0]);
	});
	selectedCharacters.forEach((character) => {
		div = document.createElement("div");
		div.classList.add("character-div");
		div.setAttribute("id", character.id);

		img = document.createElement("img");
		img.src = character.img;

		//Ajout des éléments
		div.appendChild(img);
		section.appendChild(div);
	});
});
