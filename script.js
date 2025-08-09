// 1. Проверка возраста

function checkAge() {
  let isYourAge =
    +prompt('Введите, пожалуйста, Ваш возраст') < 18
      ? alert('Доступ запрещен')
      : alert('Доступ разрешен');
}
// checkAge();

// 2. Четное или нечетное

function isIntegerEven() {
  let integer =
    +prompt('Введите число') % 2 == 0
      ? console.log('Ваше число - четное')
      : console.log('Ваше число - нечетное');
}
// isIntegerEven()

// 3. Калькулятор

function calculator() {
  let firstOperand = +prompt('Введите первое число');
  let secondOperand = +prompt('Введите второе число');
  let operator = prompt('Выберете оператор', '+ - * /');
  let result;
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
    default:
      break;
  }
  return console.log(result);
}
// calculator();

// 4. Проверка длины строки

function checkStringLength() {
  let isString = prompt('Введите строку');

  isString.length > 10
    ? console.log(
        `${isString.slice(0, 5)}${'*'.repeat(isString.length - 5)}`,
        'Длина строки:',
        isString.length,
      )
    : console.log(isString.toUpperCase(), 'Длина строки:', isString.length);
}
// checkStringLength();

// 5. Определение времени суток

function checkTimesOfDay() {
  while (true) {
    let nowHour = +prompt('Сколько сейчас часов');

    if (!isNaN(nowHour) && nowHour != '') {
      if (nowHour >= 0 && nowHour <= 23) {
        if (nowHour >= 0 && nowHour <= 5) {
          console.log('Ночь');
        } else if (nowHour > 5 && nowHour <= 11) {
          console.log('Утро');
        } else if (nowHour > 11 && nowHour <= 17) {
          console.log('День');
        } else if (nowHour > 17 && nowHour <= 23) {
          console.log('Вечер');
        }
        break;
      } else {
        alert('Введите допустимое значение');
      }
    } else {
      alert('Введите число');
    }
  }
}
// checkTimesOfDay();

// 6. Проверка e-mail

function checkUserEmail() {
  while (true) {
    let isUserEmail = prompt('Введите свой e-mail');
    if (isUserEmail.includes('@') && isUserEmail.includes('.')) {
      alert('Верный формат');
      break;
    } else {
      alert('Ошибка!');
    }
  }
}
// checkUserEmail();

// 7. Палиндром (базовый)

function checkPalindrome() {
  let isWord = prompt('Ваше слово').toUpperCase();
  let palindromeWord = isWord.split('').toReversed().join('');
  isWord == palindromeWord ? console.log(true) : console.log(false);
}
// checkPalindrome()
