const input = require('fs').readFileSync(0).toString().trim().split('\n');

const X = input.shift();
const N = input.shift();
const cost = input.map(v => v.split(' ').map(Number));

let total = 0;

for (let i = 0; i < cost.length; i++) {
    total += cost[i][0] * cost[i][1];
}

console.log(total == X ? 'Yes' : 'No');