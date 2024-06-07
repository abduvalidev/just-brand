
// search btn
const searchButton = document.querySelector('.searchButton');
const searchInput = document.querySelector('.default-search');

searchButton.addEventListener('click', () => {
  searchInput.classList.toggle('pointer-events-none');
  if (!searchInput.classList.contains('pointer-events-none')) {
    searchInput.classList.add('w-32', 'border', 'px-3', 'py-1', 'rounded-lg', 'pointer-events-auto');
    searchInput.focus();
  } else {
    searchInput.classList.remove('w-32', 'border', 'px-3', 'py-1', 'rounded-lg', 'pointer-events-auto');
  }
});



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
  { queue: 'color_th-1', unNAme: 'Charles Sturt University', desc: 'High School' },
  { queue: 'color_th-2', unNAme: 'Charles Sturt University', desc: 'University' },
  { queue: 'color_th-3', unNAme: 'Charles Sturt University', desc: 'High School' },
  { queue: 'color_th-4', unNAme: 'Charles Sturt University', desc: 'University' },
  { queue: 'color_th-1', unNAme: 'Charles Sturt University', desc: 'High School' },
  { queue: 'color_th-2', unNAme: 'Charles Sturt University', desc: 'University' },
  { queue: 'color_th-3', unNAme: 'Charles Sturt University', desc: 'High School' },
  { queue: 'color_th-4', unNAme: 'Charles Sturt University', desc: 'University' },
  { queue: 'color_th-1', unNAme: 'Charles Sturt University', desc: 'High School' },
  { queue: 'color_th-2', unNAme: 'Charles Sturt University', desc: 'University' },
  { queue: 'color_th-3', unNAme: 'Charles Sturt University', desc: 'High School' },
  { queue: 'color_th-4', unNAme: 'Charles Sturt University', desc: 'University' },
  { queue: 'color_th-1', unNAme: 'Charles Sturt University', desc: 'High School' },
  { queue: 'color_th-2', unNAme: 'Charles Sturt University', desc: 'University' },
  { queue: 'color_th-3', unNAme: 'Charles Sturt University', desc: 'High School' },
  { queue: 'color_th-4', unNAme: 'Charles Sturt University', desc: 'University' },
  { queue: 'color_th-1', unNAme: 'Charles Sturt University', desc: 'High School' },
  { queue: 'color_th-2', unNAme: 'Charles Sturt University', desc: 'University' },
  { queue: 'color_th-3', unNAme: 'Charles Sturt University', desc: 'High School' },
  { queue: 'color_th-4', unNAme: 'Charles Sturt University', desc: 'University' },
  { queue: 'color_th-1', unNAme: 'Charles Sturt University', desc: 'High School' },
  { queue: 'color_th-2', unNAme: 'Charles Sturt University', desc: 'University' },
  { queue: 'color_th-3', unNAme: 'Charles Sturt University', desc: 'High School' },
  { queue: 'color_th-4', unNAme: 'Charles Sturt University', desc: 'University' },
  { queue: 'color_th-1', unNAme: 'Charles Sturt University', desc: 'High School' },
  { queue: 'color_th-2', unNAme: 'Charles Sturt University', desc: 'University' },
  { queue: 'color_th-3', unNAme: 'Charles Sturt University', desc: 'High School' },
  { queue: 'color_th-4', unNAme: 'Charles Sturt University', desc: 'University' },
];

let visibleDefault = window.innerWidth >= 768 ? 16 : 6;
let isShowingAll = false;

function toBind() {
  const container = document.querySelector('.univer');
  container.innerHTML = '';
  const cardsToShow = isShowingAll ? linkCards : linkCards.slice(0, visibleDefault);
  cardsToShow.forEach(({queue, unNAme, desc}) => {
    const cardHTML = cadrAdd(queue, unNAme, desc);
    container.innerHTML += cardHTML;
  });
};

document.querySelector('.toggleButton').addEventListener('click', () => {
  isShowingAll = !isShowingAll;
  toBind();
  document.querySelector('.toggleButton').textContent = isShowingAll ? 'View Less' : 'View More';
});

window.addEventListener('resize', () => {
  visibleDefault = window.innerWidth >= 768 ? 16 : 6;
  if (!isShowingAll) {
    toBind();
  }
});

toBind();


// country Funtion

const arrCount = [
  {  countIcon: './img/austrailia.svg', countName: 'Austrailia' },
  {  countIcon: './img/austrailia.svg', countName: 'Austrailia' },
  {  countIcon: './img/austrailia.svg', countName: 'Austrailia' },
  {  countIcon: './img/austrailia.svg', countName: 'Austrailia' },
  {  countIcon: './img/austrailia.svg', countName: 'Austrailia' },
  {  countIcon: './img/austrailia.svg', countName: 'Austrailia' },
  {  countIcon: './img/austrailia.svg', countName: 'Austrailia' },
  {  countIcon: './img/austrailia.svg', countName: 'Austrailia' },
  {  countIcon: './img/austrailia.svg', countName: 'Austrailia' },
  {  countIcon: './img/austrailia.svg', countName: 'Austrailia' },
];


function toCount() {
  const countGri = document.querySelector('.countGrid');
  countGri.innerHTML = '';
  arrCount.forEach(({countIcon, countName}) => {
    const cardHTML = addCount(countIcon, countName);
    countGri.innerHTML += cardHTML;
  });
};

toCount()