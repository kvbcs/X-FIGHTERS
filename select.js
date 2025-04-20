playableCharacters.forEach((character) => {
	//Création et style d'éléments
	div = document.createElement("div");
	img = document.createElement("img");

	//Style et attributs
	div.classList.add("character-div");
	div.setAttribute("id", character.id);
	img.src = character.img;

	//Ajout des éléments
	div.appendChild(img);
	characterContainer.appendChild(div);

	div.addEventListener("click", () => {
		addSelectCharacter(character);
	});
});

const addSelectCharacter = (character) => {
	if (selectedCharacters[0] === character) {
		return (fightCommentary.textContent = `You already chose ${character.name} !`);
	} else if (selectedCharacters.length >= 0) {
		selectedCharacters = [];
	}
	selectedCharacters.push(character);

	// Choix aléatoire d’un personnage dans le tableau
	let randomIndex = Math.floor(Math.random() * playableCharacters.length);
	let computerChoice = playableCharacters[randomIndex];

	selectedCharacters.push(computerChoice);
	fightCommentary.textContent = `You picked ${character.name}, AI selected ${computerChoice.name}`;
};

startBtn.addEventListener("click", () => {
	if (selectedCharacters.length <= 0) {
		return (fightCommentary.textContent = "Please choose a fighter !");
	}
	// Ajouter le type à chaque personnage
	const charactersWithType = selectedCharacters.map((char) => {
		let type = "Character";
		if (char instanceof Mage) type = "Mage";
		else if (char instanceof Warrior) type = "Warrior";

		return {
			...char,
			type: type,
		};
	});

	localStorage.setItem("characters", JSON.stringify(charactersWithType));
	window.location.href = "/fight.html";
});
