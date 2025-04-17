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
	main.innerHTML = "";
	audio.src = "/assets/fight-theme.mp3";
	section = document.createElement("section");
	section.classList.add("fighting-container");
	main.appendChild(section);
	main.appendChild(attackBtn);
	main.appendChild(healBtn);
	main.style.backgroundImage =
		"url('https://cdn1.epicgames.com/ue/product/Screenshot/2a-1920x1080-07c9dfe6bf588f8db7dac536c295896a.png?resize=1&w=1920')";

	attackBtn.classList.remove("hidden");
	healBtn.classList.remove("hidden");
	attackBtn.addEventListener("click", () => {
		selectedCharacters[0].attack(selectedCharacters[1]);
		selectedCharacters[1].attack(selectedCharacters[0]);
		console.log(selectedCharacters);
	});
	healBtn.addEventListener("click", () => {
		selectedCharacters[0].heal();
		console.log(selectedCharacters);
	});
	selectedCharacters.forEach((character) => {
		div = document.createElement("div");
		div.classList.add("character-div");
		div.style.backgroundColor = "";
		div.setAttribute("id", character.id);

		img = document.createElement("img");
		img.src = character.img;

		//Ajout des éléments
		div.appendChild(img);
		section.appendChild(div);
	});
});
