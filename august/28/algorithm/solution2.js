const input = require('fs').readFileSync(0).toString().trim();

const N = Number(input);
const answer = [];

let count = 0;

const hanoi = (number, from, to) => {
  if (number > 1) hanoi(number - 1, from, 6 - from - to);

  count += 1;
  answer.push([from, to]);

  if (number > 1) hanoi(number - 1, 6 - from - to, to);
};

hanoi(N, 1, 3);

console.log(count);
console.log(answer.map((value) => value.join(' ')).join('\\n'));