import PixabayService from './js/apiService';
import { refs } from './js/refs';
import createMarkup from './js/createMarkup';
// import LoadMoreBtn from './js/loadMore-btn';//виключаємо клас для роботи з кнопкою load more i будемо використовувати infiniti scroll

const pixabayService = new PixabayService();
// const loadMoreBtn = new LoadMoreBtn({
//   selector: '[data-action="load-more"]',
//   hidden: true
// });

refs.formRef.addEventListener('submit', onSearch);//слухаємо submit на формі
// refs.morePhotoBtn.addEventListener('click', fetchPhoto)//кнопка load more більше не потрібна

function onSearch(e) {
  e.preventDefault();

  pixabayService.query = e.currentTarget.elements.query.value;
  if (pixabayService.query === '') {
    return alert('Введіть параметр пошуку')
  }

  // loadMoreBtn.show();
  pixabayService.resetPage();
  clearPhotoContainer();
  fetchPhoto();
}


function fetchPhoto() {
  // loadMoreBtn.disable();
  pixabayService.fetchPhoto().then(cards => {
    appendCardsMarkup(cards);
    // loadMoreBtn.enable();
    
})
};

function appendCardsMarkup(cards) {//ф-ція розмітки
  refs.gallery.insertAdjacentHTML('beforeend', createMarkup(cards))
};

function clearPhotoContainer() {//ф-ція очищення розмітки при кожному сабміті
  refs.gallery.innerHTML = '';
}




//8️⃣INFINITY SCROLL8️⃣ - INTESECTION OBSERVER/////////////////
const callback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && pixabayService.query !== '') {//в-сть isIntersecting вказує чи пересікає елемент target зараз viewport і перевіряємо чи строка запиту не порожня, якщо порожня то перший раз ігноруємо пересікання target
      fetchPhoto();
    }
  })
}

const options = {
  rootMargin: '150px',//в-сть яка оприділяє коли має спрацювати колбек (за 100рх до того як target відобразиться у viewport)
  // threshold: 0.5,//в-сть яка оприділяє коли має спрацювати колбек (0.5 це коли 50% буде видно у viewport)
}

const observer = new IntersectionObserver(callback, options);//ств. новий екземпляр і передаємо туди callback i options

const sentinel = document.querySelector('#sentinel')//елемент target за яким будемо стежити
observer.observe(sentinel);//вказуємо за яким елементом стежити
