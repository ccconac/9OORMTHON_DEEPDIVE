class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }

  push(item) {
    this.arr[this.index++] = item;
  }

  pop() {
    if (this.index <= 0) return null;

    const result = this.arr[--this.index];
    return result;
  }
}

const solution = (array) => {
  const stack = new Stack();
  const stackSize = array.length - 1;
  const string = array.split('');

  for (let i = stackSize; i >= 0; i--) {
    stack.push(string[i]);
  }

  return stack.arr;
};

const input = '문자열입니다';
const answer = solution(input).join('');

console.log(answer);
