
function solution(N) {
    if (N === 0) {
        return 50;
    }
    let numberString = N.toString().split('');
    if (N > 0) {

        for (let i = 0; i < numberString.length; i++) {
            const element = parseInt(numberString[i]);
            console.log(element)
            if (element < 5) {
                numberString.splice(i, 0, '5')
                return parseInt(numberString.join(''));
            }

        }
        numberString.splice(numberString.length, 0, '5');
        return parseInt(numberString.join(''));
    }
    else {
        for (let i = 0; i < numberString.length; i++) {
            const element = parseInt(numberString[i]);
            console.log(element)
            if (element > 5) {
                numberString.splice(i, 0, '5')
                return parseInt(numberString.join(''));
            }

        }
        numberString.splice(0, 0, '5');
        return parseInt(numberString.join(''));
    }
}



let regex = `^\d{3}-\d{3}-\d{3}$`