import PixabayService from './js/apiService';
import { refs } from './js/refs';
import createMarkup from './js/createMarkup';
import LoadMoreBtn from './js/loadMore-btn';

const pixabayService = new PixabayService();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true
});

refs.formRef.addEventListener('submit', onSearch);
refs.morePhotoBtn.addEventListener('click', fetchPhoto)

function onSearch(e) {
  e.preventDefault();

  pixabayService.query = e.currentTarget.elements.query.value;
  if (pixabayService.query === '') {
    return alert('Введіть параметр пошуку')
  }

  loadMoreBtn.show();
  pixabayService.resetPage();
  clearPhotoContainer();
  fetchPhoto();
}


function fetchPhoto() {
  loadMoreBtn.disable();
  pixabayService.fetchPhoto().then(cards => {
    appendCardsMarkup(cards);
    loadMoreBtn.enable();
    
})
};

function appendCardsMarkup(cards) {//ф-ція розмітки
  refs.gallery.insertAdjacentHTML('beforeend', createMarkup(cards))
};

function clearPhotoContainer() {//ф-ція очищення розмітки при кожному сабміті
  refs.gallery.innerHTML = '';
}

