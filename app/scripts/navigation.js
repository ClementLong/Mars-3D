const nav = {}

nav.button = {}
nav.button.begin = document.querySelector('.intro__action')
nav.button.next = document.querySelector('.exp__btn')
nav.button.result = document.querySelector('.yes')

nav.scene = {}
nav.scene.intro = document.querySelector('.intro')
nav.scene.exp_intro = document.querySelector('.exp__intro')
nav.scene.exp_quizz = document.querySelector('.exp__quizz')
nav.scene.result = document.querySelector('.result')

nav.init = () => {
  nav.button.begin.addEventListener('click', () => {
    nav.scene.intro.classList.add('none')
    nav.scene.exp_intro.classList.add('block')
  })
  nav.button.next.addEventListener('click', () => {
    nav.scene.exp_intro.classList.remove('block')
    nav.scene.exp_quizz.classList.add('flex')
    const Planet = require('./planet.js')
    const Quizz = require('./quizz.js')
  })
  nav.button.result.addEventListener('click', () => {
    nav.scene.exp_quizz.classList.remove('flex')
    nav.scene.result.classList.add('block')
  })
}

nav.init();
