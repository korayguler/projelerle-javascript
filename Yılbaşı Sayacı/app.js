const newDate = '01 01 2021';

const countDown = (e) => {
  const diff = new Date(e) - new Date();
  const total = Math.floor(diff / 1000);

  const day = Math.floor(total / 3600 / 24);
  const hour = Math.floor((total / 3600) % 24);
  const min = Math.floor((total / 60) % 60);
  const sec = Math.floor(total % 60);

  UI(day, hour, min, sec);
};

const UI = (d, h, m, s) => {
  const day = document.querySelector('#day');
  const hour = document.querySelector('#hour');
  const minute = document.querySelector('#minute');
  const second = document.querySelector('#second');

  day.innerText = zero(d);
  hour.innerText = zero(h);
  minute.innerText = zero(m);
  second.innerText = zero(s);
};

const zero = (e) => (e < 10 ? `0${e}` : e);

countDown(newDate);

setInterval(() => {
  countDown(newDate);
}, 1000);
