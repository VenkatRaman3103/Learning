const compose = str => fn1 => fn2 => fn3 => fn3(fn2(fn1(str)));

const clean = str => str.trim();
const format = str => str.toUpperCase();
const wrapInDiv = str => `<div>${str}</div>`;

// const result = compose(' hello ')(clean)(format)(wrapInDiv);
// console.log(result);

const pipe = acc => {
    return (...fns) => fns.reduce((res, fn) => fn(res), acc);
};

const result = pipe(' hello ')(clean, format, wrapInDiv);
console.log(result);
