# Advanced Tic-Tac-Toe: Algorithmic AI Edition
A feature-rich, strategic Tic-Tac-Toe implementation built with Vanilla JavaScript. This project moves beyond the basic 3x3 grid, offering scalable boards, persistent statistics, and 5 distinct AI difficulty levels ranging from random moves to advanced tree-search algorithms.

# Key Features
Custom User Profiles: Create and save unique nicknames. The system tracks performance and compares stats across different sessions.

Persistent Statistics: High scores and player history are stored locally using Web Storage API (localStorage).

Dynamic "Side Switch" Mechanic: Inspired by competitive games like CS:GO. After half of the total rounds (e.g., 8 out of 16), players automatically swap sides and inherit the AI's points, testing your ability to win from any position.

Multilingual & Customizable: Support for 3 languages, UI sound toggles, and multiple color themes.

Real-time HUD: Instant updates on player/AI stats after every round.

# AI Intelligence Levels
The core of this project is its diverse AI engine, which utilizes different Computer Science concepts:

Level 1 (Easy): Random move selection.

Level 2 (Intermediate): Heuristic-based. It prioritizes its own winning moves and blocks the player from winning.

Level 3 (Hard): Minimax Algorithm for the standard 3x3 board (guarantees an unbeatable opponent).

Level 4 (Expert): Limited Depth Minimax optimized for 4x4 boards to balance performance and difficulty.

Level 5 (Grandmaster): Monte Carlo Tree Search (MCTS) for 5x5 and 7x7 boards, allowing the AI to handle higher state-space complexity efficiently.

# Technical Stack
Frontend: HTML5, CSS3 (1500+ lines of custom styling).

Logic: Vanilla JavaScript (3500+ lines of code).

State: LocalStorage for data persistence.

# Learning Outcomes
This project served as a massive deep-dive into complex software logic:

Algorithm Implementation: Successfully translated mathematical concepts (MCTS/Minimax) into working code.

State Management: Managed complex game flows, including score swapping and multi-round logic.

UI/UX Design: Implemented a full settings suite (themes, languages, sounds) to improve the user experience.

# How to Run

Bash
git clone https://github.com/your-username/advanced-tic-tac-toe.git
Open index.html in any modern web browser.

Github Pages
