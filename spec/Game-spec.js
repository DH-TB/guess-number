const Guess = require('../src/Guess');
const AnswerGenerator = require('../src/Answer-Generator');
const Game = require('../src/Game');

describe('Game', ()=> {
    it('can play', ()=> {

        spyOn(AnswerGenerator, 'generate').and.returnValue('1234');

        spyOn(console, 'log');

        Game.play();

        expect(console.log).toEqual('Congratulations!');
    })
});