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

// challenge: 7
const intersection = (arrays) => {

    let repeatedElements = arrays[0]

    for (let i = 1; i < arrays.length; i++) {
        repeatedElements = repeatedElements.filter((element) => arrays[i].includes(element))
    }

    return repeatedElements
}

const challenge7 = intersection([[1, 2, 3, 4], [1, 5, 2, 3, 8], [1, 2, 10, 11]])
console.log('challenge7:', challenge7)

const set = {}

if (set[0]) {
    console.log('hello world')
}

// challenge: 8
function union(arrays) {
    let hashTable = {}

    let nonRepeatingElement = []

    // for (let i = 0; i < arrays.length; i++) {
    //     const array = arrays[i]

    //     for (let j = 0; j < array.length; j++) {
    //         const element = array[j]

    //         if(!nonRepeatingElement.includes(element)){
    //             nonRepeatingElement.push(element)
    //         }
    //     }
    // }

    const result = arrays.reduce((acc, array) => {
        array.forEach((element) => {
            let isExist = false

            for (let i = 0; i < acc.length; i++) {
                if (element == acc[i]) {
                    isExist = true
                }
            }

            if (!isExist) {
                acc.push(element)
            }
        })
        return acc
    }, [])

    return result
}

const challenge8 = union([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]])
console.log('challenge8', challenge8)

// challenge9
function objOfMap(array1, array2, callback) {
    let result = {}

    const n = array1.length

    for (let i = 0; i < n; i++) {

        let upperCased = callback(array1[i])

        if (upperCased == array2[i]) {
            result[array1[i]] = array2[i]
        }
    }

    return result
}

function callback(string) {
    return string.toUpperCase()
}

const challenge9 = objOfMap(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], callback)


console.log(challenge9, 'challenge9')

// challenges: 10
function multipleMap(array, callbacks) {

    let result = {}

    for (let i = 0; i < array.length; i++) {
        const element = array[i]

        result[element] = []

        for (let j = 0; j < callbacks.length; j++) {

            const callback = callbacks[j]

            result[element].push(callback(element))
        }
    }

    return result

}

function changeToUpperCase(string) {
    return string.toUpperCase()
}

function changeToCamelCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

function changeToLowerCase(string) {
    return string.toLowerCase()
}

const challenge10 = multipleMap(['catfood', 'glue', 'beer'], [changeToUpperCase, changeToCamelCase, changeToLowerCase])
console.log(challenge10)

// challenge: 11
function objectFilter(obj, callback) {

    let result = {}

    Object.keys(obj).map((key) => {
        const upperCased = callback(key)

        if (upperCased == obj[key]) {
            result[key] = upperCased
        }
    })

    return result
}

const cities = {
    London: 'LONDON',
    LA: 'Los Angeles',
    Paris: 'PARIS',
};

const challenge11 = objectFilter(cities, (string) => string.toUpperCase())
console.log(challenge11, 'challenge11')