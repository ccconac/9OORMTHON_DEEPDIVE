const [H, M] = require('fs').readFileSync(0).toString().split(' ').map(Number);

if (M >= 45) {
	console.log(H, M - 45);
} else if (M < 45) {
	if (H === 0) console.log(23, M + 15);
	else console.log(H - 1, M + 15);
}