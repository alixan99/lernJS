// УРОВЕНЬ: Легкий

// 1. Создание и доступ

let student = {
  name: 'Алибек',
  age: '30',
  class: 'JavaScript',
};

console.log(
  `Студент ${student.name} учится в ${student.class} классе и ему ${student.age} лет.`,
);

// 2. Изменение свойств

student.grade = 5;
student.hobby = 'Рисование';
console.log(student);

// 3. Перебор свойств

let car = {
  brand: 'Volvo',
  model: 'XC90',
  year: '2025',
};

for (const key in car) {
  console.log(`${key}: ${car[key]}`);
}

// 4. Проверка свойства
{
  let settings = {
    theme: 'dark',
    volume: 80,
  };

  function isKeyObject(obj) {
    'theme' in obj
      ? console.log(obj['theme'])
      : console.log('Свойство не найдено');
  }
  isKeyObject(settings);
}

// 5. Поиск в массиве объектов
{
  const movies = [
    { title: 'Инception', director: 'Christopher Nolan', year: 2010 },

    { title: 'The Matrix', director: 'Lana Wachowski', year: 1999 },

    { title: 'Interstellar', director: 'Christopher Nolan', year: 2014 },
  ];

  function filterAgeFilms(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].year < 2005) {
        console.log(array[i].title);
      }
    }
  }
  filterAgeFilms(movies);

  // 6. Подсчет элементов по условию

  function isDirectorFilm(array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].director === 'Christopher Nolan') {
        counter++;
      }
    }
    console.log(counter);
  }
  isDirectorFilm(movies);
}

// УРОВЕНЬ: Средний

// 1. Сумма товаров в корзине
{
  let basket = [
    { name: 'Книга', price: 15, quantity: 2 },
    { name: 'Кофе', price: 25, quantity: 1 },
    { name: 'Фонарик', price: 10, quantity: 3 },
  ];

  function calcSalaryBasket(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
      result += array[i].price * array[i].quantity;
    }
    console.log(result);
  }
  calcSalaryBasket(basket);
}

// 2. Поиск объекта по свойству
{
  let users = [
    { id: 1, name: 'Alice', isOnline: true },
    { id: 2, name: 'Bob', isOnline: false },
    { id: 3, name: 'Charlie', isOnline: true },
  ];

  function searchObject(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].isOnline) {
        console.log(array[i].name);
      }
      break;
    }
  }
  searchObject(users);
}

// 3. Группировка по условию
{
  let animals = [
    { name: 'Кот', type: 'домашнее' },
    { name: 'Медведь', type: 'дикое' },
    { name: 'Собака', type: 'домашнее' },
    { name: 'Лиса', type: 'дикое' },
  ];

  function sortAnimalInType(array) {
    let domestic = [];
    let wild = [];
    for (const element of array) {
      if (element.type === 'домашнее') {
        domestic.push(element);
      } else {
        wild.push(element);
      }
    }
    console.log(domestic, wild);
  }
  sortAnimalInType(animals);
}

// 4. Поиск минимального значения
{
  let players = [
    { name: 'Анна', score: 85 },
    { name: 'Борис', score: 95 },
    { name: 'Вика', score: 76 },
  ];

  function calcMinimalScore(array) {
    let currentMinimalScore = array[1].score;
    for (let i = 0; i < array.length; i++) {
      array[i].score < currentMinimalScore
        ? (currentMinimalScore = array[i].score)
        : currentMinimalScore;
    }
    console.log(currentMinimalScore);
  }
  calcMinimalScore(players);
}

// 5. Объединение двух массивов в объект
{
  let newProducts = [
    { id: 4, name: 'Чашка' },
    { id: 5, name: 'Блюдце' },
  ];

  let oldProducts = [
    { id: 1, name: 'Ложка' },
    { id: 2, name: 'Вилка' },
  ];

  function concatArrayProduct(array1, array2) {
    let allProducts = [];
    for (let i = 0; i < array1.length; i++) {
      allProducts[i] = array1[i];
    }
    for (let i = 0; i < array2.length; i++) {
      allProducts[allProducts.length] = array2[i];
    }
    console.log(allProducts);
  }
  concatArrayProduct(newProducts, oldProducts);
}

// УРОВЕНЬ Сложный