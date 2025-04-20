class Character {
	constructor(id, name, img) {
		this.id = id++;
		this.name = name;
		this.maxHealth = 1000;
		this.health = this.maxHealth;
		this.strength = 100;
		this.maxMagic = 850;
		this.magic = this.maxMagic;
		this.img = img;
	}
	attack(target) {
		target.health -= this.strength;
		enemyHealth.value -= this.strength;
		fightCommentary.textContent = `${this.name} attacks ! ${target.name} lost ${this.strength} HP !`;
	}
	heal() {

		if (this.magic < healed) {
			return (fightCommentary.textContent = `${this.name} has not enough magic left !`);
		}
		this.health += healed;
		this.magic -= healed;
		fightCommentary.textContent = `${this.name} healed ${healed} HP and lost ${healed} MP !`;
	}

	magicAttack(target) {
		if (this.magic < spell) {
			return (fightCommentary.textContent = `${this.name} doesn’t have enough magic!`);
		}
		this.magic -= spell;
		target.health -= spell;
		fightCommentary.textContent = `${this.name} used magic ! ${target.name} lost ${spell} HP !`;
	}
}
class Mage extends Character {
	constructor(id, name, img) {
		super(id, name, img);
		this.maxHealth = 850;
		this.health = this.maxHealth;
		this.strength = 75;
		this.maxMagic = 1000;
		this.magic = this.maxMagic;
	}
}

class Warrior extends Character {
	constructor(id, name, img) {
		super(id, name, img);
		this.maxHealth = 1150;
		this.health = this.maxHealth;
		this.strength = 125;
		this.maxMagic = 700;
		this.magic = this.maxMagic;
	}
}
