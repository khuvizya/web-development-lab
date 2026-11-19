const values = [42, "42", 3.14, true, null, undefined, "abc"];
const rows = [];

for (let i = 0; i < values.length; i++) {
  rows.push({
    value: String(values[i]),
    type: typeof values[i],
    toNumber: Number(values[i]),
    toBoolean: Boolean(values[i])
  });
}

console.table(rows);
console.log("0.1 + 0.2 =", 0.1 + 0.2);
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3);
console.log("'5' + 3 =", "5" + 3);
console.log("'5' - 3 =", "5" - 3);
