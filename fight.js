selectedCharacters = JSON.parse(localStorage.getItem("characters")).map(
	(charData) => {
		return new Character(charData.id, charData.name, charData.img);
	}
);
console.log(selectedCharacters);


attackBtn.addEventListener("click", () => {
	selectedCharacters[0].attack(selectedCharacters[1]);
	// enemyHealth -= selectedCharacters[0].strength
	selectedCharacters[1].attack(selectedCharacters[0]);
	console.log(selectedCharacters);
});
healBtn.addEventListener("click", () => {
	selectedCharacters[0].heal();
	console.log(selectedCharacters);
});

selectedCharacters.forEach((character) => {
	div = document.createElement("div");
	div.classList.add("fighter-div");
	img = document.createElement("img");
	img.src = character.img;

	//Ajout des éléments
	div.setAttribute("id", selectedCharacters.indexOf(character));
	div.appendChild(img);
	fightingContainer.appendChild(div);
});
