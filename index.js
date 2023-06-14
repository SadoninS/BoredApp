const favicon = document.querySelector('link[rel="shortcut icon"]');
const bodyNode = document.querySelector('body');
const headerNode = document.querySelector('#header');
const textNode = document.querySelector('#text');
const btnNode = document.querySelector('#btn');

btnNode.addEventListener('click', () => {
  fetch('https://www.boredapi.com/api/activity/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      textNode.innerText = data.activity;
      renderNewStyle();
    });
});

function renderNewStyle() {
  favicon.setAttribute('href', 'fun.png');
  bodyNode.classList.add('fun');
  headerNode.innerText = 'Have fun!🔥';
}
