// functions with minor changes in its operation

// Multiple by two
function multipleByTwo(listOfNumbers) {
    let resultArray = []

    for (let i = 0; i <= listOfNumbers.length - 1; i++) {
        resultArray.push(listOfNumbers[i] * 2)
    }
    return resultArray
}

// add two
function addTwo(listOfNumbers){
    let resultArray = []

    for(let i = 0; i <= listOfNumbers.length - 1; i ++){
        resultArray.push(listOfNumbers[i] + 2)
    }
    
    return resultArray
}

// subtract two
function subtractTwo(listOfNumbers){
    let resultArray = []

    for(let i = 0; i <= listOfNumbers.length - 1; i ++){
        resultArray.push(listOfNumbers[i] - 2)
    }
    
    return resultArray
}

const inputArr = [1, 2, 3, 4, 5]
console.log(multipleByTwo(inputArr))
console.log(addTwo(inputArr))
console.log(subtractTwo(inputArr))

// The above is not violating the DRY principle, because every time it does different operations,but there is a pattern that is repeating.
// In order to make super clean code and profoundly make the code Dry, the code has to leverage the higher order function

function higherOrderFunction(listOfNumbers, operation){

    let resultArray = []

    for (let i of listOfNumbers){
        resultArray.push(operation(i))
    }

    return resultArray
}

function operationAdd(number){return number + 2}
function operationMultiple(number){return number * 2}
console.log(higherOrderFunction(inputArr, operationAdd))
console.log(higherOrderFunction(inputArr, operationMultiple))