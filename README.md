
# X-Fighters

X-Fighters is a 1 versus 1 turn by turn fighting game. Choose your fighter and defeat your opponent to win !

## How to play

1) Click the Player VS AI button to redirect to the character selection screen.

![Menu Screen](/main-menu.PNG)

2) Pick a fighter from the selection, each character has different statistics so pick wisely !

![Select Screen](/select-menu.PNG)

3) Click each button to do different actions : 

![Fight Screen](/fight-menu.PNG)


#### a. Attack : Inflict physical damage to your opponent 
#### b. Heal : Use magic to restore some health
#### c. Magic : Use magic to inflict damage to your opponent

## Game Over

Once the game ends, enter "yes" or "no" on the prompt to either replay the match or quit to the character selector.

![Fight Screen](/game-over.PNG)

## Mechanics

The game starts by automatically picking a random turn.

Each player has 1 action per turn and each action taken has a random chance to be a critical hit making every game randomized.

### Attack
Does a base damage depending on the character's stats and is multiplied by a random crit chance.

### Heal
Does a base health regen multiplied by a random crit chance. Uses a base magic cost.

### Magic
Does a base magic attack multiplied by a random crit chance. Uses a base magic cost

Every 2 turns, the magic stats regen slowly by a base amount, multiplied by a random crit chance.

