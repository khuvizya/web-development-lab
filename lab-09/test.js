const a = require("./js/algorithms.js");
const v = require("./js/validators.js");
let failed = 0;

function eq(name, got, want) {
  if (JSON.stringify(got) !== JSON.stringify(want)) {
    console.log("FAIL", name, got, want);
    failed++;
  }
}

eq("sumTo", a.sumTo(10), 55);
eq("factorial", a.factorial(5), 120);
eq("factorial0", a.factorial(0), 1);
eq("isPrime7", a.isPrime(7), true);
eq("isPrime9", a.isPrime(9), false);
eq("isPrime1", a.isPrime(1), false);
eq("fizzBuzz", a.fizzBuzz(15)[14], "FizzBuzz");
eq("fizzBuzz3", a.fizzBuzz(5), ["1", "2", "Fizz", "4", "Buzz"]);
eq("vowels", a.countVowels("Hello"), 2);
eq("vowelsMn", a.countVowels("Монгол"), 2);
eq("palin", a.isPalindrome("А роза упала на лапу Азора"), true);
eq("palin2", a.isPalindrome("hello"), false);
eq("maxOf", a.maxOf([3, 9, 2]), 9);
eq("maxOfNeg", a.maxOf([-5, -2, -9]), -2);
eq("digitSum", a.digitSum(1234), 10);

eq("name ok", v.validateName("  Бат  ").valid, true);
eq("name num", v.validateName("Бат1").valid, false);
eq("name short", v.validateName("Б").valid, false);
eq("name empty", v.validateName("   ").valid, false);
eq("email ok", v.validateEmail("a@b.mn").valid, true);
eq("email bad", v.validateEmail("a@b").valid, false);
eq("email space", v.validateEmail("a @b.mn").valid, false);
eq("pass ok", v.validatePassword("abcd1234").valid, true);
eq("pass mn", v.validatePassword("Нууц1234").valid, true);
eq("pass short", v.validatePassword("ab12").valid, false);
eq("pass nodigit", v.validatePassword("abcdefgh").valid, false);
eq("pass noletter", v.validatePassword("12345678").valid, false);
eq("pass space", v.validatePassword("abcd 1234").valid, false);
eq("msg short", v.validateMessage("abc").valid, false);
eq("msg ok", v.validateMessage("  энэ бол санал  ").valid, true);

console.log(failed === 0 ? "ALL PASS" : failed + " failed");
