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
		const criticalHit = getRandomItem(hitChance);
		const attackValue = this.strength * criticalHit;
		target.health -= attackValue;
		fightCommentary.textContent = `${this.name} attaque ! ${target.name} a perdu ${attackValue} PV !`;
	}
	heal() {
		const criticalHit = getRandomItem(hitChance);
		if (this.magic < healed) {
			return (fightCommentary.textContent = `${this.name} n'a plus assez de Magie !`);
		}
		if (this.health >= this.maxHealth) {
			return (fightCommentary.textContent = `${player.name} a déjà la vie pleine !`);
		}
		const healValue = healed * criticalHit;
		this.health += healValue;
		this.magic -= healed;
		fightCommentary.textContent = `${this.name} a soigné ${healValue} PV et perdu ${healed} Magie !`;
	}

	magicAttack(target) {
		const criticalHit = getRandomItem(hitChance);
		if (this.magic < spell) {
			return (fightCommentary.textContent = `${this.name} n'a plus assez de Magie !`);
		}
		const spellValue = spell * criticalHit;
		this.magic -= spell;
		target.health -= spellValue;
		fightCommentary.textContent = `${this.name} utilise de la magie ! ${target.name} a perdu ${spellValue} PV !`;
	}
}
class Mage extends Character {
	constructor(id, name, img) {
		super(id, name, img);
		this.maxHealth = 1000;
		this.health = this.maxHealth;
		this.strength = 75;
		this.maxMagic = 1000;
		this.magic = this.maxMagic;
	}
}

class Warrior extends Character {
	constructor(id, name, img) {
		super(id, name, img);
		this.maxHealth = 850;
		this.health = this.maxHealth;
		this.strength = 125;
		this.maxMagic = 850;
		this.magic = this.maxMagic;
	}
}

class Brawler extends Character {
	constructor(id, name, img) {
		super(id, name, img);
		this.maxHealth = 1000;
		this.health = this.maxHealth;
		this.strength = 125;
		this.maxMagic = 700;
		this.magic = this.maxMagic;
	}
}
