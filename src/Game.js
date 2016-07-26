const Guess = require('./Guess');
const scanf = require('scanf');
const AnswerGenerate = require('./Answer-Generator');
const CompareNumber = require('./Compare-Number');

class Game {
    static play() {

        console.log(`Welcome!`);
        const answer = AnswerGenerate.generate();
        for (let i = 6; i > 0; i--) {
            console.log(`
Please input your number(${i}): `);

            const input = scanf('%s');
            const result = CompareNumber.compare(answer,input);
            if (result === '4A0B') {
                console.log('Congratulations!');
                break;
            }
            else {
                console.log(result);
            }
            if(i == 1)console.log(`Game Over
${answer}`);
        }
    }
}

module.exports = Game;