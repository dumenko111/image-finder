export default class PixabayService {
   constructor() {
    this.searchQuery = '';//сюди записуємо введені дані в інпут (дані записуються в файлі індекс.js)
    this.page = 1;//поточна сторінка пагінації .. номер групи
  }

  fetchPhoto(searchQuery) {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '26979018-8f50a5ae15f0c572be2195341';
    console.log(this);

return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`)
  .then(r => r.json())
  .then(({hits}) => {
    this.page += 1//збільшуємо сторінку на 1 кожного разу при fetchі

    return hits//повертаємо масив об'єктів
  })
  }

  resetPage() {
    this.page = 1//скидуємо поточну сторінку на одиницю кожного разу при сабміті
  }

  get query() { //робимо гетер і сетер щоб в зовнішньому коді мати доступ до змінної searchQuery де ми зберігаємо введені дані в input
    return this.searchQuery
  }
  set query(newQuery) {
    this.searchQuery = newQuery
  }
}

