function parent() {
    let state = 0;

    const setState = () => {
        return ++state;
    };

    return setState;
}

const foo = parent();
console.log(foo());
console.log(foo());
console.log(foo());
