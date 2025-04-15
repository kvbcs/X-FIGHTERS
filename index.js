let characterContainer = document.querySelector("#characterContainer");
let selectedCharacters = [];
let playBtn = document.querySelector("#playBtn");
let main = document.querySelector("main");
let id = 1;

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
	heal(health, magic) {
		console.log(`You healed ${health} points and lost ${magic} points !`);
	}
	block(name, health, defense) {
		console.log(
			`${name} blocks ${target.name}'s attack and lost ${health} health points !`
		);
	}
	magicAttack(magic, health) {
		console.log(
			`Your magic did ${health} damage and you lost ${magic} points !`
		);
	}
}

let playableCharacters = [
	(Skeleton = new Character(
		id++,
		"Skeleton1",
		200,
		20,
		0,
		5,
		"/assets/Skeleton/GIFS/Skeleton Idle.gif"
	)),
	(Skeleton = new Character(
		id++,
		"Skeleton2",
		200,
		20,
		0,
		5,
		"/assets/Skeleton/GIFS/Skeleton Idle.gif"
	)),
	(Skeleton = new Character(
		id++,
		"Skeleton3",
		200,
		20,
		0,
		5,
		"/assets/Skeleton/GIFS/Skeleton Idle.gif"
	)),
	(Skeleton = new Character(
		id++,
		"Skeleton4",
		200,
		20,
		0,
		5,
		"/assets/Skeleton/GIFS/Skeleton Idle.gif"
	)),
	(Skeleton = new Character(
		id++,
		"Skeleton5",
		200,
		20,
		0,
		5,
		"/assets/Skeleton/GIFS/Skeleton Idle.gif"
	)),
	(Skeleton = new Character(
		id++,
		"Skeleton6",
		200,
		20,
		0,
		5,
		"/assets/Skeleton/GIFS/Skeleton Idle.gif"
	)),
];
console.log(playableCharacters);

playableCharacters.forEach((character) => {
	//Création et style d'éléments
	div = document.createElement("div");
	div.classList.add("character-div");
	div.setAttribute("id", id);

	img = document.createElement("img");
	img.src = character.img;

	//Ajout des éléments
	div.appendChild(img);
	characterContainer.appendChild(div);
});

playBtn.addEventListener("click", () => {
	main.innerHTML=""
	console.log("allo");
});
