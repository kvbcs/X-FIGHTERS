selectedCharacters = JSON.parse(localStorage.getItem("characters")).map(
	(charData) => {
		if (charData.type === "Mage") {
			return new Mage(charData.id, charData.name, charData.img);
		} else if (charData.type === "Warrior") {
			return new Warrior(charData.id, charData.name, charData.img);
		} else {
			return new Character(charData.id, charData.name, charData.img);
		}
	}
);
const player = selectedCharacters[0];
const enemy = selectedCharacters[1];

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

//Fonction pour jouer de l'audio à chaque action
const playSfx = (src, volume) => {
	const audio = document.createElement("audio");
	audio.src = src;
	audio.autoplay = true;
	audio.volume = volume;

	audio.addEventListener("ended", () => {
		audio.remove();
	});
	fightingContainer.appendChild(audio);
};

const checkGameOver = () => {
	//Vérif du gagnant avec ternaire
	if (player.health <= 0 || enemy.health <= 0) {
		const winner =
			//Si les 2 sont à 0, personne gagne
			player.health <= 0 && enemy.health <= 0
				? "Nobody"
				: //Si l'ennemi est à 0 et pas le joueur, joueur gagne
				player.health > 0 && enemy.health <= 0
				? player.name
				: //Sinon, l'ennemi
				  enemy.name;
		if (winner === "Nobody") {
			audio.src = "/assets/game-over.mp3";
			audio.removeAttribute("loop");
		} else if (winner === player.name) {
			score++;
			audio.src = "/assets/victory-sfx.mp3";
			audio.removeAttribute("loop");
		} else {
			score--;
			audio.src = "/assets/game-over.mp3";
			audio.removeAttribute("loop");
		}
		localStorage.setItem("score", score);
		scoreText.textContent = score;

		console.log(score);

		fightCommentary.textContent = `${winner} wins the fight!`;

		setTimeout(() => {
			let again = prompt(
				"Do you want to play again? (yes/no)"
			).toLowerCase();
			while (again !== "yes" && again !== "no") {
				again = prompt("Please type 'yes' or 'no':").toLowerCase();
			}
			if (again === "yes") {
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
			if (enemy.health <= 250 && enemy.magic >= healed) {
				enemy.heal();
				playSfx("./assets/health-sfx.mp3", 0.4);
			} else if (enemy.magic >= spell) {
				enemy.magicAttack(player);
				playSfx("./assets/magic-sfx.mp3", 0.2);
			} else {
				enemy.attack(player);
				playSfx("./assets/sword-sfx.mp3", 0.2);
			}
		} else if (enemy instanceof Warrior) {
			if (enemy.health <= 250 && enemy.magic >= healed) {
				enemy.heal();
				playSfx("./assets/health-sfx.mp3", 0.4);
			} else if (enemy.magic >= 150) {
				enemy.attack(player);
				playSfx("./assets/sword-sfx.mp3", 0.2);
			} else {
				enemy.magicAttack(player);
				playSfx("./assets/magic-sfx.mp3", 0.2);
			}
		}

		updateUI();
		checkGameOver();
		if (player.magic < player.maxMagic) {
			player.magic += 50;
		}
		if (enemy.magic < enemy.maxMagic) {
			enemy.magic += 50;
		}
		console.log(player.magic, enemy.magic);

		playerTurn = true;
	}, 1500);
};

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
