import { Card } from "./Card";
import '../style/table.css'

function shuffle(arr) {
  let array = arr.slice();
  let index = array.length;

  while (index != 0) {
    let randomIndex = Math.floor(Math.random() * index);
    index--;
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
  }
  return array;
}

function Table({
  deck,
  setDeck,
  selectedCards,
  setSelectedCards,
  currentScore,
  setCurrentScore,
  highScore,
  setHighScore,
  isGameOver,
  setIsGameOver,
}) {
  const cards = deck.map((card, index) => {
    let arr = selectedCards.slice();
    return (
      <Card
        key={index}
        value={card}
        handleClick={() => {
            if(isGameOver){
                return;
            }
          if (arr.includes(card)) {
            setIsGameOver(true);
            console.log("GAME OVER!");
            if (currentScore > highScore) {
              setHighScore(currentScore);
              localStorage.setItem("memory-card-game-high-score", currentScore);
            }
          } else {
            arr.push(card);
            setSelectedCards(arr);
            let newDeck = shuffle(deck);
            setDeck(newDeck);
            setCurrentScore(currentScore + 1);
          }
        }}
      />
    );
  });
  return (
    <>
      {cards}
      {isGameOver && (
        <div>
          <span id="game-over-text">GAME OVER</span>
        </div>
      )}
    </>
  );
}

export { Table };
