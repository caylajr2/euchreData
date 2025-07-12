const suits = ['spades', 'hearts', 'diamonds', 'clubs'];
const values = ['9', '10', 'J', 'Q', 'K', 'A'];
const trumps = ['spades', 'hearts', 'diamonds', 'clubs', 'high', 'low'];


class Card {
    constructor(suit, value) {
        if (!suits.includes(suit)) {
            throw Error('Suit must be one of the following: spades, hearts, diamonds, clubs');
        }
        if (!values.includes(value)) {
            throw Error('Value must be one of the following: 9, 10, J, Q, K, A')
        }
        this._suit = suit;
        this._value = value;
    }
    get suit() {
        return this._suit;
    }
    get value() {
        return this._value;
    }
    toString() {
        let str = `{ ${this._suit} ${this._value} }`;
        return str;
    }
}

class Bid {
    constructor(name, trump, tricks) {
        if (tricks === 0 || tricks === 12 || tricks === 16) {
            console.log("Bid was a pass, partner shoot, or shoot. Defer trump choice until later.")
        }
        else if (!trumps.includes(trump)) {
            throw Error('Suit must be one of the following: spades, hearts, diamonds, clubs, high, low');
        }
        this._name = name;
        this._trump = trump;
        this._tricks = tricks;
    }
    get trump() {
        return this._trump;
    }
    get tricks() {
        return this._tricks
    }
    updateShooterTrump(trump) {
        if (this._tricks !== 12 && this._tricks !== 16) {
            throw Error('Bid is not a shooter and cannot be updated.');
        }
        else if (!trumps.includes(trump)) {
            throw Error('Suit must be one of the following: spades, hearts, diamonds, clubs, high, low');
        }
        this._trump = trump;
    }
}

class Trick {
    constructor() {
        this._cards = [];
    }
    get cards() {
        return this._cards;
    }
    playCard(card) {
        if (this._cards.length >= 6) {
            throw Error('There cannot be more than 6 cards per trick.');
        }
        if (!(card instanceof Card)) {
            throw Error('You can only play objects of type Card on tricks.');
        }
        this._cards.push(card);
    }
    removeCard() {
        if (this._cards.length === 0) {
            throw Error('There must be at least 1 card to remove.');
        }
        this._cards.pop();
    }
    toString() {
        let str = "{\n";
        for (const card of this._cards) {
            str += `\t ${card.suit} ${card.value}\n`;
        }
        str += '}';
        return str;
    }
}

class Hand {
    constructor() {
        this._bids = [];
        this._tricks = [];
    }
    get bids() {
        return this._bids;
    }
    get tricks() {
        return this._tricks;
    }
    addBid(bid) {
        if (this._bids.length >= 6) {
            throw Error('There cannot be more than 6 bids.');
        }
        if (!(bid instanceof Bid)) {
            throw Error('You can only add objects of type Bid here.');
        }
        this._bids.push(bid);
    }
    removeBid() {
        if (this._bids.length === 0) {
            throw Error('There must be at least 1 bid to remove.');
        }
        this._bids.pop();
    }
    addTrick(trick) {
        if (this._tricks.length >= 8) {
            throw Error('There cannot be more than 8 tricks.');
        }
        if (!(trick instanceof Trick)) {
            throw Error('You can only add objects of type Trick here.');
        }
        this._tricks.push(trick);
    }
    removeTrick() {
        if (this._tricks.length === 0) {
            throw Error('There must be at least 1 trick to remove.');
        }
        this._tricks.pop();
    }
}

class Game {
    constructor() {
        this._hands = [];
    }
    get hands() {
        return this._hands;
    }
    addHand(hand) {
        if (!(hand instanceof Hand)) {
            throw Error('You can only add objects of type Hand to the game.');
        }
        this._hands.push(hand);
    }
    removeHand() {
        if (this._hands.length === 0) {
            throw Error('There must be at least 1 card to remove.');
        }
        this._hands.pop();
    }
}

export { Card, Bid, Trick, Hand, Game };




    
    

    
// =============================== Testing Functions =========================================

const createDeck = () => {
    const deck = [];

    for (const suit of suits) {
        for (const value of values) {
            deck.push(new Card(suit, value));
        }
    }
    
    //verify creation of deck and cards
    console.log(deck);
    return deck;
}



// Card Test Functions

const createCards = () => {
    const cards = [
        new Card('spades', '9'),
        new Card('hearts', '10'),
        new Card('diamonds', 'J'),
        new Card('clubs', 'Q'),
        new Card('hearts', 'K'),
        new Card('clubs', 'A')
    ];

    cards.forEach(card => console.log(card.toString()));
}

const createCardInvalidSuit = () => {
    try {
        const card = new Card('stars', '9');
    } catch (e) {
        console.log(e);
    }
}

const createCardInvalidValue = () => {
    try {
        const card = new Card('clubs', '7');
    } catch (e) {
        console.log(e);
    }
}

const runAllCardTests = () => {
    console.log("Creating one card of each value and suit");
    createCards();


    console.log('Testing card invalid suit:');
    createCardInvalidSuit();


    console.log('Testing card invalid value:');
    createCardInvalidValue();
}



// Trick Test Functions

const addCardsToTrick = (deck) => {
    const trick = new Trick();
    
    for (let i = 0; i < 6; i++) {
        // get random card in deck
        let x = Math.floor(Math.random() * deck.length);
        
        // add card to trick
        console.log(`Adding card: ${deck[x].suit} ${deck[x].value}`);
        trick.playCard(deck[x]);
        
        // print out to verify
        console.log(trick.toString());
    }
}

const addCardToFullTrick = (deck) => {
    const trick = new Trick();
    
    for (let i = 0; i < 6; i++) {
        // get random card in deck
        let x = Math.floor(Math.random() * deck.length);
        
        // add card to trick
        trick.playCard(deck[x]);
        
    }
    try {
        // get random card in deck
        let x = Math.floor(Math.random() * deck.length);
        
        // add card to trick
        trick.playCard(deck[x]);
    } catch (e) {
        console.log(e);
    }
}

const removeCardFromTrick = (deck) => {
    const trick = new Trick();
    let numCards = Math.floor(Math.random() * 5)+1;
    for (let i = 0; i < numCards; i++) {
        let x = Math.floor(Math.random() * deck.length);
        
        // add card to trick
        trick.playCard(deck[x]);
    }
    console.log(`Initial Trick: ${trick.toString()}`);
    trick.removeCard();
    console.log(`Final Trick: ${trick.toString()}`);
}

const removeCardFromEmptyTrick = (deck) => {
    const trick = new Trick();
    
    // check removing card when trick is empty
    try {
        trick.removeCard();
    } catch (e) {
        console.log(e);
    }
}

const runAllTrickTests = () => {
    console.log("Creating cards in deck:\n");
    const deck = createDeck();

    console.log('\n\n\nAdding 6 cards to new trick object:\n');
    addCardsToTrick(deck);

    console.log('\n\n\nAdding 7th card to full trick object:\n');
    addCardToFullTrick(deck);

    console.log('\n\n\nRemoving card from trick object:\n');
    removeCardFromTrick(deck);

    console.log('\n\n\nRemoving card from empty trick object:\n');
    removeCardFromEmptyTrick(deck);
}






// Bid Test Functions









// Calling test cases here
console.log("Testing...");


// Creating Cards

runAllCardTests();




// Testing trick functions

runAllTrickTests();



