// Variáveis
const primaryScreen = document.querySelector('.primary-screen');
const secondaryScreen = document.querySelector('.secondary-screen');
const cookieButton = document.querySelector('.primary-screen img');
let phraseRandomizer = Math.round(Math.random() * 10)

// Frases
let phrases = [
"Não espere pelo momento perfeito, comece hoje, com o que tem.",
"A flexibilidade é um superpoder, ajuste-se para seguir em frente.",
"Liberdade é pouco. O que desejo ainda não tem nome.",
"Que ninguém se engane, só se consegue a simplicidade através de muito trabalho.",
"Passei a vida tentando corrigir os erros que cometi na minha ânsia de acertar.",
"O que verdadeiramente somos é aquilo que o impossível cria em nós.",
"O que importa afinal, viver ou saber que se está vivendo?",
"Perder-se também é caminho.",
"Fique de vez em quando sozinho, senão você será submergido. Até o amor excessivo dos outros pode submergir uma pessoa.",
"Repito por pura alegria de viver: a salvação é pelo risco, sem o qual a vida não vale a pena!",
"Minhas desequilibradas palavras são o luxo de meu silêncio."
]

// Eventos
secondaryScreen.querySelector('button').addEventListener('click', resetButton)
cookieButton.addEventListener('click', cookieOpener);

// funções
function toggleScreen() {
  primaryScreen.classList.toggle('hide-element');
  secondaryScreen.classList.toggle('hide-element');
}

function newPhrase(){
  document.querySelector('.secondary-screen p').innerText = phrases[phraseRandomizer]
}

function cookieOpener(){
  toggleScreen()
  newPhrase()
}

function resetButton(){
  toggleScreen()
  phraseRandomizer = Math.round(Math.random() * 10)
}