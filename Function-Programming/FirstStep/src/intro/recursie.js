function sum(numbers) {
    // base
    if (numbers.length == 1) {
        return numbers[0];
    } else {
        return numbers[0] + sum(numbers.splice(1));
    }
}

// const numbers = [0, 1, 2, 3, 4, 5];
// console.log(sum(numbers));

function findFactorial(number) {
    if (number == 1) {
        return number;
    } else {
        return number * findFactorial(number - 1);
    }
}

// const factorial = findFactorial(5);
// console.log(factorial);

function fibonnaci(arr, a, b) {
    // base
    if (arr.length == 20) {
        return arr;
    } else {
        let c = a + b;
        arr.push(c);
        return fibonnaci(arr, b, c);
    }
}

console.log(fibonnaci([0, 1], 0, 1));
