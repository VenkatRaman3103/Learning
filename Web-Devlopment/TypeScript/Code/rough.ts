// let a = 12;
//
// const b = [ 24 ];
// b.push(3)
//
// let c = [12] as [12]

const changable = [1];
changable.push(2); // does not throws any errors

let unchangable = [1] as [1]; // [1] is type in here
// unchangable.push(2); // throws an error

let unchangable1 = [3] as const;
