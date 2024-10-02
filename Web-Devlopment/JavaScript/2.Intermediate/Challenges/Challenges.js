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

// challenge: 5
function mapWith(array, callbackFunction) {
    let tempArray = []

    array.forEach((element) => {
        tempArray.push(callbackFunction(element))
    })

    return tempArray
}

const multipleByThree = num => num * 3;

const challenge5 = mapWith([1, 2, 3, 4, 5], multipleByThree)
console.log(challenge5, 'challenge5')

// challenge: 6
const reduce = (array, callbackFunction, initialValue) => {

    for (let i = 0; i < array.length; i++) {
        initialValue = initialValue + callbackFunction(array[i])
    }
    return initialValue
}

const reducer = (num) => num + 2;

const challenge6 = reduce([1, 2, 3, 4, 5], reducer, 0)
console.log('challenge6: ', challenge6)