class Character {
	constructor(name, health, strength, defense, magic) {
		this.name = name;
		this.health = health;
		this.strength = strength;
		this.defense = defense;
		this.magic = magic;
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

Ryu = new Character("Ryu", 100, 60, 30, 10);
Ken = new Character("Ken", 100, 40, 20, 10);

Ryu.attack(Ken);
console.log(Ken.health);
Ryu.attack(Ken);
console.log(Ken.health);
Ryu.attack(Ken);
