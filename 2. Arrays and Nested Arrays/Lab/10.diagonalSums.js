function diagonalSums(matrix) {

    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    let length = matrix.length;

    for (let i = 0; i < length; i++) {
        mainDiagonal += matrix[i][i]
        secondaryDiagonal += matrix[length - i - 1][i]
    }


    console.log(`${mainDiagonal} ${secondaryDiagonal}`);

}
diagonalSums([[20, 40],
              [10, 60]])

diagonalSums([[3, 5, 17],
              [-1, 7, 14],
              [1, -8, 89]]
)