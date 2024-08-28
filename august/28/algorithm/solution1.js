const input = require('fs').readFileSync('index.txt').toString().trim().split('\n').map(row => row.split(' ').map(Number));

const [N, K] = input.shift().map(Number);
const W = [];
const V = [];

const arr = Array.from(Array(N + 1), () => Array(K + 1).fill(0));

for (let i = 0; i < N; i++) {
    W.push(input[i][0]);
    V.push(input[i][1]);
}

for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= K; j++) {
        if (W[i - 1] > j) {
            arr[i][j] = arr[i - 1][j];
        } else {
            arr[i][j] = Math.max(V[i - 1] + arr[i - 1][j - W[i - 1]], arr[i - 1][j]);
        }
    }
}

console.log(arr[N][K]);