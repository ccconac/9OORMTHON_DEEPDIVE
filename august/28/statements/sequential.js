const input = require('fs').readFileSync('test.txt').toString().split('\n');

const [_, year] = input.shift().split(' ').map(Number);
const ages = input.map(Number);

ages.forEach(age => console.log(`${year}년 후 나이: ${age + year}`));
