// array
function Reduce(array, reducer, buildingUp) {

    for (let i = 0; i < array.length; i++) {
        reducer(buildingUp, array[i])
    }

    return buildingUp
}

const reducer = (buildingUp, element) => buildingUp.push(multipleByTwo(element))

const multipleByTwo = (element) => element * 2;

const arr = Reduce([1, 2, 3, 4, 5], reducer, [])

console.log(arr)

// value
function ReduceValue(array, reducer, buildingUp) { // building is an accumulator

    for (let i = 0; i < array.length; i++) {
        buildingUp = reducer(buildingUp, array[i])
    }

    return buildingUp;
}

// reducer
const add = (a, b) => a + b;

const value = ReduceValue([1, 2, 3, 4, 5], add, 0)
console.log(value)