class AnswerGenerator {

    static fourDigit() {
        // number.push(Math.floor(Math.random() * 10000));
        const array = [];
        for (let i = 0; i < 4; i++) {
            let randomNumber = Math.floor(Math.random() * 9);
            let found = false;
            const isTrue = array.find(arr=>arr == randomNumber);
            if (isTrue) {
                found = true;
                break;
            }
            if (!found)
                array.push(randomNumber);
        }
        console.log(array);
        return array.length;
    }
}

module.exports = AnswerGenerator;