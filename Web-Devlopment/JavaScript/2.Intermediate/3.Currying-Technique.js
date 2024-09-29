// normal way of doing

// declaring a function which will accept all the parameters and process all at once and returns a value
function sumAllTheParameter(num1, num2, num3) {

    return num1 + num2 + num3;
}

const normalWay = sumAllTheParameter(10, 12, 14)
console.log(normalWay)


function currying(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3
        }
    }
}

function curryingWithFunctionality(num1) {
    num1 += 2

    return function (num2) {
        num2 *= 2

        return function (num3){
            num3 -= 5

            return num1 + num2 + num3
        }
    }

}

const haskell = currying(12)(12)(12)
const result = curryingWithFunctionality(12)(12)(12)

console.log(haskell)
console.log(result)