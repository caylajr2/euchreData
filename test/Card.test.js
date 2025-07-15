// import assert
import assert from 'assert';
import { Card } from '../scripts/classes.mjs';

// Naive approach
describe('card', () => {
  describe('valid card', () => {
    it('creates new card with suit spades and value 9', () => {
      const card = new Card('spades', '9');
      const value = '9';
      const suit = 'spades';
      assert.ok(card instanceof Card);
      assert.equal(card.suit, suit);
      assert.equal(card.value, value);
    });
    it('creates new card with suit hearts and value 10', () => {
      const card = new Card('hearts', '10');
      const value = '10';
      const suit = 'hearts';
      assert.ok(card instanceof Card);
      assert.equal(card.suit, suit);
      assert.equal(card.value, value);
    });
    it('creates new card with suit diamonds and value J', () => {
      const card = new Card('diamonds', 'J');
      const value = 'J';
      const suit = 'diamonds';
      assert.ok(card instanceof Card);
      assert.equal(card.suit, suit);
      assert.equal(card.value, value);
    });
    it('creates new card with suit clubs and value Q', () => {
      const card = new Card('clubs', 'Q');
      const value = 'Q';
      const suit = 'clubs';
      assert.ok(card instanceof Card);
      assert.equal(card.suit, suit);
      assert.equal(card.value, value);
    });
    it('creates new card with suit spades and value K', () => {
      const card = new Card('spades', 'K');
      const value = 'K';
      const suit = 'spades';
      assert.ok(card instanceof Card);
      assert.equal(card.suit, suit);
      assert.equal(card.value, value);
    });
    it('creates new card with suit hearts and value A', () => {
      const card = new Card('hearts', 'A');
      const value = 'A';
      const suit = 'hearts';
      assert.ok(card instanceof Card);
      assert.equal(card.suit, suit);
      assert.equal(card.value, value);
    });
  });
  describe('invalid suit card', () => {
    it('has invalid suit', () => {
      assert.throws(() => new Card('heart', 'A'));
      assert.throws(() => new Card('', 'K'));
      assert.throws(() => new Card('sp', 'Q'));
      assert.throws(() => new Card('diam', 'J'));
      assert.throws(() => new Card('spade', '10'));
      assert.throws(() => new Card('c', '9'));
    });
    it('has invalid value', () => {
      assert.throws(() => new Card('hearts', 'B'));
      assert.throws(() => new Card('diamonds', '90'));
      assert.throws(() => new Card('clubs', 10));
      assert.throws(() => new Card('spades', 'jack'));
    });
    it('has missing arguments', () => {
      assert.throws(() => new Card('hearts'));
      assert.throws(() => new Card('90'));
      assert.throws(() => new Card());
    })
  });
});