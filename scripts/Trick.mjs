import { Card } from '../scripts/classes.mjs';

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
            str += `\t${card.suit} ${card.value}\n`;
        }
        str += '}';
        return str;
    }
}

export default Trick;