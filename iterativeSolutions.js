const countingSheep = (num) => {
  for (let i = 0; i < num; i++) {
    console.log(`${i + 1}: Another sheep jumps over the fence`);
  }

  console.log("All sheep jumped over the fence");
};
// O(n)
// countingSheep(3);

const powerCalculator = (base, exp) => {
  if (exp < 0) {
    return console.log("Exponent should be >= 0");
  }

  let result = base;
  for (let i = 1; i < exp; i++) {
    result *= base;
  }

  return result;
};

// O(n)
// powerCalculator(10, 2);

const reverseString = (str) => {
  if (str === "") {
    return "";
  }

  let revStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }

  return revStr;
};

// O(n)
// reverseString('javascript');

const triangularNumber = (n) => {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result += i;
  }

  return result;
};
//O(n)
// triangularNumber(5);

const stringSplitter = function (str, del) {
  let arr = [];
  let acc = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== del) {
      acc += str[i];
    }
    arr.push(acc);
  }

  return arr;
};

// O(n)
// stringSplitter('02/20/2020', '/');

const fibonacci = (n) => {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    if (i === 1 || i === 2) {
      arr.push(1);
    } else {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
  }

  return arr;
};

// O(n)
// fibonacci(7);

const factorial = (num) => {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result = result * i;
  }

  return result;
};

// O(n)
// factorial(5);
