//Question 2
const apiKey = "9ab11330c253443eb7dc5fafbf0f9e8a";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=9ab11330c253443eb7dc5fafbf0f9e8a`;
const resultsContainer = document.querySelector(".results");

async function getData() {
  const response = await fetch(url);
  const results = await response.json();
  const gameInfo = results.results;
  resultsContainer.innerHTML = "";

  for (let i = 0; i < gameInfo.length; i++) {
    console.log(
      gameInfo[i].name + gameInfo[i].rating + gameInfo[i].tags.length
    );

    if (i === 8) {
      break;
    }
    resultsContainer.innerHTML += `<div class="result">Name: ${gameInfo[i].name}, Rating: ${gameInfo[i].rating}, Number of tags: ${gameInfo[i].tags.length}</div>`;
  }
}

getData();
