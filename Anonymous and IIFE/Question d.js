//Anonymous

const numberArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
};

const primeNumbers = numberArray.filter(isPrime);

console.log("Prime numbers in the array:", primeNumbers);


//IIFE

const numberArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = (function (array) {
  const isPrime = function (number) {
    if (number <= 1) {
      return false;
    }
    if (number <= 3) {
      return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }

    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
    }

    return true;
  };

  return array.filter(isPrime);
})(numberArray);

console.log("Prime numbers in the array:", primeNumbers);
