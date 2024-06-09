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



const threCard = [
  {
    swapImg: `<svg width="55" height="55" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M54.9198 43.71C53.358 42.1482 48.4345 38.5129 43.5462 35.6982C43.4933 35.7776 43.4404 35.8571 43.3873 35.9453C48.902 27.06 47.8167 15.2276 40.0961 7.50705C31.0961 -1.48412 16.5109 -1.48412 7.51085 7.50705C-1.48915 16.5159 -1.48032 31.0923 7.51085 40.0924C15.1609 47.7336 26.8344 48.8895 35.6932 43.5424C38.2432 47.9718 41.9579 53.1689 43.7138 54.9248C46.802 58.013 51.8314 58.0042 54.9197 54.916C58.008 51.8188 58.008 46.8071 54.9198 43.71ZM34.0256 34.0218C28.3786 39.66 19.2374 39.66 13.5904 34.0129C7.95212 28.3747 7.94329 19.2335 13.5904 13.5865C19.2286 7.94823 28.3786 7.94823 34.0168 13.5865C39.6639 19.2335 39.6639 28.3835 34.0256 34.0218Z" fill="url(#paint0_linear_111_5030)"/><defs><linearGradient id="paint0_linear_111_5030" x1="-4.01422" y1="29.0001" x2="64.6207" y2="29.0001" gradientUnits="userSpaceOnUse"><stop stop-color="#457EF8"/><stop offset="1" stop-color="#5E69DF"/></linearGradient></defs></svg>`,
    threeTitle: 'Find Your Notes',
    treeDesc: 'Search for over 200,000 study notes and past assignments!'
  },
  {
    swapImg: `<svg width="56" height="48" viewBox="0 0 56 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.5382 37.619H19.3891C17.6036 37.619 16.1556 36.1711 16.1556 34.3856V22.9492L20.8145 23.8467C22.4269 23.8467 23.2396 21.9022 22.1012 20.7573L18.8559 17.5121L12.5986 11.2548C12.2385 10.9011 11.7784 10.7173 11.3119 10.7173C10.8518 10.7173 10.3928 10.9011 10.0327 11.2548L3.77544 17.5121L0.531232 20.7573C-0.607141 21.9022 0.205522 23.8467 1.81795 23.8467L6.47679 22.9492V38.2393C6.47679 43.2421 10.5326 47.299 15.5365 47.299H16.1556H31.7403C34.4621 47.299 36.6593 45.0512 36.5776 42.3112C36.498 39.6614 34.188 37.619 31.5382 37.619Z" fill="url(#paint0_linear_111_5038)"/><path d="M24.4605 9.67886H36.6096C38.3951 9.67886 39.8431 11.1268 39.8431 12.9123V24.3487L35.1842 23.4511C33.5718 23.4511 32.7591 25.3957 33.8975 26.5405L37.1428 29.7858L43.4001 36.0431C43.7602 36.3968 44.2203 36.5806 44.6868 36.5806C45.1469 36.5806 45.6059 36.3968 45.966 36.0431L52.2233 29.7858L55.4686 26.5405C56.6069 25.3957 55.7943 23.4511 54.1819 23.4511L49.523 24.3487V9.05969C49.523 4.05687 45.4672 0 40.4633 0H39.8442H24.2584C21.5367 0 19.3395 2.24772 19.4212 4.98777C19.5007 7.63645 21.8108 9.67886 24.4605 9.67886Z" fill="url(#paint1_linear_111_5038)"/><defs><linearGradient id="paint0_linear_111_5038" x1="-3.09521" y1="29.0081" x2="41.3633" y2="29.0081" gradientUnits="userSpaceOnUse"><stop stop-color="#457EF8"/><stop offset="1" stop-color="#5E69DF"/></linearGradient><linearGradient id="paint1_linear_111_5038" x1="16.3236" y1="18.2903" x2="60.7835" y2="18.2903" gradientUnits="userSpaceOnUse"><stop stop-color="#457EF8"/><stop offset="1" stop-color="#5E69DF"/></linearGradient></defs></svg>`,
    threeTitle: 'Swap Your Credits',
    treeDesc: 'Download study resources by swapping your own or buying Exchange Credits.'
  },
  {
    swapImg: `<svg width="42" height="56" viewBox="0 0 42 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.375 6.375V49.5C0.375 50.9925 0.9675 52.4231 2.02313 53.4769C3.07688 54.5325 4.5075 55.125 6 55.125H36C37.4925 55.125 38.9231 54.5325 39.9769 53.4769C41.0325 52.4231 41.625 50.9925 41.625 49.5C41.625 41.3363 41.625 22.0387 41.625 13.875C41.625 12.3825 41.0325 10.9519 39.9769 9.89813C39.3787 9.29813 38.6587 8.84812 37.875 8.5725V6.375C37.875 4.8825 37.2825 3.45187 36.2269 2.39812C35.1731 1.3425 33.7425 0.75 32.25 0.75C25.7569 0.75 12.4931 0.75 6 0.75C4.5075 0.75 3.07688 1.3425 2.02313 2.39812C0.9675 3.45187 0.375 4.8825 0.375 6.375ZM9.75 12L4.125 11.9569V49.5C4.125 49.9969 4.32188 50.475 4.67438 50.8256C5.025 51.1781 5.50313 51.375 6 51.375H9.75V12ZM34.125 25.125V21.375C34.125 20.3813 33.7294 19.4269 33.0262 18.7238C32.3231 18.0206 31.3687 17.625 30.375 17.625C27.8794 17.625 23.4956 17.625 21 17.625C20.0063 17.625 19.0519 18.0206 18.3488 18.7238C17.6456 19.4269 17.25 20.3813 17.25 21.375V25.125C17.25 26.1187 17.6456 27.0731 18.3488 27.7762C19.0519 28.4794 20.0063 28.875 21 28.875H30.375C31.3687 28.875 32.3231 28.4794 33.0262 27.7762C33.7294 27.0731 34.125 26.1187 34.125 25.125ZM4.125 6.375C4.125 5.87813 4.32188 5.4 4.67438 5.04938C5.025 4.69688 5.50313 4.5 6 4.5H32.25C32.7469 4.5 33.225 4.69688 33.5756 5.04938C33.9281 5.4 34.125 5.87813 34.125 6.375V8.25H6C5.50313 8.25 5.025 8.05312 4.67438 7.70062C4.32188 7.35 4.125 6.87187 4.125 6.375Z" fill="url(#paint0_linear_111_5050)"/><defs><linearGradient id="paint0_linear_111_5050" x1="-3.11538" y1="27.9375" x2="47.0192" y2="27.9375" gradientUnits="userSpaceOnUse"><stop stop-color="#457EF8"/><stop offset="1" stop-color="#5E69DF"/></linearGradient></defs></svg>`,
    threeTitle: 'Study At Anytime',
    treeDesc: 'Study from your library anywhere, anytime.'
  },
];

function threeSwap() {
  const threeGrid = document.querySelector('.three-grid');
  threeGrid.innerHTML = '';
  threCard.forEach(({swapImg, threeTitle, treeDesc }) => {
    const threeHTML = threeCard(swapImg, threeTitle, treeDesc);
    threeGrid.innerHTML += threeHTML;
  })

}

threeSwap()



// swiper js

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
        spaceBetween: 10
      },
      768: {
        slidesPerView: 1.8,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 2.6,
        spaceBetween: 10
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 10
      },
    }
  });

  slider();
});
