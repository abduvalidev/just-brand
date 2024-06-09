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
