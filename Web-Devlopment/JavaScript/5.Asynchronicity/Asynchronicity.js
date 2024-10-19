// challenge: 2
// function delayGreet(){
//     setTimeout(()=>{
//         console.log("Hello World")
//     }, 3000)
// }

// delayGreet()

// challenge: 3
// function helloGoodBye(){
//     setTimeout(()=>{
//         console.log('Good Bye')
//     }, 2000)

//     console.log("Hello")
// }

// helloGoodBye()

// challenge: 4
// function brokenRecord(){
//     console.log('h1')
// }

// setInterval(brokenRecord, 1000)

// challenge: 5
// function limitRepeat(){
//     let limitTo5 = 0;

//     let intervalID;

//     intervalID = setInterval(()=>{
//         console.log("hi")

//         limitTo5++

//         if(limitTo5 >= 5){
//             clearInterval(2)
//         }

//     }, 1000)

//     console.log(intervalID)
// }

// limitRepeat()
// function  everyXsecsForYsecs(func, interval, duration){

//     duration= duration / 1000;

//     let intervalID;

//     intervalID = setInterval(()=>{
//         func()

//         duration--

//         if(duration <= 0){
//             clearInterval(intervalID)
//         }
//     }, interval)
// }

// function sayHi(){
//     console.log('hi')
// }

// everyXsecsForYsecs(sayHi, 1000, 5000)

// challenge: 7
function delayCounter(target, wait) {

    let number = 0

    function printNumber() {

        let intervalID;

        intervalID = setInterval(() => {
            number++

            console.log(number)

            if(number >= target){
                clearInterval(intervalID)
            }
        }, wait)
    }

    return printNumber
}

const challenge6 = delayCounter(5, 1000)

challenge6()