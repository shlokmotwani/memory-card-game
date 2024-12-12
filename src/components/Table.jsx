import { Card } from "./Card";

const number = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
const suit = ["C", "D", "H", "S"];
const urlPrefix = "https://deckofcardsapi.com/static/img/";
const urlSuffix = ".png";

const deck = [];
const deckSize = 20;

function generateDeck() {
  while(true){
    if(deck.length === deckSize){
        return;
    }
    const randNum = Math.floor(Math.random() * 100) % 12;
    const randSuit = Math.floor(Math.random() * 100) % 4;
    const randCard = number[randNum] + suit[randSuit];
    if(!deck.includes(randCard)){
        deck.push(randCard);
    }
  }
}

function printDeck(){
    deck.map(card => console.log(imageURL(card)));
}

function imageURL(card) {
  const url = urlPrefix + card + urlSuffix;
  return url;
}

function Table() {
    generateDeck();
    printDeck();
    return deck.map((card, index) => {
        return <Card key={index} url={imageURL(card)}/>
    })
}

export { Table };
