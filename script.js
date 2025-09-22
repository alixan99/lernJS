// УРОВЕНЬ Легкий

// 1. Простой калькулятор
{
  function calculate(a, b, operation) {
    return console.log(operation(a, b));
  }
  calculate(2, 5, (a, b) => a + b);
  calculate(2, 5, (a, b) => a * b);
}

// 2. Массив в квадрате
{
  function squareArray(arr, callback) {
    let result = [];
    for (let elem of arr) result.push(callback(elem));
    return console.log(result);
  }
  squareArray([12, 13, 14, 15], (item) => item ** 2);
}

// 3. Фильтр четных чисел
{
  function filterArray(arr, callback) {
    let result = [];
    for (let elem of arr) {
      if (callback(elem)) result.push(elem); //пуш только при возврате true
    }
    return console.log(result);
  }

  filterArray([12, 13, 14, 15], (item) => item % 2 == 0);
}

// 4. Форматирование текста
{
  function formatText(text, formatter) {
    return console.log(formatter(text));
  }

  formatText('javaScript', (string) => string.toUpperCase());
  formatText('ECMAScript', (string) => string.toLowerCase());
}

// УРОВЕНЬ Средний

// 1. Собственный forEach
{
  function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  }

  let result = myForEach([12, 13, 14, 15], (item, index, array) => {
    console.log(
      `${item} является элементом массива [${array}] с индексом ${index}`,
    );
  });
}
