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

export { default as Card } from './Card.mjs';
export { default as Bid } from './Bid.mjs';
export { default as Trick } from './Trick.mjs';
export { default as Hand } from './Hand.mjs';
export { default as Game } from './Game.mjs';
export { createDeck };
    
    

    
// =============================== Testing Functions =========================================


// const runAllCardTests = () => {
//     console.log("Creating one card of each value and suit");
//     createCards();


//     console.log('Testing card invalid suit:');
//     createCardInvalidSuit();


//     console.log('Testing card invalid value:');
//     createCardInvalidValue();
// }



// // Trick Test Functions

// const addCardsToTrick = (deck) => {
//     const trick = new Trick();
    
//     for (let i = 0; i < 6; i++) {
//         // get random card in deck
//         let x = Math.floor(Math.random() * deck.length);
        
//         // add card to trick
//         console.log(`Adding card: ${deck[x].suit} ${deck[x].value}`);
//         trick.playCard(deck[x]);
        
//         // print out to verify
//         console.log(trick.toString());
//     }
// }

// const addCardToFullTrick = (deck) => {
//     const trick = new Trick();
    
//     for (let i = 0; i < 6; i++) {
//         // get random card in deck
//         let x = Math.floor(Math.random() * deck.length);
        
//         // add card to trick
//         trick.playCard(deck[x]);
        
//     }
//     try {
//         // get random card in deck
//         let x = Math.floor(Math.random() * deck.length);
        
//         // add card to trick
//         trick.playCard(deck[x]);
//     } catch (e) {
//         console.log(e);
//     }
// }

// const removeCardFromTrick = (deck) => {
//     const trick = new Trick();
//     let numCards = Math.floor(Math.random() * 5)+1;
//     for (let i = 0; i < numCards; i++) {
//         let x = Math.floor(Math.random() * deck.length);
        
//         // add card to trick
//         trick.playCard(deck[x]);
//     }
//     console.log(`Initial Trick: ${trick.toString()}`);
//     trick.removeCard();
//     console.log(`Final Trick: ${trick.toString()}`);
// }

// const removeCardFromEmptyTrick = (deck) => {
//     const trick = new Trick();
    
//     // check removing card when trick is empty
//     try {
//         trick.removeCard();
//     } catch (e) {
//         console.log(e);
//     }
// }

// const runAllTrickTests = () => {
//     console.log("Creating cards in deck:\n");
//     const deck = createDeck();

//     console.log('\n\n\nAdding 6 cards to new trick object:\n');
//     addCardsToTrick(deck);

//     console.log('\n\n\nAdding 7th card to full trick object:\n');
//     addCardToFullTrick(deck);

//     console.log('\n\n\nRemoving card from trick object:\n');
//     removeCardFromTrick(deck);

//     console.log('\n\n\nRemoving card from empty trick object:\n');
//     removeCardFromEmptyTrick(deck);
// }
