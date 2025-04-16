let characterContainer = document.querySelector("#characterContainer");
let selectedCharacters = [];
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

class Character {
	constructor(id, name, img) {
		this.id = id++;
		this.name = name;
		this.health = 1000;
		this.strength = 100;
		this.defense = 100;
		this.magic = 100;
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
			`${this.name} attacks ! ${target.name} has lost ${this.strength} HEALTH !`
		);
	}

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
class Mage extends Character {
	constructor(id, name, img) {
		super(id, name, img);
		this.id = id++;
		this.name = name;
		this.health = 500;
		this.strength = 50;
		this.defense = 50;
		this.magic = 1000;
		this.img = img;
	}
	heal() {
		if (this.magic <= 0) {
			return alert("You have no magic left !");
		}
		const healed = 150;
		this.health += healed;
		this.magic -= healed;
		alert(`You healed ${healed} HEALTH and lost ${healed} MAGIC !`);
	}
}

class Warrior extends Character {
	constructor(id, name, img) {
		super(id, name, img);
		this.id = id++;
		this.name = name;
		this.health = 750;
		this.strength = 150;
		this.defense = 500;
		this.magic = 0;
		this.img = img;
	}
	heal() {
		if (this.magic <= 0) {
			return alert("You have no magic left !");
		}
		const healed = 150;
		this.health += healed;
		this.magic -= healed;
		alert(`You healed ${healed} HEALTH and lost ${healed} MAGIC !`);
	}
}
// class MagicSpells extends Character{
// 	constructor(id, name) {
// 		this.id = id++
// 		this.name = name
// 	}
// 	healSpell() {

// 	}
// }

let playableCharacters = [
	(Cat = new Character(id++, "Cat", "/assets/cat.gif")),
	(HollowKnight = new Character(
		id++,
		"Hollow Knight",

		"/assets/hollow-knight.gif"
	)),
	(DarkMage = new Mage(
		id++,
		"Dark Mage",

		"/assets/dark-mage.gif"
	)),
	(Kratos = new Warrior(
		id++,
		"Kratos",

		"/assets/kratos.gif"
	)),
	(Goku = new Warrior(
		id++,
		"Son Goku",

		"/assets/goku.gif"
	)),
	(Skeleton = new Warrior(
		id++,
		"Skeleton",

		"/assets/Skeleton/GIFS/Skeleton Idle.gif"
	)),
	(Mario = new Character(
		id++,
		"Mario",

		"https://i.pinimg.com/originals/f5/75/2c/f5752c7c9f03832209f0bb8b57214281.gif"
	)),
	(Sonic = new Character(
		id++,
		"Sonic",

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
	main.appendChild(healBtn);
	main.style.backgroundImage =
		"url('https://cdn1.epicgames.com/ue/product/Screenshot/2a-1920x1080-07c9dfe6bf588f8db7dac536c295896a.png?resize=1&w=1920')";

	attackBtn.classList.remove("hidden");
	healBtn.classList.remove("hidden");
	attackBtn.addEventListener("click", () => {
		selectedCharacters[0].attack(selectedCharacters[1]);
		selectedCharacters[1].attack(selectedCharacters[0]);
		console.log(selectedCharacters);
	});
	healBtn.addEventListener("click", () => {
		selectedCharacters[0].heal();
		console.log(selectedCharacters);
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
