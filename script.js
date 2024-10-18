const targetDate = new Date(Date.UTC(2024, 9, 18, 11, 0, 0)).getTime(); // GMT+5

const countdownInterval = setInterval(function () {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('hours').innerHTML = hours
    .toString()
    .padStart(2, '0');
  document.getElementById('minutes').innerHTML = minutes
    .toString()
    .padStart(2, '0');
  document.getElementById('seconds').innerHTML = seconds
    .toString()
    .padStart(2, '0');

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = '<h2>Starting Now..</h2>';
  }
}, 1000);
