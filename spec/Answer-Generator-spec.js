const AnswerGenerator = require('../src/Answer-Generator');

describe('generator answer',()=>{
    it('should generate answer',()=>{
        const isUnique=(item,index,array)=>{
            return array.lastIndexOf(item) === index;
        };
        const answer = AnswerGenerator.generate();
        expect(answer.length).toEqual(4);
        expect(answer.every(isUnique)).toBeTruthy();
        expect(AnswerGenerator.generate()).not.toEqual(AnswerGenerator.generate());
    })
});