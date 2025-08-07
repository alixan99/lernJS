// 1. Базовое преобразование
let newString = ' JavaScript is AWESOME ';
function upperCase(string) {
  return console.log(string.toUpperCase());
}

upperCase(newString);

// 2. Извлечение подстрок

let newData = '2024-07-30';

function splitDate(string) {
  return newData.split('-').forEach((item, i, arr) => {
    if (i < 1) {
      let year = arr[0]; //потому что в ТЗ было вывести в переменные
      let month = arr[1];
      let day = arr[2];
      console.log(`Год: "${year}", Месяц: "${month}", День: "${day}"`);
    }
  });
}

splitDate(newData);

// 3. Поиск и замена

let loveJsString = '    Я люблю JavaScript!. Я люблю это дело   ';

function replaceWords(string) {
  return console.log(
    string
      .replaceAll('люблю', 'обожаю')
      .replace('JavaScript', 'программирование'),
  );
}

replaceWords(loveJsString);

// 4. Работа с разделителями

let fruitsList = 'яблоки,груши,виноград';

function transformList(string) {
  return console.log(string.replaceAll(',', ' | ').toUpperCase());
}

transformList(fruitsList);

// 5. Проверка содержимого

let undefinedString = 'example@mail.com';

function verificationString(string) {
  if (string.includes('@') && string.endsWith('.com'))
    return console.log('Строка содержит "@" и заканчивается на ".com"');

  if (string.includes('@') && !string.endsWith('.com'))
    return console.log('Строка только содержит "@"');

  if (!string.includes('@') && string.endsWith('.com'))
    return console.log('Строка только заканчивается на ".com"');

  if (!string.includes('@') && !string.endsWith('.com'))
    return console.log('Строка не содержит "@" и не заканчивается на ".com"');
}

verificationString(undefinedString);

// 6. Маскирование данных

let cardNumber = '1234567812345678';

function encryptionCardNumber(string) {
  return console.log(`${string.slice(0, 4)} **** **** ${string.slice(-4)}`);
}

encryptionCardNumber(cardNumber);

// 7. Анализ строки

let startString = 'Hello World!';

function analysisString(string) {
  return console.log(
    string.length,
    string[0],
    string.at(-1),
    string[Math.floor(string.length / 2)],
  );
}

analysisString(startString)
