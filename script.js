/* let intOne = +prompt('Введите первое число');
let intTwo = +prompt('Введите второе число');

console.log(
  `Результаты вычислений: \nСумма ${intOne + intTwo}\nРазность ${
    intOne - intTwo
  }\nПроизведение ${intOne * intTwo}\nЧастное ${intOne / intTwo}`,
); */

function calculation() {
  let intOne = +prompt('Введите первое число');
  let intTwo = +prompt('Введите второе число');

  let sum = intOne + intTwo;
  let dif = intOne - intTwo;
  let multi = intOne * intTwo;
  let div = intOne / intTwo;

  return console.log(
    `Результаты вычислений: \nСумма ${sum}\nРазность ${dif}\nПроизведение ${multi}\nЧастное ${div}`,
  );
}

calculation();
