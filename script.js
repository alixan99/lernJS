// 1. Вывод чисел от 1 до N

function getNumbers() {
  let counter = prompt('Введите размер счетчика');
  for (let i = 1; i <= counter; i++) {
    console.log(i);
  }
}
// getNumbers();

// 2. Сумма чисел от 1 до N

function calcNumbers() {
  let counter = prompt('Введите размер счетчика');
  let result = 0;
  for (let i = 0; i <= counter; i++) {
    result += i;
  }
  console.log(result);
}
// calcNumbers();

// 3. Четные числа

function showEvenNumbers() {
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) console.log(i);
  }
}
// showEvenNumbers();

// 4. До первого четного числа

function checkInputEventInteger() {
  let inputInteger;
  while (true) {
    inputInteger = +prompt('Введите ЧЕТНОЕ число');
    if (inputInteger % 2 == 0) break;
  }
  return console.log(inputInteger);
}
// checkInputEventInteger();

// 5. Среднее арифметическое

function calcMiddleSum() {
  let result = 0;
  let counter = 0;
  while (true) {
    let middleSum = prompt('Введите число или "стоп"');
    if (middleSum == 'стоп') {
      break;
    }
    result += +middleSum;
    counter++;
  }
  if (counter == 0) return console.log(0);

  return console.log(result / counter);
}
// calcMiddleSum();

// 6. Максимальное число

function showMaxInteger() {
  let number = 0;
  while (true) {
    let thisNumber = prompt('Введите число для сравнения');
    if (thisNumber == 'стоп') {
      break;
    }

    if (number < +thisNumber) number = +thisNumber;
  }
  return console.log(number);
}
// showMaxInteger()

// 7. Перевернутая строка

function showReversString() {
  let thisString = prompt('Введите строку');
  let reversString = '';
  for (let i = thisString.length; i > 0; i--) {
    reversString += thisString[i - 1];
  }
  return console.log(reversString);
}
// showReversString()

// 8. Подсчет гласных

function counterVowelLetters() {
  let thisString = prompt('Введите фразу');
  let counter = 0;
  for (let i = 0; i < thisString.length; i++) {
    if (
      thisString[i] == 'a' ||
      thisString[i] == 'e' ||
      thisString[i] == 'i' ||
      thisString[i] == 'o' ||
      thisString[i] == 'u' ||
      thisString[i] == 'y'
    ) {
      counter++;
    }
  }
  return console.log(counter);
}

// counterVowelLetters()

// 9. Замена символов

// Вариант с массивом
function replaceLetter(params) {
  let string = prompt('Введите слово');
  let newString = string.split('');
  for (let i = 0; i < newString.length; i++) {
    if (
      newString[i] == 'a' ||
      newString[i] == 'A' ||
      newString[i] == 'а' ||
      newString[i] == 'А'
    ) {
      newString[i] = '!';
    }
  }
  return console.log(newString.join(''));
}

// replaceLetter();

// Вариант без массива
function replaceLetter(params) {
  let string = prompt('Введите слово');
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    letterWord = string[i];
    newString += letterWord.replaceAll('a', '!');
  }
  return console.log(newString);
}

// replaceLetter();
