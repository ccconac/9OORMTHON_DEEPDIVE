const currentTime = document.querySelector('.current-time');

const showCurrentTime = () => {
  const date = new Date();
  const dateString = date.toLocaleString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hourCycle: 'h24',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const replacedDate = dateString.replace(/(\d{4})\. (\d{2})\. (\d{2})\./, '$1-$2-$3');

  return replacedDate;
};

const clock = setInterval(() => {
  currentTime.textContent = showCurrentTime();
}, 1000);
