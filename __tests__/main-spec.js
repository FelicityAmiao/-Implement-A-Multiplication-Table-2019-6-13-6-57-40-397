const main = require('../main.js');

const isStartLessThanEnd = main.isStartLessThanEnd;

it('should return true given 2, 3 when call isStartLessThanEnd', () => {
    expect(isStartLessThanEnd(2, 3)).toBe(true);
});

it('should return false given 4, 3 when call isStartLessThanEnd', () => {
    expect(isStartLessThanEnd(4, 3)).toBe(false);
});

it('should return true given 3, 3 when call isStartLessThanEnd', () => {
    expect(isStartLessThanEnd(3, 3)).toBe(true);
});

const isOutOfBounds = main.isOutOfBounds;

it ('should return true given 1, 1002 when call isOutOfBounds', () => {
    expect(isOutOfBounds(1, 1002)).toBe(true);
});

it ('should return true given 1001, 1 when call isOutOfBounds', () => {
    expect(isOutOfBounds(1001, 1)).toBe(true);
});

it ('should return true given -1, 999 when call isOutOfBounds', () => {
    expect(isOutOfBounds(-1, 999)).toBe(true);
});

it ('should return true given 1, -1 when call isOutOfBounds', () => {
    expect(isOutOfBounds(1, -1)).toBe(true);
});

it ('should return true given -1, -1 when call isOutOfBounds', () => {
    expect(isOutOfBounds(-1, -1)).toBe(true);
});

it ('should return true given 2, 3 when call isOutOfBounds', () => {
    expect(isOutOfBounds(2, 3)).toBe(false);
});

const createMultiplicationTable = main.createMultiplicationTable;

it ('should return null given 4, 1, false, false when call createMultiplicationTable', () => {
    expect(createMultiplicationTable(4, 1, false, false)).toBe(null);
});

it ('should return null given 1, 1005 true, true when call createMultiplicationTable', () => {
    expect(createMultiplicationTable(1, 1005, true, true)).toBe("Out Of Range");
});

it ('should return "2x2=4\n2x3=6 3x3=9\n2x4=8 3x4=12 4x4=16\n" given 2, 4, true, false when call createMultiplicationTable', () => {
    expect(createMultiplicationTable(2, 4, true, false)).toBe("2x2=4\n2x3=6 3x3=9\n2x4=8 3x4=12 4x4=16\n");
});

const createMultiplyTable = main.createMultiplyTable;

it ('should return null given 4, 1 when call createMultiplyTable', () => {
    expect(createMultiplyTable(4, 1)).toBe(null);
});

it ('should return "Out Of Range" given 1, 1001 when call createMultiplyTable', () => {
    expect(createMultiplyTable(1, 1001)).toBe("Out Of Range");
});

it ('should return "3x3=9\n3x4=12 4x4=16\n3x5=15 4x5=20 5x5=25\n" given 3, 5 when call createMultiplyTable', () => {
    expect(createMultiplyTable(3, 5)).toBe("3x3=9\n3x4=12 4x4=16\n3x5=15 4x5=20 5x5=25\n");
});
