

function gerarRodadas(times) {
    const numeroDeRodadas = times.length - 1;
    const numeroDePartidasPorRodada = times.length / 2;

    const rodadas = [];

    for (let rodada = 0; rodada < numeroDeRodadas; rodada++) {
        const partidas = [];

        for (let partida = 0; partida < numeroDePartidasPorRodada; partida++) {
            const time1 = times[partida].nome;
            const time2 = times[times.length - 1 - partida].nome;
            partidas.push([time1, time2]);
        }
        rodadas.push(partidas);

        times.splice(1, 0, times.pop());
    }

    return rodadas;

}