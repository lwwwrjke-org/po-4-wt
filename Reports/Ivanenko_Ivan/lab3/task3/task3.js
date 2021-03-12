function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function createMatrix(rows, cols) {
  const matrix = [];
  for(let i = 0; i < rows; i++) {
    matrix.push([]);
    for(let j = 0; j < cols; j++) {
      matrix[i].push(getRandomInt(100));
    }
  }
  return matrix;
}


function arraySum(arr1, arr2) {
  return arr1.map( (el, index) => el + arr2[index] );
}


function canBeSummedUp(matrix1, matrix2) {
  if(matrix1.length === matrix2.length &&
     matrix1[0].length === matrix2[0].length) {
       return true;
     } else {
       return false;
     }
}


function sumUpMatrix(matrix1, matrix2) {
  if(canBeSummedUp(matrix1, matrix2)) {
    let rows = matrix1.length;
    let cols = matrix1[0].length;
    let summedMatrix = [];

    matrix1.forEach((item, i) => {
      summedMatrix.push([]);
      summedMatrix[i].push(arraySum(item, matrix2[i]));
    });
    return summedMatrix;
  } else {
    throw new Error();
  }

}


matrix1 = createMatrix(10, 10);
alert(matrix1);
matrix2 = createMatrix(10, 10);
alert(matrix2);
matrix3 = createMatrix(5, 10);
sum = sumUpMatrix(matrix1, matrix2);
alert(sum);
