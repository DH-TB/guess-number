const CompareNumber = require('./Compare-Number');
const AnswerGenerator = require('./Answer-Generator');

class Guess{
    static guess(inputs){
        const answer = AnswerGenerator.generate();
        return CompareNumber.compare(answer,inputs);
    }
}

module.exports = Guess;