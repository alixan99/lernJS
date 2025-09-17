// УРОВЕНЬ Легкий

// 1. Object.keys
{
  let car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2021,
  };
  function getCarKeys(obj) {
    return Object.keys(obj);
  }
  console.log(getCarKeys(car));
}

// 2. Object.values
{
  let fruitPrices = { apple: 50, banana: 30, orange: 70 };

  function calcSumFruits(obj) {
    let resultSum = 0;
    let listPrices = Object.values(obj);
    for (let i = 0; i < listPrices.length; i++) {
      resultSum += listPrices[i];
    }
    return resultSum;
  }
  console.log(calcSumFruits(fruitPrices));
}

// 3. Object.entries
{
  let book = { title: 'JavaScript Basics', author: 'Jane Doe', pages: 200 };
  function createNewArray(obj) {
    return Object.entries(obj);
  }
  console.log(createNewArray(book));
}

// 4. Подсчет количества свойств
{
  function countProperties(obj) {
    return Object.keys(obj).length;
  }
}

// 5. Поиск максимального значения
{
  let scores = { Alex: 100, Bob: 75, Charlie: 95 };

  function showMaxValue(obj) {
    return Math.max(...Object.values(obj));
  }
  console.log(showMaxValue(scores));
}

//УРОВЕНЬ Средний

// 1. Сумма числовых свойств
{
  function sumNumericalValues(obj) {
    let listValues = Object.values(obj);
    let resultSum = 0;
    for (let i = 0; i < listValues.length; i++) {
      if (typeof listValues[i] == 'number') {
        resultSum += listValues[i];
      }
      continue;
    }
    return resultSum;
  }
}

// 2. Преобразование объекта в query string
{
  let user = { name: 'John', age: 30 };

  function toQueryString(obj) {
    return Object.entries(obj)
      .map((item) => `${item[0]}=${item[1]}`)
      .join('&');
  }
  console.log(toQueryString(user));
}

// 3. Сравнение двух объектов
{
  function areObjectsEqual(obj1, obj2) {
    let listKeysFromObj1 = Object.keys(obj1);
    let listKeysFromObj2 = Object.keys(obj2);

    for (let i = 0; i < listKeysFromObj1.length; i++) {
      if (listKeysFromObj1[i] !== listKeysFromObj2[i]) {
        return false;
      }

      if (obj1[listKeysFromObj1[i]] !== obj2[listKeysFromObj2[i]]) {
        return false;
      }
    }
    return true;
  }

  let user1 = { name: 'John', age: 30 };
  let user2 = { name: 'John', age: 30 };
  console.log(areObjectsEqual(user1, user2));
}
