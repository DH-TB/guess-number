class CompareNumber {
    static compare(answer, input) {
        const numbers = input.split('');
        const answers = answer.map(a=>a.toString());
        console.log(answers);
        const uniqueArray = numbers.filter(function(item, pos) {
            return numbers.indexOf(item) == pos;
        });
        if (uniqueArray.length<4) {
            console.log('Cannot input duplicate numbers!');
            return '';
        }

        const B = ()=> {
            return numbers.map((number, index)=>
                answers[index] != number && answers.some(n=>n == number) ? 1 : 0)
                .reduce((a, b)=>a + b);
        };
        const A = ()=> {
            return numbers.map((number, index)=>answers[index] === number ? 1 : 0)
                .reduce((a, b)=>a + b);
        };
        return `${A()}A${B()}B`;
    }
}

module.exports = CompareNumber;