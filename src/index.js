function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {

    let result = null;

    let bracketResult;
    let arrResult;

    let strBracket;

    function getLastBrackets(arr) {
        //кладем строку в массив
        const strArr = arr.trim().split(' ');
        //последний индекс левой скобки
        let lastLeftIndexBracket = strArr.lastIndexOf('(');
        //обрезаем массив начиная с послед левой скобки
        let arrInBracketsLeft = strArr.slice(lastLeftIndexBracket);
        //обрезаем массив начиная с послед левой скобки
        let nearRightIndexBracket = lastLeftIndexBracket.indexOf(')');
        let arrInBracketsRight = arrInBracketsLeft.slice(nearRightIndexBracket);

        if (arrInBracketsLeft.lastIndexOf('(') === -1) {
            bracketResult = strArr[lastLeftIndexBracket + 1] + strArr[lastLeftIndexBracket + 3];
            //нужно записать результат выражения скобок и подставить его
            //в строку/массив изначальный, потом повторить пока не останется скобок
            // в массиве/строке только числа и мат операторы
            
            strBracket
        } else {
            getLastBrackets(arrInBracketsLeft);
        }
    }
    
    



    strArr.forEach(element => {
        if(element.length > 1) {
            throw new Error('Brackets must be paired!');
        }
    });



    strArr.forEach((item, i, arr) => {
        if(/[+*-/]/.test(item)) {
            switch (item) {
                case '+':
                    result += arr[i - 1] + arr[i -1];
                    break;
                case '-':
                    result += arr[i - 1] - arr[i -1];
                    break;
                case '*':
                    result += arr[i - 1] * arr[i -1];
                    break;
                case '/':
                    result += arr[i - 1] / arr[i -1];
                    break;
                default:
                    break;
            }
        }
    });

    function recursiveBracketCheck(bool, myArr) {
        if (myArr.indexOf('(') === -1) {
            bool = true;
        } else {
            let bracketIndexFirst = strArr.indexOf('(');
            let bracketIndexLast = strArr.lastIndexOf(')');
            let arr  = myArr.slice(bracketIndexFirst + 1, bracketIndexLast - 1);
        }
    }

  
    return result;
    
}

module.exports = {
    expressionCalculator
}