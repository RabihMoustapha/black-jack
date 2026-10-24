# 🃏 Blackjack Game - HTML, CSS & JS Demo

A clean, interactive, and lightweight browser-based **Blackjack Game** built entirely using vanilla **HTML5**, **CSS3**, and **JavaScript**. This project serves as a fun demonstration of DOM manipulation, conditional logic, and basic game state management in frontend web development.

---

## 🚀 Features

* **Interactive Gameplay:** Start a round, draw random cards dynamically, and track your card sum in real-time.
* **Casino-Themed UI:** Styled with a custom casino table background, golden typography, and clean button controls.
* **Player Profile Tracking:** Displays the player's name and chip count dynamically.
* **Game State Handling:** Automatically detects if you've won with a Blackjack, need another card, or are out of the game when your sum exceeds 21.

---

## 📂 Directory Structure

```text
HTML, CSS and JS Demo/
│
├── images/
│   └── table.jpg          # Casino table background image
├── index.html             # Main HTML markup and structure
├── scripts.js             # Core game logic and DOM updates
└── styles.css             # Custom styling and layout
```

---

## 🛠️ Built With
* HTML5 – Page structure and DOM elements

* CSS3 – Styling, layout, and background aesthetics

* JavaScript (ES6) – Game state management, random card generation, and event handling

---

## 🕹️ How to Run Locally
* Clone or Download this repository to your local machine:

```Bash
git clone <repository-url>
```

* Navigate to the project directory:

```
Bash
cd "HTML, CSS and JS Demo"
```

* Open index.html directly in any modern web browser:
  
```
Mac: open index.html

Windows: start index.html

Linux: xdg-open index.html(Alternatively, use a live server extension like the one in VS Code for instant reloading).
```

---

## 📜 Code Overview
* index.html: Contains the layout structure including game headers, message display, card tracking elements (#cards-el, #sum-el), and interactive action buttons (Start Game, New Card).

* scripts.js: Handles core gameplay mechanics:

* start_game(): Initializes the game state.

* draw_card(): Generates a random card value (handling Aces as 11 and face cards/10s properly) and updates the score.

* render_game(): Evaluates the total sum against Blackjack rules (Win, Draw, or Bust) and updates the UI text dynamically.

* styles.css: Provides a centered layout, customized gold action buttons, and applies the casino table background image.

---

## 📄 License
This project is open-source and available for educational and personal use.
