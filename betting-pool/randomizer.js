function gerarRodadas(partidas) {
    const rodadaSendoConstruida = [] 
    const timesJaNaRodada = [];

    for (let i = 0; i < times.length; i++) {
        for (let j = i + 1; j < times.length; j++) {
            const timesNaoEstaoNaRodada = !timesJaNaRodada.includes(times[i].nome) && !timesJaNaRodada.includes(times[j].nome);
            if (timesNaoEstaoNaRodada) {
                if (partidas.length === 0) {
                    rodadaSendoConstruida.push([times[i].nome, times[j].nome]);
                    timesJaNaRodada.push(times[i].nome);
                    timesJaNaRodada.push(times[j].nome);
                } else {
                    const partida = [times[i].nome, times[j].nome];
                    const jaAconteceu = partidas.some(partidaAnterior =>
                        JSON.stringify(partida) === JSON.stringify(partidaAnterior)
                    );

                    if (!jaAconteceu) {
                        rodadaSendoConstruida.push([times[i].nome, times[j].nome]);
                        timesJaNaRodada.push(times[i].nome);
                        timesJaNaRodada.push(times[j].nome);
                    }
                }
            }
        }
    }

    return rodadaSendoConstruida;
};