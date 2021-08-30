
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    if (matrix.length === 0) {
        return [];
    }

    return matrix.map((arr, index) => (index % 2) ? arr.reverse() : arr).flat();

}
