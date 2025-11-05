const quizData = [
  {
    question: "Qual dessas palavras mais combina com você?",
    options: ["Curiosa", "Elegante", "Sonhadora", "Corajosa", "Gentil"]
  },
  {
    question: "Qual dessas comidas você escolheria?",
    options: ["Frutas frescas", "Chocolate quente", "Bolo de baunilha", "Torta de frutas feita em casa", "Croissant com café"]
  },
  {
    question: "Qual dessas cores você mais ama?",
    options: ["Verde-água", "Azul", "Dourado", "Roxo", "Amarelo"]
  },
  {
    question: "Qual dessas qualidades te define?",
    options: ["Curiosidade", "Autoconfiança", "Esperança", "Criatividade", "Inteligência"]
  },
  {
    question: "Como você age diante de desafios?",
    options: ["Sigo meu coração", "Mantenho a calma", "Acredito em milagres", "Encontro um jeito novo", "Aprendo e cresço com eles"]
  }
];

const resultData = {
  "Ariel": {
    img: "ariel.png",
    text: "Você é a Ariel! Curiosa e aventureira, você acredita que sempre há algo novo para descobrir!"
  },
  "Elsa": {
    img: "elsa.png",
    text: "Você é a Elsa! Forte e confiante, aprendeu que o amor é o verdadeiro poder que transforma tudo!"
  },
  "Cinderela": {
    img: "cinderela.png",
    text: "Você é a Cinderela! Mesmo diante das dificuldades, seu coração puro e gentil sempre brilha!"
  },
  "Rapunzel": {
    img: "rapunzel.png",
    text: "Você é a Rapunzel! Criativa e sonhadora, você ilumina a vida de quem está ao seu redor!"
  },
  "Bela": {
    img: "bela.png",
    text: "Você é a Bela! Ama conhecimento e enxerga a beleza que vai além das aparências!"
  }
};

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");

let currentQuestion = 0;
let score = {
  "Ariel": 0,
  "Elsa": 0,
  "Cinderela": 0,
  "Rapunzel": 0,
  "Bela": 0
};

function showQuestion() {
  const question = quizData[currentQuestion];
  quizContainer.innerHTML = `
    <h2>${question.question}</h2>
    ${question.options.map(option => `
      <button onclick="selectAnswer('${option}')">${option}</button>
    `).join("")}
  `;
}

function selectAnswer(option) {
  // Atribui pontos a princesas conforme palavras-chave
  if (["Curiosa", "Frutas frescas", "Verde-água", "Curiosidade", "Sigo meu coração"].includes(option)) score.Ariel++;
  if (["Elegante", "Chocolate quente", "Azul", "Autoconfiança", "Mantenho a calma"].includes(option)) score.Elsa++;
  if (["Sonhadora", "Bolo de baunilha", "Dourado", "Esperança", "Acredito em milagres"].includes(option)) score.Cinderela++;
  if (["Corajosa", "Torta de frutas feita em casa", "Roxo", "Criatividade", "Encontro um jeito novo"].includes(option)) score.Rapunzel++;
  if (["Gentil", "Croissant com café", "Amarelo", "Inteligência", "Aprendo e cresço com eles"].includes(option)) score.Bela++;

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const princess = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
  const { img, text } = resultData[princess];

  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  resultContainer.innerHTML = `
    <h2>${princess}</h2>
    <img src="${img}" alt="${princess}">
    <p>${text}</p>
    <button onclick="restartQuiz()">Refazer o quiz</button>
  `;
}

function restartQuiz() {
  currentQuestion = 0;
  for (let p in score) score[p] = 0;
  resultContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  showQuestion();
}

showQuestion();


