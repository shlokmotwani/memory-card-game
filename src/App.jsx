import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Table } from "./components/Table";

const number = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
const suit = ["C", "D", "H", "S"];
const deckSize = 20;

function generateDeck() {
  const deck = [];
  while (true) {
    if (deck.length === deckSize) {
      break;
    }
    const randNum = Math.floor(Math.random() * 100) % 12;
    const randSuit = Math.floor(Math.random() * 100) % 4;
    const randCard = number[randNum] + suit[randSuit];
    if (!deck.includes(randCard)) {
      deck.push(randCard);
    }
  }
  return deck;
}

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(
    localStorage.getItem("memory-card-game-high-score") ?? 0
  );
  const [isGameOver, setIsGameOver] = useState(false);
  const [deck, setDeck] = useState(generateDeck());
  const [selectedCards, setSelectedCards] = useState([]);

  return (
    <div>
      <Header currentScore={currentScore} highScore={highScore} />
      <Table
        deck={deck}
        setDeck={setDeck}
        selectedCards={selectedCards}
        setSelectedCards={setSelectedCards}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        highScore={highScore}
        setHighScore={setHighScore}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
      />
    </div>
  );
}

export default App;
