const rodadasGeral = [];

function gerarRodada(rodadasAteAgora) {
    const rodadaSendoConstruida = []
    const times = [1, 2, 3, 4];
    const timesJaNaRodada = [];

    for (let i = 0; i < times.length; i++) {
        for (let j = i + 1; j < times.length; j++) {
            // i = 0; j = 2
            const timesNaoEstaoNaRodada = !timesJaNaRodada.includes(times[i]) && !timesJaNaRodada.includes(times[j]);
            if (timesNaoEstaoNaRodada) {
                // verificar se uma partida ja aconteceu antes em outra rodada

                if (rodadasAteAgora.length === 0) {
                    rodadaSendoConstruida.push([times[i], times[j]]);
                    timesJaNaRodada.push(times[i]);
                    timesJaNaRodada.push(times[j]);
                } else {
                    rodadasAteAgora.forEach((rodadaAnterior) => {
                        const partida = [times[i], times[j]];
                        const jaAconteceu = rodadaAnterior.find(partidaAnterior => JSON.stringify(partidaAnterior) === JSON.stringify(partida));
                        if (!jaAconteceu) {
                            console.log("partida Nova");
                            console.log(partida);
                            rodadaSendoConstruida.push([times[i], times[j]]);
                            timesJaNaRodada.push(times[i]);
                            timesJaNaRodada.push(times[j]);
                        }
                    })
                }

                /**
                 * rodadas [
                 *  'rodada' [
                 *    'partidas' [1, 2] [3, 4]
                 *  ],
                 *  'rodada' [
                 *    'partidas' [1, 3] [2, 4]
                 *  ]
                 * ]
                 * 
                 */


                // ---


            }
        }
    }

    return rodadaSendoConstruida;
}

const rodada1 = gerarRodada(rodadasGeral);
rodadasGeral.push(rodada1);

const rodadaEsperada1 = [[1, 2], [3, 4]];
if (JSON.stringify(rodadaEsperada1) === JSON.stringify(rodada1)) {
    console.log('1: OK');
} else {
    console.log(rodada1);
    console.log('1: NÃO-OK');
}

const rodada2 = gerarRodada(rodadasGeral);
rodadasGeral.push(rodada2);

const rodadaEsperada2 = [[1, 3], [2, 4]];
if (JSON.stringify(rodadaEsperada2) === JSON.stringify(rodada2)) {
    console.log('2: OK');
} else {
    console.log('2: NÃO-OK');
    console.log(rodada2);
}
const rodada3 = gerarRodada(rodadasGeral);
rodadasGeral.push(rodada3);

const rodadaEsperada3 = [[1, 4], [2, 3]];
if (JSON.stringify(rodadaEsperada3) === JSON.stringify(rodada3)) {
    console.log('2: OK');
} else {
    console.log('3: NÃO-OK');
    console.log(rodada2);
}

