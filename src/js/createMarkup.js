export default function createMarkup(cards) {
  return cards.map(card => {
    return  `<div class="photo-card">
  <img src="${card.webformatURL}" alt="" />

  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      ${card.likes}
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      ${card.views}
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      ${card.comments}
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      ${card.downloads}
    </p>
  </div>
</div>`
  }).join('')
};