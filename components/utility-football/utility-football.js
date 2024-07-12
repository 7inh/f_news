function GetDaTa() {
  fetch('https://api.openligadb.de/getmatchdata/em/2024')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json(); // Chuyển đổi dữ liệu nhận được sang JSON
    })
    .then((data) => {
      const listMatch = document.querySelector('#utility-football-lists');
      let html = '';
      data.forEach((match) => {
        if (match.matchResults.length > 0) {
          html += `
        <div class="utility-football-item flex relative mb-4 pb-3 items-center text-center justify-evenly">
                <div class="football-item-info">
                  <img class="logo w-full h-full object-cover" src="${
                    match.team1.teamIconUrl
                  }"/>
                  <div class="football-item-name mt-3 text-xs font-normal">${
                    match.team1.shortName
                  }</div>
                </div>
                <p class="football-item-score article-bold">
                  <span>${
                    match.matchResults.map((item) => item.pointsTeam1)[0]
                  }</span>
                  <span> - </span>
                  <span>${
                    match.matchResults.map((item) => item.pointsTeam2)[0]
                  }</span>
                </p>
                <div class="football-item-info">
                  <img class="logo w-full h-full object-cover" src="${
                    match.team2.teamIconUrl
                  }"/>
                  <div class="football-item-name mt-3 text-xs font-normal">${
                    match.team2.shortName
                  }</div>
                </div>
        </div>`;
        } else {
          const dateTime = new Date(match.matchDateTime);
          html += `
        <div class="utility-football-item flex relative mb-4 pb-3 items-center text-center justify-evenly">
                <div class="football-item-info">
                  <img class="logo w-full h-full object-cover" src="${
                    match.team1.teamIconUrl
                  }"/>
                  <div class="football-item-name mt-3 text-xs font-normal">${
                    match.team1.shortName
                  }</div>
                </div>
                <p class="football-item-score text-base font-semibold">
                  <span>${dateTime.toLocaleDateString()}</span>
                </p>
                <div class="football-item-info">
                  <img class="logo w-full h-full object-cover" src="${
                    match.team2.teamIconUrl
                  }"/>
                  <div class="football-item-name mt-3 text-xs font-normal">${
                    match.team2.shortName
                  }</div>
                </div>
        </div>`;
        }
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
