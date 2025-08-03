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

// const strings = ['ab', 'cd', 'ef', 'gh'];
// console.log(capitalizeAll(changeCase, strings));

const findLongest = (fn, arr) => {
    if (arr.length == 0) {
        return [];
    }

    const item = head(arr);

    if (fn(item)) {
        return concat([item], findLongest(fn, tail(arr)));
    } else {
        return findLongest(fn, tail(arr));
    }
};

const isLonger = str => str.length > 4;
const strings = ['abcdw', 'cd', 'ef', 'gh'];

// console.log(findLongest(isLonger, strings));

const countWords = (acc, fn, arr) => {
    if (arr.length == 0) {
        return acc;
    }

    const item = head(arr);
    const proccessed = fn(acc, item);

    return countWords(proccessed, fn, tail(arr));
};

const word_hash = (obj, key) => {
    if (obj[key] == undefined) {
        obj[key] = 1;
    } else {
        obj[key] += 1;
    }
    return obj;
};

const words = ['apple', 'banana', 'apple', 'berry', 'banana', 'apple'];

// const result = countWords({}, word_hash, words);
// console.log(result);

export const flattenArray = (acc, fn, arr) => {
    if (arr.length == 0) {
        return acc;
    }

    const item = head(arr);

    return flattenArray(fn(acc, item), fn, tail(arr));
};

export const addElementToArray = (parent_arr, child_arr) => {
    for (let el of child_arr) {
        parent_arr.push(el);
    }
    return parent_arr;
};
