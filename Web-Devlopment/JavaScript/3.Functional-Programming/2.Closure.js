// 1. Closure intro

// function that returns another function
function closureFunction() {

    // inner function
    function innerFunction() {
        return 'hello world'
    }

    // return function 
    return innerFunction;
}
// assigning the function value of closureFunction to the identifier called getFunction
const getFunction = closureFunction(); // after creation of value the getFunction has 0 relationship to the closureFunction

const closure = getFunction()
console.log(result);

// accessing a data of the function from global scope
function temporaryScope(){
    let counter = 0;

    function incrementCounter(){
        counter++
    }

    incrementCounter()
}

temporaryScope() // every time it creates a new execution context and deletes when function end, so the  data will not be permanently attached to the function
temporaryScope()

function permanentlyAttached(){
    let counter=0 

    const incrementCounter = ()=> {
        counter++
    }

    return incrementCounter
}

const storeFunction = permanentlyAttached()


// 2. Attaching a data permanently to the function
function outer(){
    // the counter is the data (within the scope of out function), which is attached to the inner function
    // private data
    let counter = 0; 

    let willNotStore = 12;

    function inner(){
        counter ++
        return counter
    }

    return inner
}

const incrementCounter = outer()
incrementCounter() // increment the counter to 1
const result = incrementCounter() // increment the counter from 1 to 2

console.log(result)