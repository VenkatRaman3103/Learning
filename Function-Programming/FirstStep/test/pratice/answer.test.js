import { addElementToArray, flattenArray, removeDuplicates } from '../../src/practice/answers';

it('should add the element to parent arr', () => {
    const parent_arr = [1, 2];
    const child_arr = [3, 4, 5, 6];

    expect(addElementToArray(parent_arr, child_arr)).toEqual([1, 2, 3, 4, 5, 6]);
});

it('should flattern the array', () => {
    const nestedArray = [[1, 2], [3, 4], [5]];

    expect(flattenArray([], addElementToArray, nestedArray)).toEqual([1, 2, 3, 4, 5]);
});

it('should return array with unique elements', () => {
    const containsDuplicate = ['1', '2', '2', '3', '4', '4', '5'];

    expect(removeDuplicates({}, containsDuplicate)).toEqual(['1', '2', '3', '4', '5']);
});
