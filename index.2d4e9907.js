const e={formRef:document.querySelector("#search-form"),gallery:document.querySelector(".gallery"),LoadMoreBtn:document.querySelector(".search-more--button")};function t(e){return e.map((e=>`<div class="photo-card">\n  <img src="${e.webformatURL}" alt="" />\n\n  <div class="stats">\n    <p class="stats-item">\n      <i class="material-icons">thumb_up</i>\n      ${e.likes}\n    </p>\n    <p class="stats-item">\n      <i class="material-icons">visibility</i>\n      ${e.views}\n    </p>\n    <p class="stats-item">\n      <i class="material-icons">comment</i>\n      ${e.comments}\n    </p>\n    <p class="stats-item">\n      <i class="material-icons">cloud_download</i>\n      ${e.downloads}\n    </p>\n  </div>\n</div>`)).join("")}e.formRef.addEventListener("submit",(function(n){n.preventDefault();(a=n.currentTarget.elements.query.value,fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${a}&page=1&per_page=12&key=26979018-8f50a5ae15f0c572be2195341`).then((e=>e.json())).then((({hits:e})=>e))).then((n=>{!function(n){e.gallery.insertAdjacentHTML("beforeend",t(n))}(n),console.log(n)}));var a}));
//# sourceMappingURL=index.2d4e9907.js.map