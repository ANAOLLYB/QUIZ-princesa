document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const respostas = [];
  for (let i = 1; i <= 5; i++) {
    const resposta = document.querySelector(`input[name="q${i}"]:checked`);
    if (resposta) respostas.push(resposta.value);
  }

  if (respostas.length < 5) {
    alert("Responda todas as perguntas para descobrir sua princesa!");
    return;
  }

  const contagem = {};
  respostas.forEach(r => contagem[r] = (contagem[r] || 0) + 1);

  const princesa = Object.keys(contagem).reduce((a, b) => contagem[a] > contagem[b] ? a : b);

  const princesas = {
    bela: {
      nome: "Bela 🌹",
      imagem: "imagens/bela.png",
      frase: "Você é sábia, graciosa e enxerga a beleza que está no coração."
    },
    ariel: {
      nome: "Ariel 🐚",
      imagem: "imagens/ariel.png",
      frase: "Você é curiosa e corajosa, pronta para viver novas aventuras!"
    },
    cinderela: {
      nome: "Cinderela 👠",
      imagem: "imagens/cinderela.png",
      frase: "Você mantém a fé mesmo nos dias difíceis e acredita no poder dos sonhos."
    },
    rapunzel: {
      nome: "Rapunzel 🌸",
      imagem: "imagens/rapunzel.png",
      frase: "Você tem uma luz própria que ilumina o mundo ao seu redor!"
    },
    elsa: {
      nome: "Elsa ❄️",
      imagem: "imagens/elsa.png",
      frase: "Você é forte, reservada e tem um coração nobre — o frio nunca te incomodou."
    }
  };

  const resultado = princesas[princesa];
  document.getElementById("princesa-nome").textContent = resultado.nome;
  document.getElementById("princesa-imagem").src = resultado.imagem;
  document.getElementById("princesa-frase").textContent = resultado.frase;

  document.getElementById("resultado").classList.remove("oculto");
});
