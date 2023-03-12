//цей файл не підключений
const callback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {//в-сть isIntersecting вказує чи пересікає елемент target зараз viewport
      console.log('привіт з колбеку')
      console.log(entry.isIntersecting)
      console.log(entry.target)
    }
  })
}

const options = {
  rootMargin: '100px',//в-сть яка оприділяє коли має спрацювати колбек (за 100рх до того як target відобразиться у viewport)
  // threshold: 0.5,//в-сть яка оприділяє коли має спрацювати колбек (0.5 це коли 50% буде видно у viewport)
}

const observer = new IntersectionObserver(callback, options);//ств. новий екземпляр і передаємо туди callback i options

const sentinel = document.querySelector('#sentinel')//елемент target за яким будемо стежити
observer.observe(sentinel);//вказуємо за яким елементом стежити
