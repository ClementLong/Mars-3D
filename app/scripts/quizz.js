const quizz = {}

quizz.yes = document.querySelector('.yes')
quizz.no = document.querySelector('.no')
quizz.expConext = document.querySelector('.exp__context')
quizz.expQuestion = document.querySelector('.exp__question')
quizz.response = []
quizz.state = 0

quizz.update = () => {
  quizz.request = new XMLHttpRequest();
  quizz.request.open('GET', '../app/data/questions.json', false);
  quizz.request.send(null)
  quizz.state++

  quizz.answer = JSON.parse(quizz.request.responseText)

  let currentQuestion = quizz.answer.questions[quizz.state-1]

  quizz.expConext.innerHTML = currentQuestion.context
  quizz.expQuestion.innerHTML = currentQuestion.question

  if(quizz.state > 3) {
    console.log('finito')
  }
}

quizz.init = () => {
  quizz.update()

  quizz.yes.addEventListener('click', () => {
    quizz.update()
    quizz.response.push(true)
  })
  quizz.no.addEventListener('click', () => {
    quizz.update()
    console.log(quizz.response)
    quizz.response.push(false)
  })
}

quizz.init()
