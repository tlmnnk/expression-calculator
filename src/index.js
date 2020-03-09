function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {

    function calculator(first, mathOperator, second) {
        const calcObj = {
            '+': (first, second) => first + second,
            '-': (first, second) => first - second,
            '*': (first, second) => first * second,
            '/': (first, second) => first / second
        };
    
        return calcObj[mathOperator](first, second);
    }

        //кладем строку в массив
        const strArr = expr.trim().split(' ');

        let leftBracketCounter = 0,
            rightBracketCounter = 0;
        //проверяем если в массиве есть непарные скобки 
        strArr.forEach(element => {
            if (element === '(') leftBracketCounter++;
            if (element === ')') rightBracketCounter++;
            });
            // сравниеваем количество скобок
        if (leftBracketCounter !== rightBracketCounter) throw new Error('ExpressionError: Brackets must be paired');
        if (expr.includes('/ 0')) { throw new TypeError('TypeError: Division by zero.'); }
        
        for(let i = 0; i < strArr.length; i++) {
            if(strArr[i] === '*' || strArr[i] === '/') {
                let result = calculator(+strArr[i - 1], strArr[i], +strArr[i+ 1]);
                strArr.splice(i - 1, 3, result);
                i = 0;
            }
        }

        for(let i = 0; i < strArr.length; i++) {
            if(strArr[i] === '+' || strArr[i] === '-') {
                let result = calculator(+strArr[i - 1], strArr[i], +strArr[i+ 1]);
                strArr.splice(i - 1, 3, result);
                i = 0;
            }
        }

    return strArr[0];

}
    

module.exports = {
    expressionCalculator
}