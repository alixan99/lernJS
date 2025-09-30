const mapRealization = function (array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];

    const resultCallbackFunction = callback(currentItem);

    result.push(resultCallbackFunction);
  }
  return result;
};

// 1
const numbers = [1, 2, 3, 4, 5];
console.log(mapRealization(numbers, (item) => item * 2));

// 2
const fruits = ['apple', 'banana', 'cherry'];
console.log(mapRealization(fruits, (item) => item.length));

//3
const personalCard = [
  { name: 'John', age: 25 },
  { name: 'Anna', age: 30 },
];
console.log(mapRealization(personalCard, (human) => human.name));

// 4
const temperaturesInCelsius = [0, 15, 25, 30, -5];
console.log(
  mapRealization(temperaturesInCelsius, (item) => (item * 9) / 5 + 32),
);

// 5
const numbersForObject = [1, 4, 9, 16];
console.log(
  mapRealization(numbersForObject, (number) => {
    return { value: number, square: number ** 2 };
  }),
);

//6
const baseString = ['hello', 'world', 'javascript'];
console.log(
  mapRealization(
    baseString,
    (string) => `${string[0].toUpperCase() + string.slice(1)}`,
  ),
);

//7
const evenDoubleNumbers = [1, 2, 3, 4, 5];
console.log(
  mapRealization(evenDoubleNumbers, (number) =>
    number % 2 == 0 ? number * 2 : number,
  ),
);

//8
const mixNumbers = [1, '2', 3, '4', 5];
console.log(
  mapRealization(mixNumbers, (number) =>
    typeof number == 'string' ? +number : number,
  ),
);

//9
const productMap = [
  { name: 'apple', price: 1.2 },
  { name: 'banana', price: 0.8 },
];
console.log(
  mapRealization(productMap, (product) =>
    Object.assign({}, product, { discountPrice: 10 }),
  ),
);
