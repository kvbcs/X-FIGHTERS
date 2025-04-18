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

const updateUI = () => {
	playerHealth.value = player.health;
	enemyHealth.value = enemy.health;
	playerMagic.value = player.magic;
	enemyMagic.value = enemy.magic;
};

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
	console.log(selectedCharacters);

	//Vérif du gagnant avec ternaire
	if (player.health <= 0 || enemy.health <= 0) {
		const winner =
			player.health <= 0 && enemy.health <= 0
				? "Nobody"
				: player.health > 0
				? player.name
				: enemy.name;
		if (winner === "Nobody") {
			audio.src = "/assets/game-over.mp3";
			audio.removeAttribute("loop");
		} else if (winner === player.name) {
			audio.src = "/assets/victory-sfx.mp3";
			audio.removeAttribute("loop");
		} else {
			audio.src = "/assets/game-over.mp3";
			audio.removeAttribute("loop");
		}

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
		if (enemy.health <= 250 && enemy.magic >= 150) {
			enemy.heal();
			playSfx("./assets/health-sfx.mp3", 0.4);
		} else if (enemy.magic >= 150) {
			enemy.magicAttack(player);
			playSfx("./assets/magic-sfx.mp3", 0.2);
		} else {
			enemy.attack(player);
			playSfx("./assets/sword-sfx.mp3", 0.2);
		}
		updateUI();
		checkGameOver();
		playerTurn = true;
	}, 1500);
};

attackBtn.addEventListener("click", () => {
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
	if (!playerTurn) return;
	player.heal();
	playSfx("./assets/health-sfx.mp3", 0.4);
	updateUI();
	playerTurn = false;
	if (!checkGameOver()) enemyPlay();
});

magicBtn.addEventListener("click", () => {
	if (!playerTurn) return;
	player.magicAttack(enemy);
	playSfx("./assets/magic-sfx.mp3", 0.2);
	updateUI();
	playerTurn = false;
	if (!checkGameOver()) enemyPlay();
});

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
