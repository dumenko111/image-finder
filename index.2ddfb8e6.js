const e={formRef:document.querySelector("#search-form"),gallery:document.querySelector(".gallery"),morePhotoBtn:document.querySelector('[data-action="load-more"]')};function t(e){return e.map((({webformatURL:e,likes:t,views:n,comments:s,downloads:r})=>`<div class="photo-card">\n  <img src="${e}" alt="" width="440" height="300"/>\n\n  <div class="stats">\n    <p class="stats-item">\n      <i class="material-icons">thumb_up</i>\n      ${t}\n    </p>\n    <p class="stats-item">\n      <i class="material-icons">visibility</i>\n      ${n}\n    </p>\n    <p class="stats-item">\n      <i class="material-icons">comment</i>\n      ${s}\n    </p>\n    <p class="stats-item">\n      <i class="material-icons">cloud_download</i>\n      ${r}\n    </p>\n  </div>\n</div>`)).join("")}const n=new class{fetchPhoto(e){return console.log(this),fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=26979018-8f50a5ae15f0c572be2195341`).then((e=>e.json())).then((({hits:e})=>(this.page+=1,e)))}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}constructor(){this.searchQuery="",this.page=1}};function s(){n.fetchPhoto().then((n=>{!function(n){e.gallery.insertAdjacentHTML("beforeend",t(n))}(n)}))}e.formRef.addEventListener("submit",(function(t){if(t.preventDefault(),n.query=t.currentTarget.elements.query.value,""===n.query)return alert("Введіть параметр пошуку");n.resetPage(),e.gallery.innerHTML="",s()}));const r=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&""!==n.query&&s()}))}),{rootMargin:"150px"}),a=document.querySelector("#sentinel");r.observe(a);
//# sourceMappingURL=index.2ddfb8e6.js.map