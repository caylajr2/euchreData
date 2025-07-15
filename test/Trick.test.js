// import assert
import assert from 'assert';
import { Card, Trick, createDeck } from '../scripts/classes.mjs';

// Naive approach
describe('trick', () => {
    let deck;
    let trick;
    let cards1;
    let cards5;
    let cards6;
    before(() => {
        deck = [new Card('hearts', '10'), new Card('spades', '9'), new Card('clubs', 'J'), new Card('diamonds', 'Q'), new Card('clubs', 'A'), new Card('hearts', 'A'), new Card('diamonds', 'Q')];
        cards1 = [new Card('hearts', '10')];
        cards5 = [new Card('hearts', '10'), new Card('spades', '9'), new Card('clubs', 'J'), new Card('diamonds', 'Q'), new Card('clubs', 'A')];
        cards6 = [new Card('hearts', '10'), new Card('spades', '9'), new Card('clubs', 'J'), new Card('diamonds', 'Q'), new Card('clubs', 'A'), new Card('hearts', 'A')];
    });
    describe('valid trick', () => {
        before(() => {
            trick = new Trick();
        });
        it('adds card to empty trick', () => {
            const string = '{\n\thearts 10\n}';
            trick.playCard(deck[0]);
            const res_str = trick.toString();
            assert.deepEqual(cards6[0], trick.cards[0]);
            assert.deepEqual(cards1, trick.cards);
            assert.equal(string, res_str);
        });
        it('adds cards 2-5 to trick', () => {
            const string = '{\n\thearts 10\n\tspades 9\n\tclubs J\n\tdiamonds Q\n\tclubs A\n}';
            trick.playCard(deck[1]);
            trick.playCard(deck[2]);
            trick.playCard(deck[3]);
            trick.playCard(deck[4]);
            const res_str = trick.toString();
            assert.deepEqual(cards6[1], trick.cards[1]);
            assert.deepEqual(cards6[2], trick.cards[2]);
            assert.deepEqual(cards6[3], trick.cards[3]);
            assert.deepEqual(cards6[4], trick.cards[4]);
            assert.deepEqual(cards5, trick.cards);
            assert.deepEqual(string, res_str);
        });
        it('adds card to almost full trick', () => {
            const string = '{\n\thearts 10\n\tspades 9\n\tclubs J\n\tdiamonds Q\n\tclubs A\n\thearts A\n}';
            trick.playCard(deck[5]);
            const res_str = trick.toString();
            assert.deepEqual(cards6[5], trick.cards[5]);
            assert.deepEqual(cards6, trick.cards);
            assert.equal(string, res_str);
        });
        it('removes card from almost full trick', () => {
            const string = '{\n\thearts 10\n\tspades 9\n\tclubs J\n\tdiamonds Q\n\tclubs A\n}';
            trick.removeCard();
            const res_str = trick.toString();
            assert.deepEqual(cards5, trick.cards);
            assert.equal(string, res_str);
        });
    });
    describe('invalid trick operations', () => {
        beforeEach(() => {
            trick = new Trick();
        });
        it('remove card from empty trick', () => {
            assert.throws(() => trick.removeCard());
        });
        it('add card to full trick', () => {
            for (let i = 0; i < 6; i++) {
                trick.playCard(deck[i]);
            }
            assert.throws(() => trick.playCard(deck[6]));
        });
    });
});