let characterContainer = document.querySelector("#characterContainer");
let selectedCharacters = [];
let playBtn = document.querySelector("#playBtn");
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
		const damage = this.strength - target.defense;
		target.health -= damage;
		console.log(
			`${this.name} attacks, ${target.name} has lost ${this.strength} health points !`
		);
		if (target.health <= 0) {
			console.log(`${target.name} is dead ! ${this.name} WINS !!!`);
		}
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
	(Cat = new Character(id++, "Cat", 1000, 20, 0, 5, "/assets/cat.gif")),
	(HollowKnight = new Character(
		id++,
		"Hollow Knight",
		1000,
		20,
		0,
		5,
		"/assets/hollow-knight.gif"
	)),
	(DarkMage = new Character(
		id++,
		"Dark Mage",
		1000,
		20,
		0,
		5,
		"/assets/dark-mage.gif"
	)),
	(Kratos = new Character(
		id++,
		"Kratos",
		1000,
		20,
		0,
		5,
		"/assets/kratos.gif"
	)),
	(Goku = new Character(
		id++,
		"Son Goku",
		1000,
		100,
		50,
		100,
		"/assets/goku.gif"
	)),
	(Skeleton = new Character(
		id++,
		"Skeleton",
		1000,
		20,
		0,
		5,
		"/assets/Skeleton/GIFS/Skeleton Idle.gif"
	)),
	(Skeleton = new Character(
		id++,
		"Skeleton",
		1000,
		20,
		0,
		5,
		"https://i.pinimg.com/originals/f5/75/2c/f5752c7c9f03832209f0bb8b57214281.gif"
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

playBtn.addEventListener("click", () => {
	main.innerHTML = "";
	console.log("allo");
});

const addSelectCharacter = (character) => {
	selectedCharacters.unshift(character);
	console.log(selectedCharacters);
	alert(`You selected ${character.name}`);
	let computerChoice = Math.floor(
		Math.random() * playableCharacters.length + 1
	);
	console.log(computerChoice);
};
