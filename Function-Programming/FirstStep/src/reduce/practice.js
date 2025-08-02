function reduceFun(predicateFunc, initial, arr) {
    if (arr.length == 0) {
        return initial;
    }

    const a = initial;
    const b = head(arr);

    const accumulated = predicateFunc(a, b);

    return reduceFun(predicateFunc, accumulated, tail(arr));
}

function head(arr) {
    return arr[0];
}

function tail(arr) {
    return arr.slice(1);
}

function concat(array1, array2) {
    return array1.concat(array2);
}

function predicateFunc(a, b) {
    return a + b;
}

const arr = [1, 2, 3, 4, 5];
console.log(reduceFun(predicateFunc, 0, arr));
