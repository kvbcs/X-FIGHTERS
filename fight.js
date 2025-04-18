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

const checkGameOver = () => {

	//Vérif du gagnant avec ternaire
	if (player.health <= 0 || enemy.health <= 0) {
		const winner =
			player.health <= 0 && enemy.health <= 0
				? "Nobody"
				: player.health > 0
				? player.name
				: enemy.name;

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
				location.href="/select.html"
			}
		}, 1000);
		return true;
	}
	return false;
};

const enemyPlay = () => {
	setTimeout(() => {
		if (enemy.health <= enemy.health / 2 && enemy.magic >= 150) {
			enemy.heal();
		} else if (enemy.magic >= 100) {
			enemy.magicAttack(player);
		} else {
			enemy.attack(player);
		}
		updateUI();
		checkGameOver();
		playerTurn = true;
	}, 2000);
};

attackBtn.addEventListener("click", () => {
	if (!playerTurn) return;
	player.attack(enemy);
	updateUI();
	playerTurn = false;
	if (!checkGameOver()) enemyPlay();
});

healBtn.addEventListener("click", () => {
	if (!playerTurn) return;
	player.heal();
	updateUI();
	playerTurn = false;
	if (!checkGameOver()) enemyPlay();
});

magicBtn.addEventListener("click", () => {
	if (!playerTurn) return;
	player.magicAttack(enemy);
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
