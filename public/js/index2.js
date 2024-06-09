// search btn 2

const searchBtn = document.querySelector('.search-btn');
const searchFocus = document.querySelector('.grou-focus');


searchFocus.classList.add('top-1');

searchBtn.addEventListener('click', () => {
  if (searchFocus.classList.contains('top-0')) {
    searchFocus.classList.remove('top-0');
    searchFocus.classList.add('top-1');
  } else {
    searchFocus.classList.remove('top-1');
    searchFocus.classList.add('top-0');
  }
});

const linkCards = [
  { bgColor: 'bg-color_th-1', queue: 'color_th-1', unNAme: 'Criminal Law & Procedure 🔥', desc: '44 Documents' },
  { bgColor: 'bg-color_th-2',  queue: 'color_th-2', unNAme: 'Criminal Law & Procedure 🔥', desc: '55 Documents' },
  { bgColor: 'bg-color_th-3',  queue: 'color_th-3', unNAme: 'Criminal Law & Procedure 🔥', desc: '44 Documents' },
  { bgColor: 'bg-color_th-4',  queue: 'color_th-4', unNAme: 'Criminal Law & Procedure 🔥', desc: '55 Documents' },
  { bgColor: 'bg-color_th-3',  queue: 'color_th-3', unNAme: 'Criminal Law & Procedure 🔥', desc: '44 Documents' },
  { bgColor: 'bg-color_th-4',  queue: 'color_th-4', unNAme: 'Criminal Law & Procedure 🔥', desc: '55 Documents' },
  { bgColor: 'bg-color_th-1', queue: 'color_th-1', unNAme: 'Criminal Law & Procedure 🔥', desc: '44 Documents' },
  { bgColor: 'bg-color_th-2',  queue: 'color_th-2', unNAme: 'Criminal Law & Procedure 🔥', desc: '55 Documents' },
  { bgColor: 'bg-color_th-4',  queue: 'color_th-4', unNAme: 'Criminal Law & Procedure 🔥', desc: '55 Documents' },
  { bgColor: 'bg-color_th-1', queue: 'color_th-1', unNAme: 'Criminal Law & Procedure 🔥', desc: '44 Documents' },
  { bgColor: 'bg-color_th-2',  queue: 'color_th-2', unNAme: 'Criminal Law & Procedure 🔥', desc: '55 Documents' },
  { bgColor: 'bg-color_th-2',  queue: 'color_th-2', unNAme: 'Criminal Law & Procedure 🔥', desc: '55 Documents' },
  { bgColor: 'bg-color_th-3',  queue: 'color_th-3', unNAme: 'Criminal Law & Procedure 🔥', desc: '44 Documents' },
  { bgColor: 'bg-color_th-4',  queue: 'color_th-4', unNAme: 'Criminal Law & Procedure 🔥', desc: '55 Documents' },
  { bgColor: 'bg-color_th-3',  queue: 'color_th-3', unNAme: 'Criminal Law & Procedure 🔥', desc: '44 Documents' },
];

let visibleDefault = window.innerWidth >= 768 ? 8 : 4;
let isShowingAll = false;

function toBind() {
  const container = document.querySelector('.univer');
  container.innerHTML = '';
  const cardsToShow = isShowingAll ? linkCards : linkCards.slice(0, visibleDefault);
  cardsToShow.forEach(({bgColor, queue, unNAme, desc }) => {
    const cardHTML = cadrAdd(bgColor, queue, unNAme, desc);
    container.innerHTML += cardHTML;
  });
};

document.querySelector('.toggleButton').addEventListener('click', () => {
  isShowingAll = !isShowingAll;
  toBind();
  document.querySelector('.toggleButton').textContent = isShowingAll ? 'View Less' : 'View More';
});

window.addEventListener('resize', () => {
  visibleDefault = window.innerWidth >= 768 ? 10 : 5;
  if (!isShowingAll) {
    toBind();
  }
});

toBind();
