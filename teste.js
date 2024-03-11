
// Função para gerar todas as combinações únicas de partidas
function gerarPartidas(times) {
  const partidas = [];
  
  for (let i = 0; i < times.length; i++) {
    for (let j = i + 1; j < times.length; j++) {
      partidas.push([times[i], times[j]]);
    }
  }
  
  return partidas;
}

// Função para escolher uma partida aleatória da lista e removê-la
function escolherPartidaAleatoria(partidas) {
  const indice = Math.floor(Math.random() * partidas.length);
  const partida = partidas[indice];
  partidas.splice(indice, 1);
  return partida;
}

// Gerar todas as combinações de partidas
const todasPartidas = gerarPartidas(times);

const partidasPorRodada = 10;
const totalRodadas = 19;
const rodadas = [];

// Gerar as rodadas
for (let rodada = 0; rodada < totalRodadas; rodada++) {
  const rodadaAtual = [];
  
  for (let partida = 0; partida < partidasPorRodada; partida++) {
    const partidaEscolhida = escolherPartidaAleatoria(todasPartidas);
    rodadaAtual.push(partidaEscolhida);
  }
  
  rodadas.push(rodadaAtual);
}

// Exibir as partidas de cada rodada
rodadas.forEach((rodada, index) => {
  console.log(`Rodada ${index + 1}:`);
  rodada.forEach(partida => {
    console.log(`${partida[0]} x ${partida[1]}`);
  });
});
