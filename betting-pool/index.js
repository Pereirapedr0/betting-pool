let times = [
  {nome:'Clube Athletico Paranaense', jogos: 0, pontos:0},
  {nome:'Atletico Goianiense', jogos: 0, pontos:0},
  {nome:'Atletico Mineiro', jogos: 0, pontos:0},
  {nome:'Bahia Esporte Clube', jogos: 0, pontos:0},
  {nome:'Botafogo Futebol e Regatas', jogos: 0, pontos:0},
  {nome:'Red Bull Bragantino', jogos: 0, pontos:0},
  {nome:'Criciuma Futebol Clube', jogos: 0, pontos:0},
  {nome:'Cruzeiro Esporte Clube', jogos: 0, pontos:0},
  {nome:'Cuiaba Esporte Clube', jogos: 0, pontos:0},
  {nome:'Clube de Regatas Flamengo', jogos: 0, pontos:0},
  {nome:'Fluminense Futebol Clube', jogos: 0, pontos:0},
  {nome:'Fortaleza Esporte Clube', jogos: 0, pontos:0},
  {nome:'Gremio Esporte Clube', jogos: 0, pontos:0},
  {nome:'Sociedade Esportiva Internacinal', jogos: 0, pontos:0},
  {nome:'Juventude Esporte Clube', jogos: 0, pontos:0},
  {nome:'Palmeiras Futebol Clube', jogos: 0, pontos:0},
  {nome:'São Paulo Futebol Clube', jogos: 0, pontos:0},
  {nome:'Clube Regatas Vasco da Gama', jogos: 0, pontos:0},
  {nome:'Vitória Esporte Clube', jogos: 0, pontos:0},
  {nome:'Sociedade Esportiva Corinthians Paulista', jogos: 0, pontos:0}
];

    function getInputValues() {
      const inputData = document.getElementById('team1').value;

      calculateRanking()
    }


    function calculateRanking() {
      times.sort((a, b) => b.pontos - a.pontos);

      let rankingTable = document.getElementById("ranking_table");
      let tbody = rankingTable.querySelector('tbody');

      tbody.innerHTML = '';

      times.forEach((time, index) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${time.nome}</td>
            <td>${time.jogos}</td>
            <td>${time.pontos}</td>
        `;
        tbody.appendChild(tr);
      });
    

    rankingTable = `
          <table border="1" id="ranking_table">
              <caption>Caption</caption>
              <thead>
                 
              </thead>
              <tbody>
              <tr>
                  
              </tr>
              <tr>
                  
              </tr>
              <tbody>
          </table>
      `;

    const table = document.getElementById("ranking_table")
    if (!table) {
      const body = document.getElementsByTagName('body')[0];
      body.insertAdjacentHTML('beforeend', rankingTable)
    }
  }




    let rodadas;
    let rodada;
    window.onload = function () {
      const timesCopia = [...times];
      rodadas = gerarRodadas(timesCopia);
      montarRodadaHTML();
    }

    function randomizeResult() {
      for (let i = 0; i < rodada.length; i++) {
        const input = document.getElementById(`team${rodada[i][0]}`);
        const input1 = document.getElementById(`team${rodada[i][1]}`);
        let team1 = Math.floor(Math.random() * 4);
        let team0 = Math.floor(Math.random() * 4);
        input.value = team1;
        input1.value = team0;
      }
    }
    function finishRound() {
      for (let i = 0; i < times.length; i++) {
        if (i % 2 == 0) {
          const goal1 = document.getElementById(`team${times[i].nome}`).value;
          const goal2 = document.getElementById(`team${times[i+ 1].nome}`).value;
          console.log(goal1);
          console.log(goal2);
          if (goal1 > goal2) {
            times[i].pontos = times[i].pontos + 3
          } if (goal2 > goal1) {
            times[i + 1].pontos = times[i + 1].pontos + 3
          } else if (goal1 == goal2) {
            times[i].pontos = times[i].pontos + 1
            times[i + 1].pontos = times[i + 1].pontos + 1
          }
        }
        times[i].jogos = times[i].jogos + 1;
      }
      calculateRanking();
    }
    function montarRodadaHTML() {
      const game = document.getElementById("matches");
      rodada = rodadas.pop();
      if (game) {
        for (let i = 0; i < rodada.length; i++) {
          let jogo =
            `<div class="match">
            <label for="team${rodada[i][0]}">${rodada[i][0]}</label>
            <input type="text" id="team${rodada[i][0]}" name="" required>
            <p class="versus"> X </p>
            <input type="text" id="team${rodada[i][1]}" name="" required>
            <label for="team${rodada[i][1]}">${rodada[i][1]}</label>
          </div>`;
          game.insertAdjacentHTML('afterend', jogo);
        }
      }
    };

    function newRound() {

      const formulario = document.getElementById('formulario');

      const divs = formulario.getElementsByClassName('match');

      const divsArray = Array.from(divs);

      divsArray.forEach(function (div) {
        div.parentNode.removeChild(div);
      });
      montarRodadaHTML();

    }