    function createMatrix(m, n) {
      let matrix = [];
      for (let i = 0; i < m; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
          let value = Math.floor(Math.random()*100); //округление + Псевдослучайное число с плавающей запятой от 0 (включительно) до 100.
          row.push(value);
        }
        matrix.push(row);
      }
      return matrix;
    };
  
    function SumMatrix(A, B) {
      let m = A.length, //строки
          n = A[0].length, //столбцы
          sum = [];
      for (let i = 0; i < m; i++) {
        sum[i] = [];
        for (let j = 0; j < n; j++) {
          sum[i][j] = A[i][j] + B[i][j];
        }
        document.getElementById('matr1').innerHTML += `[ `+ A[i].join('  ') + ` ]<br>`;
        document.getElementById('matr2').innerHTML += `[ `+ B[i].join('  ') + ` ]<br>`;
        document.getElementById('matrSum').innerHTML += `[ `+ sum[i].join('  ') + ` ]<br>`;
      }
      return document.getElementById('info').innerHTML = `<h6>Простите, но...</h6> Матрицы не обновляются при вводе других чисел, а дополняются. 
      Пожалуйста, перезагрузите страницу перед вводом новых данных (по-другому матрицы не выводятся в приличном виде).`;
    };
  
    function main() {
        let rows, cols;
        rows = document.getElementById('rows').value;
        cols = document.getElementById('cols').value;
        if (rows == "" || cols == "") {
          return document.getElementById('info').innerHTML = `Не все данные введены!`;
        } else if (rows == 0 || cols == 0) { 
             return document.getElementById('info').innerHTML = `Строка или столбец равны нулю... Серьезно?`;
        }
        let m, n;
        m = parseInt(rows);
        n = parseInt(cols);
        SumMatrix(createMatrix(m,n), createMatrix(m,n));
    }

    let button = document.querySelector('.button');
    button.addEventListener('click', main);
  