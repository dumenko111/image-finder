const BASE_URL = 'https://pixabay.com/api/';
const KEY = '26979018-8f50a5ae15f0c572be2195341';
let counterPage = 1;

export default function fetchPhoto(value) {
  return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${value}&page=${counterPage}&per_page=12&key=${KEY}`)
    .then(res => res.json())
    .then(({hits}) => {
      return hits
    })
}

