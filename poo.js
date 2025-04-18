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
playerHealth.value = target.health
console.log(playerHealth.value);

		if (target.health <= 0 && this.health <= 0) {
			fightCommentary.textContent = `${target.name} and ${this.name} are dead !  TIE !!!`;

			return (location.href = "/select.html");
		}
		if (target.health <= 0) {
			fightCommentary.textContent = `${target.name} is dead ! ${this.name} WINS !!!`;

			return (location.href = "/select.html");
		}
		fightCommentary.textContent = `${this.name} attacks ! ${target.name} has lost ${this.strength} HEALTH !`;
	}
	heal() {
		if (this.magic < 150) {
			return (fightCommentary.textContent = `${this.name} has not enough magic left !`);
		}
		const healed = 150;
		this.health += healed;
		this.magic -= healed;
		healthBar.value += healed;
		magicBar -= healed;
		fightCommentary.textContent = `${this.name} healed ${healed} HEALTH and lost ${healed} MAGIC !`;
	}

	magicAttack(target) {
		const spell = 100;
		if (this.magic < spell) {
			fightCommentary.textContent = `${this.name} doesn’t have enough magic!`;
			return;
		}
		this.magic -= spell;
		target.health -= spell;
		healthBar.value = target.health;
		magicBar.value = this.magic;
		fightCommentary.textContent = `${this.name} used magic and dealt ${spell} damage to ${target.name} !`;
	}
}
class Mage extends Character {
	constructor(id, name, img) {
		super(id, name, img);
		this.health = 500;
		this.strength = 50;
		this.defense = 50;
		this.magic = 1000;
	}
}

class Warrior extends Character {
	constructor(id, name, img) {
		super(id, name, img);
		this.health = 750;
		this.strength = 150;
		this.defense = 500;
		this.magic = 0;
	}
}
