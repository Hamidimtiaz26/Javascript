const apiURL = "https://api.github.com/users/";
const main = document.querySelector("#main");
const form = document.querySelector("#form");
const search = document.querySelector("#search");


async function getUser(username) {
  const resp = await fetch(apiURL + username);
  const responseData = await resp.json();

  getRepos(username);
  createUserCard(responseData);

}

async function getRepos(username) {
  const resp = await fetch(apiURL + username + "/repos");
  const responseData = await resp.json();
  console.log(responseData);

  addReposToCard(responseData)

}


function createUserCard(user) {

  const card = document.createElement("div");
  card.classList.add("card");

  const cardHTML = `
 <div class="card">
    <div class="card__img">
      <img src="${user.avatar_url}" alt="${user.name}">
    </div>
  <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>

       <ul class="info">
       <li>${user.following} <strong>Following</strong></li>
      <li>${user.followers} <strong>Followers</strong></li>
      <li>${user.public_repos} <strong>Public Repos</strong></li>
      </ul>
      
      <div class="repos" id="repos"></div>
     </div>
     </div>
  `
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");


  //We can sort repos by starred repos number
  repos.
    sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
    .forEach(repo => {
      const repoEl = document.createElement("a");
      repoEl.classList.add("repo");
      repoEl.href = `${repo.html_url}`
      repoEl.target = "_blank";
      repoEl.innerText = `${repo.name}`;
      reposEl.append(repoEl);

    })
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const user = search.value;

  if (user) {
    getUser(user);
    search.value = '';
  }
})