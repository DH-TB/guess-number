const CompareNumber = require('../src/Compare-Number');
const AnswerGenerator = require('../src/Answer-Generator');

describe('guess number', ()=> {
    const answers ='1234';

    it('digit right and position right', ()=> {
        const inputs = '1234';
        const expectText = '4A0B';
        expect(CompareNumber.guess(answers, inputs)).toEqual(expectText);
    });
    it('digit right and position error', ()=> {
        const inputs = '4321';
        const expectText = '0A4B';
        expect(CompareNumber.guess(answers, inputs)).toEqual(expectText);
    });
    it('some digit right and position right', ()=> {
        const inputs = '1243';
        const expectText = '2A2B';
        expect(CompareNumber.guess(answers, inputs)).toEqual(expectText);
    });
    it('digit error', ()=> {
        const inputs = '5678';
        const expectText = '0A0B';
        expect(CompareNumber.guess(answers, inputs)).toEqual(expectText);
    });
});

describe('generator answer',()=>{
    it('can get 4 digit',()=>{
        const length = 4;
        expect((new AnswerGenerator()).length).toEqual(length);
    })
});