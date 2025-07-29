import { add } from '../src/practise';

it('should add the values', () => {
    expect(add(1, 1)).toBe(2);
});

it('should throw an error', () => {
    expect(() => add(1, 'some')).toThrow();
});
