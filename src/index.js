import apiService from './js/apiService';
import { refs } from './js/refs';
import createMarkup from './js/createMarkup';




refs.formRef.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const query = e.currentTarget.elements.query.value;

  apiService(query).then(cards => {
    appendCardsMarkup(cards)
    console.log(cards)
  });
}


function appendCardsMarkup(cards) {
  refs.gallery.insertAdjacentHTML('beforeend', createMarkup(cards))
};