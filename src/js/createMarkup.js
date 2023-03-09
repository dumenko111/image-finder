export default function createMarkup(cards) {
  return cards.map(({webformatURL, likes, views, comments, downloads}) => {
    return  `<div class="photo-card">
  <img src="${webformatURL}" alt="" width="440" height="300"/>

  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      ${likes}
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      ${views}
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      ${comments}
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      ${downloads}
    </p>
  </div>
</div>`
  }).join('')
};