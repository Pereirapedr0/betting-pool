const rodadas = [];

function gerarRodada(rodadas) {
    const rodada = []
    const times = [1, 2, 3, 4];
    const timesJaNaRodada = [];

    for (let i = 0; i < times.length; i++) {
        for (let j = i + 1; j < times.length; j++) {
            // i = 0; j = 2
            if (!timesJaNaRodada.includes(times[i]) && !timesJaNaRodada.includes(times[j])) { 
                rodada.push([times[i], times[j]]);
                timesJaNaRodada.push(times[i]);
                timesJaNaRodada.push(times[j]);
            }
        }
    }

    return rodada;
}

const rodada1 = gerarRodada(rodadas);
rodadas.push(rodada1);

const rodadaEsperada1 = [[1, 2], [3, 4]];
if (JSON.stringify(rodadaEsperada1) === JSON.stringify(rodada1)) {
    console.log('1: OK');
} else {
    console.log(rodada1);
    console.log('1: NÃO-OK');
}

const rodada2 = gerarRodada(rodadas);
rodadas.push(rodada2);

const rodadaEsperada2 = [[ 1, 3 ], [ 2, 4 ]];
if (JSON.stringify(rodadaEsperada2) === JSON.stringify(rodada2)) {
  console.log('2: OK');
} else {
  console.log('2: NÃO-OK');
  console.log(rodada2);
}

