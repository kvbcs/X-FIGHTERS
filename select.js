console.log(playableCharacters);

playableCharacters.forEach((character) => {
	//Création et style d'éléments
	div = document.createElement("div");
	div.classList.add("character-div");
	div.setAttribute("id", character.id);

	img = document.createElement("img");
	img.src = character.img;

	//Ajout des éléments
	div.appendChild(img);
	characterContainer.appendChild(div);

	div.addEventListener("click", () => {
		console.log(character);
		addSelectCharacter(character);
	});
});

const addSelectCharacter = (character) => {
	if (selectedCharacters.length >= 0) {
		selectedCharacters = [];
	}
	selectedCharacters.push(character);
	alert(`You selected ${character.name}`);
	// Choix aléatoire d’un personnage dans le tableau
	let randomIndex = Math.floor(Math.random() * playableCharacters.length);
	let computerChoice = playableCharacters[randomIndex];

	selectedCharacters.push(computerChoice);
	alert(`Computer selected ${computerChoice.name}`);
	console.log(selectedCharacters);
};

startBtn.addEventListener("click", () => {
	if (selectedCharacters.length <= 0) {
		return alert("Please choose a fighter");
	}
localStorage.setItem("characters", JSON.stringify(selectedCharacters));

	window.location.href = "/fight.html";
});


