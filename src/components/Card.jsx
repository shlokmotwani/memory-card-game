import '../style/card.css'

const urlPrefix = "https://deckofcardsapi.com/static/img/";
const urlSuffix = ".png";

function generateImageURL(card) {
  const url = urlPrefix + card + urlSuffix;
  return url;
}

function Card({ value, handleClick }) {
  const data = {
    value: value,
    url: generateImageURL(value),
  };
  return <img src={data.url} onClick={handleClick}/>;
}

export { Card };
