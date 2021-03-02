let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9];

function findRepeatedNumber(a) {
    let number;
    for (let i in a) {
        if (a[i - 1] === a[i]) {
            number = a[i];
        }
    }
    return number;
}

let result = findRepeatedNumber(a)
console.log(result)