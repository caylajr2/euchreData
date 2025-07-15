import { Hand } from '../scripts/classes.mjs';

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

export default Game;