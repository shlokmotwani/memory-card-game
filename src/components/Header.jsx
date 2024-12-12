import "../style/header.css";

function Header({ currentScore, highScore }) {
  return (
    <div id="header">
      <span id="title">Memory Card Game</span>
      <div>
          <span className="score-text">
            Current Score
            {" : "}
            {currentScore}
          </span>
          <span className="score-text">
            High Score
            {" : "}
            {highScore}
          </span>
      </div>
    </div>
  );
}

export { Header };
