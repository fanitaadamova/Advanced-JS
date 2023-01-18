function magicMatrices(matrix) {

    let sumRows = 0;
    let sumCols = 0;

    for (let i = 0; i < matrix.length; i++) {

        let currentArr = matrix[i].join('')
        for (let j = 0; j < currentArr.length; j++) {
            sumRows += Number(currentArr[j]);
            sumCols += Number(currentArr[0]);

        }
    }

    if (sumRows === sumCols) {
        console.log('true');
    } else {
        console.log('false');
    }


}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
)
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
)