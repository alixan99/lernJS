// УРОВЕНЬ ЛЕГКИЙ

// 1. Найти сумму всех элементов

// let numbers = [1, 2, 3, 4, 5];

// без метода

function calcSumArray(array) {
  let result = 0;
  for (const item of array) {
    result += item;
  }
  return console.log(result);
}
// calcSumArray(numbers);

// с методом

function calcSumArrayAlt(array) {
  return console.log(array.reduce((acc, item) => acc + item, 0));
}
// calcSumArrayAlt(numbers);

// 2. Найти максимальный элемент в массиве

// let numbers = [3, 7, 2, 9, 5];

function getMaxElement(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result > array[i] ? result : (result = array[i]);
  }
  console.log(result);
}
// getMaxElement(numbers);

// с методом

function getMaxElementAlt(array) {
  console.log(Math.max(...array));
}
// getMaxElementAlt(numbers)

// 3. Проверить, есть ли элемент в массиве

let fruits = ['apple', 'banana', 'orange'];

let search = 'banana';

// без метода

function hasElement(array, searchElement) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchElement) {
      console.log('Элемент найден');
      count++;
      break;
    }
  }
  if (count == 0) {
    console.log('Элемент не найден');
  }
}
// hasElement(fruits, search);

// с методом

function hasElementAlt(array, searchElement) {
  array.includes(searchElement)
    ? console.log('Элемент найден')
    : console.log('Элемент не найден');
}
// hasElementAlt(fruits, search)

// 4. Перевернуть массив

// let arr = [1, 2, 3, 4, 5];

function getReversArray(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = array[array.length - i - 1];
  }
  console.log(result);
}
// getReversArray(arr);

// с методом

function getReversArrayAlt(array) {
  console.log(array.reverse());
}
// getReversArrayAlt(arr)

// УРОВЕНЬ СРЕДНИЙ

// 1. Посчитать количество определенного элемента в массиве

// без метода

// let numbers = [1, 2, 3, 2, 4, 2, 5];

function calcElementPresent(array, integer) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] == integer ? count++ : count;
  }
  console.log(count);
}
// calcElementPresent(numbers, 2);

// с методом

function calcElementPresentAlt(array, integer) {
  console.log(array.filter((item) => item == integer).length);
}
// calcElementPresentAlt(numbers, 2);

// 2. Найти среднее значение элементов массива

// let arr = [10, 20, 30, 40];

// без метода

function calcMiddleSum(array) {
  let summary = 0;
  for (let i = 0; i < array.length; i++) {
    summary += array[i];
  }
  console.log(summary / array.length);
}
// calcMiddleSum(arr);

// с методом

function calcMiddleSumAlt(array) {
  console.log(array.reduce((sum, item) => sum + item) / array.length);
}
// calcMiddleSumAlt(arr);

// 3. Отфильтровать четные числа

// let arr = [1, 2, 3, 4, 5, 6];

// без метода

function getFilterEvenInteger(array) {
  let j = 0;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      result[j] = array[i];
      j++;
    }
  }
  console.log(result);
}
// getFilterEvenInteger(arr);

// с методом

function getFilterEvenIntegerAlt(array) {
  console.log(array.filter((item) => item % 2 == 0));
}
// getFilterEvenIntegerAlt(arr);

// 4. Удвоить каждый элемент массива

let arr = [1, 2, 3];

// без метода

function calcDoubleValue(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = array[i] * 2;
  }
  console.log(result);
}
// calcDoubleValue(arr)

// с методом

function calcDoubleValueAlt(array) {
  console.log(array.map((item) => item * 2));
}
// calcDoubleValueAlt(arr);

// УРОВЕНЬ СЛОЖНЫЙ

let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];

function getConcatArray(first, second) {
  const result = [];
  let resultLength = 0;

  function contains(array, length, element) {
    for (let i = 0; i < length; i++) {
      if (array[i] === element) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < first.length; i++) {
    if (!contains(result, resultLength, first[i])) {
      result[resultLength] = first[i];
      resultLength++;
    }
  }

  for (let i = 0; i < second.length; i++) {
    if (!contains(result, resultLength, second[i])) {
      result[resultLength] = second[i];
      resultLength++;
    }
  }

  console.log(result);
}

getConcatArray(arr1, arr2);
