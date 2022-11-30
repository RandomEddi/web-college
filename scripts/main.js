const scrollBtn = document.querySelector('.scroll-btn')
const main = document.querySelector('main')
const burgerMenu = document.querySelector('.mobile-menu')
const closeBurgerMenu = document.querySelector('.nav-close')

scrollBtn.onclick = (e) => {
  e.preventDefault()
  let timer = setInterval(() => {
    const pageScroll =
      (document.documentElement && document.documentElement.scrollTop) ||
      (document.body && document.body.scrollTop)

    window.scrollBy(0, 15)
    if (pageScroll >= main.offsetTop) {
      clearInterval(timer)
      timer = null
    }
  }, 1)
}

burgerMenu.onclick = () => {
  document.querySelector('.mobile-nav').classList.add('active')
}
closeBurgerMenu.onclick = () => {
  document.querySelector('.mobile-nav').classList.remove('active')
}
