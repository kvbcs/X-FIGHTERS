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

	div.addEventListener("click", (e) => {
		document.querySelectorAll(".character-div").forEach((element) => {
			element.style.backgroundColor = "";
		});
		e.currentTarget.style.backgroundColor = "gold";

		addSelectCharacter(character);
	});
});

const addSelectCharacter = (character) => {
	if (selectedCharacters[0] === character) {
		playSfx("/assets/error-cta.mp3", 0.5);
		return (fightCommentary.textContent = `Vous avez déjà choisi ${character.name} !`);
	} else if (selectedCharacters.length >= 0) {
		selectedCharacters = [];
	}
	playSfx("/assets/coin.mp3", 0.8);
	selectedCharacters.push(character);

	// Choix aléatoire d’un personnage dans le tableau
	let randomIndex = Math.floor(Math.random() * playableCharacters.length);
	let computerChoice = playableCharacters[randomIndex];

	selectedCharacters.push(computerChoice);
	fightCommentary.textContent = `Vous avez pris ${character.name}, l'IA a pris ${computerChoice.name}`;
};

startBtn.addEventListener("click", () => {
	if (selectedCharacters.length <= 0) {
		playSfx("/assets/error-cta.mp3", 0.5);
		return (fightCommentary.textContent = "Choisissez un personnage !");
	}
	// Ajouter le type à chaque personnage
	const charactersWithType = selectedCharacters.map((char) => {
		let type = "Character";
		if (char instanceof Mage) type = "Mage";
		else if (char instanceof Warrior) type = "Warrior";
		else if (char instanceof Brawler) type = "Brawler";

		return {
			...char,
			type: type,
		};
	});

	localStorage.setItem("characters", JSON.stringify(charactersWithType));
	window.location.href = "/fight.html";
});
