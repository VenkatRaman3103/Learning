const arr = [1, 2, 3, 4, 5];

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

const head = arr => {
    return arr[0];
};

const tail = arr => {
    return arr.slice(1);
};

const concat = (arr_1, arr_2) => {
    return [...arr_1, ...arr_2];
};

console.log(doubleTheValues(mulByTwo, arr));
