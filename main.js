function isStartLessThanEnd(start, end) {
    return start <= end;
}

function isOutOfBounds(start, end) {
    return start > 1000 || start < 1 || end > 1000 || end < 1;
}

function createMultiplicationTable(start, end, isStartLessThanEnd, isOutOfBounds) {
    if(!isStartLessThanEnd) return null;
    if(isOutOfBounds) return "Out Of Range";
    var result = '';
    for(let i = start; i <= end; i++) {
        for(let j = start; j <= i; j++) {
            if(j < i) {
                result += j + "x" + i + '=' + i*j + " ";
            }
            if(i === j) {
                result += i + "x" + j + "=" + i*j + "\n";
            }
        }
    }
    return result;
}

function createMultiplyTable(start, end) {
    return createMultiplicationTable(start, end, isStartLessThanEnd(start, end), isOutOfBounds(start, end));
}

module.exports = {isOutOfBounds, isStartLessThanEnd, createMultiplicationTable, createMultiplyTable};