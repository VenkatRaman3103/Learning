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

const challenge3 = map([1, 2, 3, 4], multipleByTwo)
console.log(challenge3)

// challenge: 4
function forEach(array, callbackFunction) {
    for (let i = 0; i < array.length; i++) {
        updateString(array[i])
    }
}

let string = ''

const updateString = (char) => string += char

forEach(['a', 'b', 'c', 'd'], updateString)

console.log(string)