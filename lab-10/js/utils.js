export const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

export const average = (...nums) => {
  if (nums.length === 0) {
    return 0;
  }
  const total = nums.reduce((sum, n) => sum + n, 0);
  return total / nums.length;
};

export const greet = (name = "Зочин") => `Сайн уу, ${name}!`;

export const makeCounter = (start = 0) => {
  let count = start;
  return () => {
    count = count + 1;
    return count;
  };
};

export const applyN = (fn, n, x) => {
  let result = x;
  for (let i = 0; i < n; i++) {
    result = fn(result);
  }
  return result;
};

export const compose = (f, g) => (x) => f(g(x));
