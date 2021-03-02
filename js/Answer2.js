let a = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];
// let a = [1, 0, 0, 0, 0, 1, 0, 0, 0, 1]

function maxone(a) {
    let count = 0;
    let max_count = 0
    for (let i in a) {
        if (a[i] === 1) {
            count++;
        } else {
            max_count = count;
            count = 0
        }
    }
    if (count > max_count) {
        return count;
    } else {
        return max_count;
    }
}

let result = maxone(a)
console.log(result)
