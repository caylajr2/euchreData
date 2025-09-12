const trumps = ['spades', 'hearts', 'diamonds', 'clubs', 'high', 'low'];

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

export default Bid;