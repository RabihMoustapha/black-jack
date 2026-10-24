/* Game variables */
let player = {
	name: "Rabih",
	chips: 145
}

/* Game state variables */
let cards = []
let sum = 0
let is_alive = false
let has_blackjack = false
let message_el = document.getElementById("message-el")
let message = ""
let sum_el = document.getElementById("sum-el")
let cards_el = document.getElementById("cards-el")
let player_el = document.getElementById("player-el")
player_el.textContent = player.name + ": $" + player.chips

/* Game functions */
function start_game() {
	is_alive = true
	render_game()
}

function render_game() {
	cards_el.textContent = "Cards: "

	sum_el.textContent = "Sum: " + sum

	for (let i = 0; i < cards.length; i++)
		cards_el.textContent += cards[i] + " "

	if (sum < 21) {
		sum_el.textContent = "Sum: " + sum
		message = "Do you want to draw a new card?"
	} else if (sum === 21) {
		sum_el.textContent = "Sum: " + sum
		message = "You've got the BlackJack!"
		has_blackjack = true
	} else {
		sum_el.textContent = "Sum: " + sum
		message = "You're out of the game!"
		is_alive = false
	}
	message_el.textContent = message
}

function draw_card() {
	let new_card = get_random_card()
	sum += new_card
	cards.push(new_card)
	render_game()
}

function get_random_card() {
	let random_number = Math.floor(Math.random() * 13) + 1

	/* King, Queen and Knight = 10 */
	if (random_number > 10) {
		return 10
	}

	/* Ace = 1 */
	else if (random_number === 1) {
		return 11
	} 
	
	/* Other cards = their face value */
	else {
		return random_number
	}
}