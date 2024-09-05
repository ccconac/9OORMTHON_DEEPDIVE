class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return !this.storage[this.rear] ? 0 : this.rear - this.front + 1;
  }

  add(item) {
    if (!this.size()) this.storage['0'] = item;
    else {
      this.rear += 1;
      this.storage[this.rear] = item;
    }
  }

  remove() {
    let temp;
    if (!this.size()) return;

    // 원소가 한 개 남았을 경우
    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front = 0;
      this.rear = 0;
    }

    // 원소가 두 개 이상 남았을 경우
    if (this.front !== this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
    }

    return temp;
  }
}

const getQueueStorage = (array) => {
  const queue = new Queue();
  const queueSize = array.length - 1;
  const string = array.split('');

  for (let i = queueSize; i >= 0; i--) {
    queue.add(string[i]);
  }

  return queue.storage;
};

const solution = (input) => {
  const queue = getQueueStorage(input);
  const values = Object.values(queue);

  return values;
};

const input = '문자열입니다';
const answer = solution(input).join('');

console.log(answer);
