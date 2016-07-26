const table = ['1', '2', '3', '4'];

class CompareNumber {
    constructor(answer, inputs) {
        this.answer = answer;
        this.input = inputs;
    }
    static guess(answer, input) {
        const inputs = input.split('').map(str => table.indexOf(str));
        const A = inputs.filter(i=>i >= 0);
        const B = inputs.filter(i=>i < 0);
        return `${A.length}A${B.length}B`;
    }
}

module.exports = CompareNumber;