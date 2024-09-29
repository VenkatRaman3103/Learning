// challenge: 1
function addTwo(num) {
    return num + 2;
}

// challenge: 2
function adds(word) {
    return word + 's'
}

// challenge: 3
function map(array, callbackFunction) {

    let temp = [];

    for (let i = 0; i < array.length; i++) {
        temp.push(callbackFunction(array[i]))
    }

    return temp;
}

const multipleByTwo = (num) => num * 2;

const result = map([1, 2, 3, 4], multipleByTwo)
console.log(result)