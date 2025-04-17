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
		healthBar.value -= this.strength / 10

		if (target.health <= 0 && this.health <= 0) {
			alert(`${target.name} and ${this.name} are dead !  TIE !!!`);
			return location.reload();
		}
		if (target.health <= 0) {
			alert(`${target.name} is dead ! ${this.name} WINS !!!`);
			return location.reload();
		}
		alert(
			`${this.name} attacks ! ${target.name} has lost ${this.strength} HEALTH !`
		);
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
