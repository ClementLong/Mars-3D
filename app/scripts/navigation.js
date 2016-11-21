const nav = {}

nav.button = {}
nav.button.begin = document.querySelector('.intro__action')
nav.button.next = document.querySelector('.exp__btn')

nav.scene = {}
nav.scene.intro = document.querySelector('.intro')
nav.scene.exp_intro = document.querySelector('.exp__intro')
nav.scene.exp_quizz = document.querySelector('.exp__quizz')
nav.scene.result = document.querySelector('.result')

nav.scene.exp_quizz.classList.add('flex')

nav.init = () => {
  nav.button.begin.addEventListener('click', () => {
    nav.scene.intro.classList.add('none')
    nav.scene.exp_intro.classList.add('block')
  })
  nav.button.next.addEventListener('click', () => {
    nav.scene.exp_intro.classList.remove('block')
    nav.scene.exp_quizz.classList.add('flex')
  })
}

nav.init();
