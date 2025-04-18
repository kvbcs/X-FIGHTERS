class Character {
	constructor(id, name, img) {
		this.id = id++;
		this.name = name;
		this.health = 1000;
		this.strength = 100;
		this.magic = 600;
		this.img = img;
	}
	attack(target) {
		target.health -= this.strength;

		fightCommentary.textContent = `${this.name} attacks ! ${target.name} lost ${this.strength} HP !`;
	}
	heal() {
		if (this.magic < 150) {
			return (fightCommentary.textContent = `${this.name} has not enough magic left !`);
		}
		const healed = 150;
		this.health += healed;
		this.magic -= healed;
		fightCommentary.textContent = `${this.name} healed ${healed} HP and lost ${healed} MP !`;
	}

	magicAttack(target) {
		const spell = 150;
		if (this.magic < spell) {
			fightCommentary.textContent = `${this.name} doesn’t have enough magic!`;
			return;
		}
		this.magic -= spell;
		target.health -= spell;
		fightCommentary.textContent = `${this.name} used magic ! ${target.name} lost ${spell} HP !`;
	}
}
class Mage extends Character {
	constructor(id, name, img) {
		super(id, name, img);
		this.health = 750;
		this.strength = 50;
		this.magic = 1000;
	}
}

class Warrior extends Character {
	constructor(id, name, img) {
		super(id, name, img);
		this.health = 500;
		this.strength = 200;
		this.magic = 450;
	}
}
