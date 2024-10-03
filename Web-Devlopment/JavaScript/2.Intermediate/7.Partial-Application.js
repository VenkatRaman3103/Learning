// filling the arguments partially

const multiple = (a, b) => a * b;

function outer(fn, prefill){
    const inner = (value)=>{
        const result = fn(prefill, value)
        return result
    }
    
    return inner
}

const multipleBy2 = outer(multiple, 2)
const multipleBy3 = outer(multiple, 3)

const result = multipleBy2(5)

console.log(result)