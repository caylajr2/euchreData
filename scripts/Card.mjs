const suits = ['spades', 'hearts', 'diamonds', 'clubs'];
const values = ['9', '10', 'J', 'Q', 'K', 'A'];

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

export default Card;