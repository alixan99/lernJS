const filterRealization = function (array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];

    if (callback(currentItem)) {
      result.push(currentItem);
    }
  }
  return result;
};

// 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterRealization(numbers, (num) => num % 2 == 0));

// 2
const shortWords = ['apple', 'banana', 'cherry', 'date'];
console.log(filterRealization(shortWords, (word) => word.length > 5));

// 3
const adultUsers = [
  { name: 'John', age: 25 },
  { name: 'Anna', age: 17 },
  { name: 'Mike', age: 30 },
];
console.log(filterRealization(adultUsers, (user) => user.age > 18));

// 4
const positiveInteger = [-1, 2, -3, 4, -5, 6];
console.log(filterRealization(positiveInteger, (num) => num > 0));

// 5
const fruitsList = ['apple', 'banana', 'avocado', 'cherry', 'apricot'];
console.log(filterRealization(fruitsList, (fruit) => fruit[0] == 'a'));

// 6
const productList = [
  { name: 'book', price: 15 },
  { name: 'pen', price: 5 },
];
console.log(filterRealization(productList, (product) => product.price > 10));

// 8
const uniqueNumbers = [10, 4, 67, 10, 43, 67, 43];
console.log(filterRealization(uniqueNumbers, (item) => {
  const count = uniqueNumbers.filter((el) => el === item).length
  return count === 1
}));

