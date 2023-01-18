function diagonalAttack(input) {

    let matrix = []
    input.forEach(element => {
        matrix.push(element.split(' '))
    })


    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    let length = matrix.length;


    for (let i = 0; i < length; i++) {
        mainDiagonal += Number(matrix[i][i])
        secondaryDiagonal += Number(matrix[length - i - 1][i])
    }


    if (mainDiagonal !== secondaryDiagonal) {
        // original matrix if the two diagonals have different sums
        matrix.forEach((row) => {
            console.log(row.join(' '));
        });

    } else {

        for (let i = 0; i < length; i++) {
            if (matrix[i][i] && matrix[length - i - 1][i]) {
                // да запълня матрицата, освен диагонала със стойността, която е сумата от цифрите
                //matrix[i].fill(mainDiagonal, 0, i)
                //matrix[i].fill(mainDiagonal, length - i - 1)

                '5 3 12 3 1'

            } else {

            }

        }

        /*
        The output is either the new matrix, with all cells not belonging to a main diagonal are
         changed to the diagonal sum, or the original matrix if the two diagonals 
         have different sums. 
        */

    }

}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'])