function GetDaTa() {
  const apiKey = '1aa47cf8906c45df834db19a3265fac5';
  const params = {
    season: 2023,
    dateFrom: '2023-05-17',
    dateTo: '2023-05-20',
    limit: 10, // Giới hạn trả về 10 trận đấu
  };
  const queryString = new URLSearchParams(params).toString();
  fetch(
    `https://api.football-data.org/v4/competitions/PL/matches?${queryString}`,
    {
      method: 'GET',
      headers: {
        'X-Auth-Token': apiKey,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json(); // Chuyển đổi dữ liệu nhận được sang JSON
    })
    .then((data) => {
      console.log(data.matches.map((item) => item.awayTeam.name));
      const listMatch = document.querySelector('#utility-football-lists');
      console.log(listMatch);
      let html = '';
      data.matches.forEach((match) => {
        html += `
        <div class="utility-football-item flex relative mb-4 pb-3 items-center text-center justify-evenly">
                <div class="football-item-info">
                  <img class="logo w-full h-full object-cover" src="${match.awayTeam.crest}"/>
                  <div class="football-item-name mt-3 text-xs font-normal">${match.awayTeam.shortName}</div>
                </div>
                <p class="football-item-score article-bold">
                  <span>${match.score.fullTime.away}</span>
                  <span> - </span>
                  <span>${match.score.fullTime.home}</span>
                </p>
                <div class="football-item-info">
                  <img class="logo w-full h-full object-cover" src="${match.homeTeam.crest}"/>
                  <div class="football-item-name mt-3 text-xs font-normal">${match.homeTeam.shortName}</div>
                </div>
        </div>`;
      });
      listMatch.innerHTML = html;
    })
    .catch((error) => {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
    });
}

GetDaTa();
