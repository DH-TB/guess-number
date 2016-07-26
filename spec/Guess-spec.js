const Guess = require('../src/Guess');
const AnswerGenerator = require('../src/Answer-Generator');

describe('Guess', ()=> {
    it('should guess digit',()=>{

        spyOn(AnswerGenerator,'generate').and.returnValue('1234');

        const input = '1234';

        expect(Guess.guess(input)).toEqual('4A0B');
        
    })
});