function mapFun(predicateFunc, arr) {
    if (arr.length == 0) {
        return [];
    }

    let item = head(arr);
    let mappedItem = predicateFunc(item);

    return [mappedItem].concat(mapFun(predicateFunc, tail(arr)));
}

function head(arr) {
    return arr[0];
}

function tail(arr) {
    return arr.splice(1);
}

function predicateFunc(item) {
    return item * 2;
}

const arr = [1, 2, 3, 4, 5];
console.log(mapFun(predicateFunc, arr));
