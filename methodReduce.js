// Скрипт закомментирован в HTML

const reduceRealization = function (array, callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];

    accumulator = callback(accumulator, currentValue);
  }

  return accumulator;
};

// 1
const numbers = [1, 2, 3, 4, 5];
console.log(
  reduceRealization(
    numbers,
    (acc, item) => {
      return acc + item;
    },
    0,
  ),
);

// 2
console.log(
  reduceRealization(
    numbers,
    (acc, item) => {
      return acc * item;
    },
    1,
  ),
);

// 3
const letterString = ['a', 'b', 'c', 'd'];
console.log(
  reduceRealization(
    letterString,
    (acc, item) => {
      return acc + item;
    },
    '',
  ),
);

// 4
const isEvenNumbers = [1, 2, 3, 4, 5, 6];
console.log(
  reduceRealization(
    isEvenNumbers,
    (acc, item) => {
      if (item % 2 == 0) {
        acc.even.push(item);
      } else {
        acc.odd.push(item);
      }

      return acc;
    },
    { even: [], odd: [] },
  ),
);

// 5
const doubleNumbers = [1, 2, 2, 3, 3, 4, 4, 5, 5];
console.log(
  reduceRealization(
    doubleNumbers,
    (acc, item) => {
      if (!acc.includes(item)) {
        acc.push(item);
      }
      return acc;
    },
    [],
  ),
);

// 6
const twoDimensionalArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(
  reduceRealization(
    twoDimensionalArray,
    (acc, item) => {
      for (let i = 0; i < item.length; i++) {
        acc.push(item[i]);
      }
      return acc;
    },
    [],
  ),
);
