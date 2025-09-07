// УРОВЕНЬ Легкий

// 1. Приветствие
{
  function greet(name) {
    return `Привет, ${name}!`;
  }
}

// 2. Сумма двух чисел
{
  function sum(a, b) {
    return a + b;
  }
}

// 3. Проверка на четность
{
  function isEven(num) {
    return num % 2 == 0 ? true : false;
  }
}

// 4. Случайное число
{
  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

// 5. Форматирование строки\
{
  function FormatName(firstName, lastName) {
    return `${lastName}, ${firstName}`;
  }
}

// 6. Поиск индекса элемента
{
  function findIndex(arr, value) {
    let isFind = false;
    let findIndexElement = null;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        isFind = true;
        findIndexElement = i;
        break;
      }
    }
    return isFind ? findIndexElement : -1;
  }
}

// УРОВЕНЬ Средний

// 1. Поиск в массиве
{
  function findInArray(arr, value) {
    let isFindElement = false;
    for (let i = 0; i < array.length; i++) {
      if (arr[i] === value) {
        isFindElement = true;
        break;
      }
    }
    return isFindElement ? true : false;
  }
}

// 2. Калькулятор итоговой суммы
{
  let products = [
    { price: 150, quantity: 5 },
    { price: 300, quantity: 2 },
    { price: 75, quantity: 10 },
    { price: 500, quantity: 1 },
    { price: 220, quantity: 7 },
  ];

  function calculateTotal(cart) {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].price * cart[i].quantity;
    }
    return sum;
  }
  // console.log(calculateTotal(products));
}

// 3. Поиск самого длинного слова
{
  let wordsArray = [
    'кот',
    'солнце',
    'книга',
    'река',
    'дом',
    'цветок',
    'облако',
    'дорога',
    'дерево',
    'птица',
    'футболисты',
  ];

  function findLongestWord(words) {
    let maxLengthWord = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLengthWord) {
        maxLengthWord = words[i].length;
      }
    }
    return maxLengthWord;
  }
  // console.log(findLongestWord(wordsArray));
}

// 4. Сумма всех чисел
{
  function sumAll(...numbers) {
    let sum = 0;
    for (const element of numbers) {
      sum += element;
    }
    return sum;
  }

  // console.log(sumAll(10, 11, 12, 13, 14, 110));
}

// 5. Валидатор пароля
{
  function validatePassword(password) {
    let userPassword = String(password);

    if (userPassword.length > 6) {
      for (let i = 0; i < userPassword.length; i++) {
        if (Number(userPassword[i])) {
          return true;
        }
      }
    }
    return false;
  }
}

// 6. Разворот строки
{
  function reverseString(str) {
    let reverseString = '';
    for (let i = str.length - 1; i > -1; i--) {
      reverseString += str[i];
    }
    return reverseString;
  }
}

// 7. Уникальные значения массива
{
  function getUniqueValue(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
      let isUnique = false;
      for (let j = 0; j < uniqueArray.length; j++) {
        if (uniqueArray[j] === arr[i]) {
          isUnique = true;
          break;
        }
      }
      if (!isUnique) {
        uniqueArray[uniqueArray.length] = arr[i];
      }
    }

    return uniqueArray;
  }
}

// 8. Трансформация массива в объект
{
  function arrayToObject(arr) {
    let resultObject = {};
    for (let i = 0; i < arr.length; i++) {
      resultObject[arr[i][0]] = arr[i][1];
    }
    return resultObject;
  }
}

// 9. Фильтрация по нескольким условиям
{
  function filterUsers(users, filters) {
    let newArray = [];
    for (let i = 0; i < users.length; i++) {
      for (const key in filters) {
        if (users[i][key] == filters[key]) {
          newArray.push(users[i]);
        }
      }
    }
    return console.log(newArray);
  }
}

// 10. Разница между двумя массивами
{
  function arrayDiff(arr1, arr2) {
    let resultArray = [];
    for (let i = 0; i < arr1.length; i++) {
      let isUnique = false;
      for (let j = 0; j < arr2.length; j++) {
        if (arr2[j] == arr1[i]) {
          isUnique = true;
          break;
        }
      }
      if (!isUnique) {
        resultArray.push(arr1[i]);
      }
    }
    return console.log(resultArray);
  }
}
