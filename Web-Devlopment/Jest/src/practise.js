export const add = (a, b) => {
    if (typeof b != 'number') {
        throw new TypeError('some');
    }
    return a + b;
};
