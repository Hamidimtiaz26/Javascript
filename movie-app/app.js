const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

//base url for image
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const main = document.querySelector("main");
const form = document.getElementById("form");
const search = document.getElementById("search");


//This will get popular movies from apiurl
getMovies(APIURL);

async function getMovies(url) {
  const response = await fetch(url);
  const respData = await response.json();
  showMovies(respData.results);
}


function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach(movie => {

    const movieEl = document.createElement("div");
    movieEl.className = "movie";
    movieEl.innerHTML = `
    <img src="${IMGPATH + movie.poster_path}" alt="">
    <div class="movie-info">
      <h3>${movie.title}</h3>
      <span class= ${getClassByRate(movie.vote_average)}>${movie.vote_average.toFixed(1)}</span>
    </div>
    <div class="overview">
      <h4>Overview:</h4>
      ${movie.overview};
    </div>
    `
    main.append(movieEl);
  });
};

function getClassByRate(vote_average) {
  if (vote_average >= 8) {
    return "green"
  }
  else if (vote_average >= 5) {
    return "orange"
  }
  else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  console.log(searchTerm);
  if (searchTerm) {
    getMovies(SEARCHAPI + searchTerm);
    search.value = "";
  }
})
