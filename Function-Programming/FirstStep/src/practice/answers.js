const arr = [1, 2, 3, 4, 5];

/// utils
const head = arr => {
    return arr[0];
};

const tail = arr => {
    return arr.slice(1);
};

const concat = (arr_1, arr_2) => {
    return [...arr_1, ...arr_2];
};

///

const doubleTheValues = (fn, arr) => {
    if (arr.length == 0) {
        return [];
    }

    const item = head(arr);
    const proccessed = fn(item);

    return concat([proccessed], doubleTheValues(fn, tail(arr)));
};

const mulByTwo = value => {
    return value * 2;
};

// console.log(doubleTheValues(mulByTwo, arr));

const filterEvens = (fn, arr) => {
    if (arr.length == 0) {
        return [];
    }

    const item = head(arr);

    if (fn(item)) {
        return concat([item], filterEvens(fn, tail(arr)));
    } else {
        return filterEvens(fn, tail(arr));
    }
};

const isEven = value => {
    return value % 2 == 0;
};

// console.log(filterEvens(isEven, arr));

const sumAll = (fn, accumalator, arr) => {
    if (arr.length == 0) {
        return accumalator;
    }

    const item = head(arr);
    const proccessed = fn(accumalator, item);

    return sumAll(fn, proccessed, tail(arr));
};

const sum = (a, b) => a + b;

// console.log(sumAll(sum, 0, arr));

const capitalizeAll = (fn, arr) => {
    if (arr.length == 0) {
        return [];
    }

    const item = head(arr);
    const proccessed = fn(item);

    return concat([proccessed], capitalizeAll(fn, tail(arr)));
};

const changeCase = str => str.toUpperCase();

const strings = ['ab', 'cd', 'ef', 'gh'];
console.log(capitalizeAll(changeCase, strings));
