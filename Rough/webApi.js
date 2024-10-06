function printHello(){
    console.log("third")
}

function printFirst(){
    console.log('first')
}

setTimeout(printHello, 0)

printFirst()

console.log('second')

