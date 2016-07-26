class CompareNumber {
    static compare(answer, input) {
        const numbers = input.split('');
        const answers = answer.split('');

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