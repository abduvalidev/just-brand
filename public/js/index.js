
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

// How Thinkswap works


const swapCard = [
  {  
    swapImg: './img/find.svg',
    swapTitle: 'Find the study resource that suits your needs',
    swapDesc: 'Explore our vast student authored document library and find a document that serves as a study guide or exemplar to allow you to improve your own understanding of the topic you are studying.' 
  },
  {  
    swapImg: './img/money.svg',
    swapTitle: 'Earn or purchase Exchange Credits to make your trade',
    swapDesc: 'Explore our vast student authored document library and find a document that serves as a study guide or exemplar to allow you to improve your own understanding of the topic you are studying.' 
  },
  {  
    swapImg: './img/credits.svg',
    swapTitle: 'Pay for your document using Exchange Credits',
    swapDesc: 'Explore our vast student authored document library and find a document that serves as a study guide or exemplar to allow you to improve your own understanding of the topic you are studying.' 
  },
  {  
    swapImg: './img/anytime.svg',
    swapTitle: 'Access your library anywhere, anytime',
    swapDesc: 'Explore our vast student authored document library and find a document that serves as a study guide or exemplar to allow you to improve your own understanding of the topic you are studying.' 
  },
];

function thinkSwap() {
  const swipGrid = document.querySelector('.swip-grid');
  swipGrid.innerHTML = '';
  swapCard.forEach(({swapImg, swapTitle, swapDesc}) => {
    const swapdHTML = addCard(swapImg, swapTitle, swapDesc);
    swipGrid.innerHTML += swapdHTML;
  }) 

}

thinkSwap()