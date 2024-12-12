const number = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
const suit = ["C", "D", "H", "S"];
const urlPrefix = "https://deckofcardsapi.com/static/img/"
const urlSuffix = ".png";

function imageURL(card){
    const url = urlPrefix + card + urlSuffix;
    return url;
}

function Card(){
    const randNum = Math.floor(Math.random() * 100) % 12;
    const randSuit = Math.floor(Math.random() * 100) % 4;
    const randCard = number[randNum] + suit[randSuit];
    console.log(randCard);
    return(
        <img src={imageURL(randCard)} />
    );
}

export {Card}