// search btn 1
document.addEventListener('DOMContentLoaded', function () {
  const searchIcon = document.querySelector('.search-icon');
  const searchInput = document.querySelector('.search-input');
  const searchContainer = document.querySelector('.search-container');

  searchIcon.addEventListener('click', function () {
    searchContainer.classList.toggle('focused');
    if (searchContainer.classList.contains('focused')) {
      searchInput.focus();
    }
  });

  searchInput.addEventListener('blur', function () {
    searchContainer.classList.remove('focused');
  });
});



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
  cardsToShow.forEach(({ queue, unNAme, desc }) => {
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
  { countIcon: './img/austrailia.svg', countName: 'Austrailia' },
  { countIcon: './img/austrailia.svg', countName: 'Austrailia' },
  { countIcon: './img/austrailia.svg', countName: 'Austrailia' },
  { countIcon: './img/austrailia.svg', countName: 'Austrailia' },
  { countIcon: './img/austrailia.svg', countName: 'Austrailia' },
  { countIcon: './img/austrailia.svg', countName: 'Austrailia' },
  { countIcon: './img/austrailia.svg', countName: 'Austrailia' },
  { countIcon: './img/austrailia.svg', countName: 'Austrailia' },
  { countIcon: './img/austrailia.svg', countName: 'Austrailia' },
  { countIcon: './img/austrailia.svg', countName: 'Austrailia' },
];

function toCount() {
  const countGri = document.querySelector('.countGrid');
  countGri.innerHTML = '';
  arrCount.forEach(({ countIcon, countName }) => {
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
  swapCard.forEach(({ swapImg, swapTitle, swapDesc }) => {
    const swapdHTML = addCard(swapImg, swapTitle, swapDesc);
    swipGrid.innerHTML += swapdHTML;
  })

}

thinkSwap()




// swiper js
const wrapCard = [
  {
    wraDescr: `"Using FlowBite has been fantastic for my workflow. It made it really easy to create a very good looking project in no time.Every designer should have this in their toolbox!"`,
    wrapImg: `./img/roberta.png`,
    wraName: `Roberta Casas`,
    wraUserNAme: `Web developer @themesberg`
  },
  {
    wraDescr: `Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.”`,
    wrapImg: `./img/joseph.png`,
    wraName: `Joseph McFall`,
    wraUserNAme: `front-end developer @joseph`
  },
  {
    wraDescr: `"Using FlowBite has been fantastic for my workflow. It made it really easy to create a very good looking project in no time.Every designer should have this in their toolbox!"`,
    wrapImg: `./img/roberta.png`,
    wraName: `Roberta Casas`,
    wraUserNAme: `Web developer @themesberg`
  },
  {
    wraDescr: `Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.”`,
    wrapImg: `./img/joseph.png`,
    wraName: `Joseph McFall`,
    wraUserNAme: `front-end developer @joseph`
  },
  {
    wraDescr: `"Using FlowBite has been fantastic for my workflow. It made it really easy to create a very good looking project in no time.Every designer should have this in their toolbox!"`,
    wrapImg: `./img/roberta.png`,
    wraName: `Roberta Casas`,
    wraUserNAme: `Web developer @themesberg`
  },
  {
    wraDescr: `Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.”`,
    wrapImg: `./img/joseph.png`,
    wraName: `Joseph McFall`,
    wraUserNAme: `front-end developer @joseph`
  },
  {
    wraDescr: `"Using FlowBite has been fantastic for my workflow. It made it really easy to create a very good looking project in no time.Every designer should have this in their toolbox!"`,
    wrapImg: `./img/roberta.png`,
    wraName: `Roberta Casas`,
    wraUserNAme: `Web developer @themesberg`
  },
  {
    wraDescr: `Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.”`,
    wrapImg: `./img/joseph.png`,
    wraName: `Joseph McFall`,
    wraUserNAme: `front-end developer @joseph`
  },
  {
    wraDescr: `"Using FlowBite has been fantastic for my workflow. It made it really easy to create a very good looking project in no time.Every designer should have this in their toolbox!"`,
    wrapImg: `./img/roberta.png`,
    wraName: `Roberta Casas`,
    wraUserNAme: `Web developer @themesberg`
  },
  {
    wraDescr: `Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.”`,
    wrapImg: `./img/joseph.png`,
    wraName: `Joseph McFall`,
    wraUserNAme: `front-end developer @joseph`
  },
];


function slider() {
  const wrapGrid = document.querySelector('.wrapper');
  wrapGrid.innerHTML = '';
  wrapCard.forEach(({ wraDescr, wrapImg, wraName, wraUserNAme }) => {
    const wrapdHTML = addWrapper(wraDescr, wrapImg, wraName, wraUserNAme);
    wrapGrid.innerHTML += wrapdHTML;
  })
}
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    initialSlide: 2,
    pagination: {
      el: '.pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    breakpoints: {
      310: {
        slidesPerView: 1.2,
        spaceBetween: 15
      },
      640: {
        slidesPerView: 1.7,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      },
    }
  });

  slider();
});


