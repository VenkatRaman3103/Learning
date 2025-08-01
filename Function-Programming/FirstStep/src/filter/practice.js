function filterFunc(predicateFunc, arr) {
    if (arr.length == 0) {
        return [];
    }

    const item = head(arr);

    if (predicateFunc(item)) {
        const firstItem = [item];
        return concat(firstItem, filterFunc(predicateFunc, tail(arr)));
    } else {
        return filterFunc(predicateFunc, tail(arr));
    }
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

function predicateFunc(item) {
    return item % 2 == 0;
}

const arr = [1, 2, 3, 4, 5];
console.log(filterFunc(predicateFunc, arr));
