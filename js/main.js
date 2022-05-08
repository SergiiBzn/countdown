const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minuter = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

function updateCounter() {
  const currentTime = new Date();
  const time = new Date('2022-09-06');

  const different = time - currentTime;

  const daysLeft = Math.floor(different / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(different / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(different / 1000 / 60) % 60;
  const secondsLeft = Math.floor(different / 1000) % 60;

  days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
  hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
  minuter.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
  seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

updateCounter();

setInterval(updateCounter, 1000);
