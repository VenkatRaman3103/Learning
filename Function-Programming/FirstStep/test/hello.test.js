import { add, asyncFunction, nameWithId, returnObject, stringObj } from '../src/practise';

it('should add the values', () => {
    expect(add(1, 1)).toBe(2);
});

it('should throw an error', () => {
    expect(() => add(1, 'some')).toThrow();
});

it('should return and object', () => {
    expect(returnObject()).toEqual({ a: 'foo' });
});

it('should return and eactly ideal object', () => {
    let obj = { a: 'foo', b: undefined };
    expect(returnObject()).toStrictEqual(obj);
});

it('should have name', () => {
    expect(nameWithId).toContain('raman');
});

it('should have name in obj', () => {
    expect(stringObj).toEqual({ name: expect.stringContaining('raman') });
});

it('try async', async () => {
    const some = await asyncFunction();
    expect(asyncFunction()).resolves.toBe(12);
});
