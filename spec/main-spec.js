const CompareNumber = require('../src/app');

describe('guess number',()=>{
        it('digit right and position right',()=>{
            const inputs = '1234';
            const answer = '4A0B';
            expect(CompareNumber.guess(answer,inputs)).toEqual(answer);
        });
});