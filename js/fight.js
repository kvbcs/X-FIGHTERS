selectedCharacters = JSON.parse(localStorage.getItem("characters")).map(
	(charData) => {
		if (charData.type === "Mage") {
			return new Mage(charData.id, charData.name, charData.img);
		} else if (charData.type === "Warrior") {
			return new Warrior(charData.id, charData.name, charData.img);
		} else if (charData.type === "Brawler") {
			return new Brawler(charData.id, charData.name, charData.img);
		} else {
			return new Character(charData.id, charData.name, charData.img);
		}
	}
);

selectedCharacters.forEach((character) => {
	//Création d'éléments
	div = document.createElement("div");
	img = document.createElement("img");

	//Style et attributs
	div.classList.add("fighter-div");
	div.setAttribute("id", selectedCharacters.indexOf(character));
	img.src = character.img;

	//Ajout des éléments
	div.appendChild(img);
	fightingContainer.appendChild(div);
});

const player = selectedCharacters[0];
const enemy = selectedCharacters[1];

const randomTurn = () => {
	let random = Math.floor(Math.random() * 2) + 1;
	if (random === 1) {
		fightCommentary.textContent = `Au tour de ${player.name} !`;
		return true;
	} else {
		fightCommentary.textContent = `Au tour de ${enemy.name} !`;
		return false;
	}
};

let playerTurn = randomTurn();

//Attributions des vies au barres de progress
playerHealth.max = player.maxHealth;
playerMagic.max = player.maxMagic;
enemyHealth.max = enemy.maxHealth;
enemyMagic.max = enemy.maxMagic;

//Fonction qui met à jour les barres de vies
const updateUI = () => {
	playerHealth.value = player.health;
	enemyHealth.value = enemy.health;
	playerMagic.value = player.magic;
	enemyMagic.value = enemy.magic;
};

//Fonction de régénération de magic à chaque tour
const regenMagic = () => {
	if (player.magic < player.maxMagic) {
		const criticalHit = getRandomItem(hitChance);
		player.magic += 50 * criticalHit;
	}
	if (enemy.magic < enemy.maxMagic) {
		const criticalHit = getRandomItem(hitChance);
		enemy.magic += 50 * criticalHit;
	}
};

const checkGameOver = () => {
	//Vérif du gagnant avec ternaire
	if (player.health <= 0 || enemy.health <= 0) {
		const winner =
			//Si les 2 sont à 0, personne gagne
			player.health <= 0 && enemy.health <= 0
				? "Personne"
				: //Si l'ennemi est à 0 et pas le joueur, joueur gagne
				player.health > 0 && enemy.health <= 0
				? player.name
				: //Sinon, l'ennemi
				  enemy.name;
		if (winner === "Personne") {
			if (score > 0) {
				score--;
			}
			audio.src = "/assets/game-over.mp3";
			audio.removeAttribute("loop");
		} else if (winner === player.name) {
			score++;
			audio.src = "/assets/victory-sfx.mp3";
			audio.removeAttribute("loop");
		} else {
			if (score > 0) {
				score--;
			}
			audio.src = "/assets/game-over.mp3";
			audio.removeAttribute("loop");
		}
		localStorage.setItem("score", score);
		scoreText.textContent = score;
		fightCommentary.textContent = `${winner} gagne le combat !`;
		attackBtn.style.display = "none";
		healBtn.style.display = "none";
		magicBtn.style.display = "none";

		setTimeout(() => {
			let again = prompt(
				"Voulez-vous rejouer ?"
			).toLowerCase();
			while (again !== "oui" && again !== "non") {
				again = prompt("Ecrivez 'oui' ou 'non'").toLowerCase();
			}
			if (again === "oui") {
				location.reload();
			} else {
				location.href = "/select.html";
			}
		}, 1000);
		return true;
	}
	return false;
};

const enemyPlay = () => {
	setTimeout(() => {
		if (enemy instanceof Character || enemy instanceof Mage) {
			if (player.health <= 150 && enemy.magic >= spell) {
				enemy.magicAttack(player);
				playSfx("./assets/magic-sfx.mp3", 0.2);
			} else if (player.health <= 75) {
				enemy.attack(player);
				playSfx("./assets/sword-sfx.mp3", 0.2);
			} else if (enemy.health <= 250 && enemy.magic >= healed) {
				enemy.heal();
				playSfx("./assets/health-sfx.mp3", 0.4);
			} else if (enemy.magic >= spell) {
				enemy.magicAttack(player);
				playSfx("./assets/magic-sfx.mp3", 0.2);
			} else {
				enemy.attack(player);
				playSfx("./assets/sword-sfx.mp3", 0.2);
			}
		} else if (enemy instanceof Warrior || enemy instanceof Brawler) {
			if (enemy.health <= 250 && enemy.magic >= healed) {
				enemy.heal();
				playSfx("./assets/health-sfx.mp3", 0.4);
			} else if (player.health <= 125 || enemy instanceof Brawler) {
				enemy.attack(player);
				playSfx("./assets/sword-sfx.mp3", 0.2);
			} else if (enemy instanceof Warrior && enemy.magic >= spell) {
				enemy.magicAttack(player);
				playSfx("./assets/magic-sfx.mp3", 0.2);
			} else {
				enemy.attack(player);
				playSfx("./assets/sword-sfx.mp3", 0.2);
			}
		}
		regenMagic();
		updateUI();
		checkGameOver();
		playerTurn = true;
	}, 1500);
};

if (!playerTurn) {
	enemyPlay();
}

attackBtn.addEventListener("click", () => {
	if (checkGameOver()) return;
	if (!playerTurn) {
		return;
	}
	player.attack(enemy);
	playSfx("./assets/sword-sfx.mp3", 0.2);

	updateUI();
	playerTurn = false;
	if (!checkGameOver()) {
		enemyPlay();
	}
});

healBtn.addEventListener("click", () => {
	if (checkGameOver()) return;
	if (!playerTurn) return;
	player.heal();
	playSfx("./assets/health-sfx.mp3", 0.4);
	updateUI();
	playerTurn = false;
	if (!checkGameOver()) enemyPlay();
});

magicBtn.addEventListener("click", () => {
	if (checkGameOver()) return;
	if (!playerTurn) return;
	player.magicAttack(enemy);
	playSfx("./assets/magic-sfx.mp3", 0.2);
	updateUI();
	playerTurn = false;
	if (!checkGameOver()) enemyPlay();
});
