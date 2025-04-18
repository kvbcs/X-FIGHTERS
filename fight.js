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
console.log(selectedCharacters);

const player = selectedCharacters[0];
const enemy = selectedCharacters[1];

playerHealth.value = player.health;
enemyHealth.value = enemy.health;
playerMagic.value = player.magic;
enemyMagic.value = enemy.magic;

console.log(playerHealth.value);

//Attack button
attackBtn.addEventListener("click", () => {
	player.attack(enemy);
	console.log(selectedCharacters);
});

//Heal button
healBtn.addEventListener("click", () => {
	player.heal();
	console.log(selectedCharacters);
});

//Magic button
magicBtn.addEventListener("click", () => {
	player.magicAttack(enemy);
	console.log(selectedCharacters);
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
