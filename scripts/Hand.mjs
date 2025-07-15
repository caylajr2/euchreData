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

export default Hand;