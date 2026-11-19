function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }
  return result;
}

function countVowels(text) {
  const vowels = "aeiouAEIOUаэиоуөүяеёюАЭИОУӨҮЯЕЁЮ";
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (vowels.indexOf(text[i]) !== -1) {
      count++;
    }
  }
  return count;
}

function isPalindrome(text) {
  let cleaned = "";
  for (let i = 0; i < text.length; i++) {
    const ch = text[i].toLowerCase();
    if (ch !== " ") {
      cleaned = cleaned + ch;
    }
  }
  let left = 0;
  let right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function maxOf(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

function digitSum(n) {
  let num = Math.abs(n);
  let sum = 0;
  while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  }
  return sum;
}

if (typeof module !== "undefined") {
  module.exports = { sumTo, factorial, isPrime, fizzBuzz, countVowels, isPalindrome, maxOf, digitSum };
}
