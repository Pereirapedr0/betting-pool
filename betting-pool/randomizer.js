const partidas = [];

// função recursiva
function gerarRodada(partidas) {
    const rodadaSendoConstruida = []
    const times = [1, 2, 3, 4];
    const timesJaNaRodada = [];

    for (let i = 0; i < times.length; i++) {
        for (let j = i + 1; j < times.length; j++) {
            const timesNaoEstaoNaRodada = !timesJaNaRodada.includes(times[i]) && !timesJaNaRodada.includes(times[j]);
            if (timesNaoEstaoNaRodada) {
                if (partidas.length === 0) {
                    rodadaSendoConstruida.push([times[i], times[j]]);
                    timesJaNaRodada.push(times[i]);
                    timesJaNaRodada.push(times[j]);
                } else {
                    const partida = [times[i], times[j]];
                    const jaAconteceu = partidas.some(partidaAnterior =>
                        JSON.stringify(partida) === JSON.stringify(partidaAnterior)
                    );

                    if (!jaAconteceu) {
                        rodadaSendoConstruida.push([times[i], times[j]]);
                        timesJaNaRodada.push(times[i]);
                        timesJaNaRodada.push(times[j]);
                    }
                }
            }
        }
    }

    return rodadaSendoConstruida;
}


// refatorar pra não repetir código: Criar uma engine teste.
const rodada1 = gerarRodada(partidas);
partidas.push(...rodada1);

const rodadaEsperada1 = [[1, 2], [3, 4]];
if (JSON.stringify(rodadaEsperada1) === JSON.stringify(rodada1)) {
    console.log('1: OK');
} else {
    console.log(rodada1);
    console.log('1: NÃO-OK');
}

const rodada2 = gerarRodada(partidas);
partidas.push(...rodada2);

const rodadaEsperada2 = [[1, 3], [2, 4]];
if (JSON.stringify(rodadaEsperada2) === JSON.stringify(rodada2)) {
    console.log('2: OK');
} else {
    console.log('2: NÃO-OK');
    console.log(rodada2);
}
const rodada3 = gerarRodada(partidas);
partidas.push(...rodada3);

const rodadaEsperada3 = [[1, 4], [2, 3]];
if (JSON.stringify(rodadaEsperada3) === JSON.stringify(rodada3)) {
    console.log('3: OK');
} else {
    console.log('3: NÃO-OK');
    console.log(rodada3);
}

