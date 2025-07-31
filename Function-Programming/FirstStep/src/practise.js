export const add = (a, b) => {
    if (typeof b != 'number') {
        throw new TypeError('some');
    }
    return a + b;
};

export const returnObject = () => {
    return {
        a: 'foo',
        b: undefined,
    };
};

export const nameWithId = 'raman-3103';

export const stringObj = {
    name: 'raman-3103',
};

export const asyncFunction = async () => {
    return 12;
};
