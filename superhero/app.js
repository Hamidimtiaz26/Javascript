const section = document.querySelector("#superheros");
const input = document.querySelector("#superhero__input");
const submitBtn = document.querySelector(".submitBtn");
const searchForm = document.querySelector("#searchForm");
const randomBtn = document.querySelector(".RandBtn");


searchForm.addEventListener("submit", function (e) {
  if (!input.value) {
    alert("Please enter a valid superhero name");
  }
  e.preventDefault();
  callForApi();
  removeElement();
})

const callForApi = async () => {
  const search = input.value;
  console.log(search);
  const request = await fetch(`https://superheroapi.com/api/227536946505914/search/${search}`)
  const data = await request.json();
  const resultsFromApi = data.results;
  input.value = "";
  elementCreation(resultsFromApi);
}




const elementCreation = (results) => {
  for (let result of results) {
    const div = document.createElement("div");
    div.classList.add("superhero");
    section.append(div);
    const title = document.createElement("h2");
    title.innerText = result.name;
    div.append(title);
    const newImg = document.createElement("img");
    newImg.classList.add("superhero__img")
    newImg.src = result.image.url;
    div.append(newImg);
    const fullName = document.createElement("h3");
    fullName.innerText = result.biography["full-name"];
    div.append(fullName);

    for (let i = 0; i < 6; i++) {
      const para = document.createElement("p");
      div.append(para);
    }
    const paragraphs = div.querySelectorAll("p");
    console.log(paragraphs);
    for (let i = 0; i < paragraphs.length; i++) {
      switch (i) {
        case 0:
          paragraphs[i].innerHTML = `Intelligence: <span class='intelligence bold'>${result.powerstats.intelligence}</span>`;
          paragraphs[i].classList.add("superhero__intelligence");
          break;
        case 1:
          paragraphs[i].innerHTML = `Power: <span class="power bold">${result.powerstats.power}</span>`;
          paragraphs[i].classList.add("superhero__power");
          break;
        case 2:
          paragraphs[i].innerHTML = `Strength: <span class="strength bold">${result.powerstats.strength}</span>`;
          paragraphs[i].classList.add("superhero__strength");
          break;
        case 3:
          paragraphs[i].innerHTML = `Combat: <span class="combat bold">${result.powerstats.combat}</span>`;
          paragraphs[i].classList.add("superhero__combat");
          break;
        case 4:
          paragraphs[i].innerHTML = `Speed: <span class="speed bold">${result.powerstats.speed}</span>`;
          paragraphs[i].classList.add("superhero__speed");
          break;
        case 5:
          paragraphs[i].innerHTML = `Durability: <span class="dura bold">${result.powerstats.durability}</span>`;
          paragraphs[i].classList.add("superhero__dura");
          break;
        default:
          break;
      }
    }
  }
  addClass();
}

const removeElement = () => {
  const divs = section.querySelectorAll("div");
  //Removing each div instead of removing each element one by one
  for (let div of divs) {
    div.remove();
  }
}

const addClass = () => {
  const divs = section.querySelectorAll("div");
  for (let i = 0; i < divs.length; i++) {
    divs[i].classList.add(`card-${i + 1}`);
  }
}
randomBtn.addEventListener("click", (e) => {
  randomSuperHero();
  removeElement();
})


const randomSuperHero = async () => {
  const randomNumber = Math.floor(Math.random() * 731) + 1;
  const request = await fetch(`https://superheroapi.com/api/227536946505914/${randomNumber}`)
  const data = await request.json();
  // const resultsFromApi = data.results;
  //Converting data into an array so that we can itreate over them
  elementCreation([data]);

}


// const randomElement = (data) => {
//   const div = document.createElement("div");
//   div.classList.add("superhero");
//   section.append(div);
//   const title = document.createElement("h2");
//   title.innerText = data.name;
//   div.append(title);
//   const newImg = document.createElement("img");
//   newImg.classList.add("superhero__img")
//   newImg.src = data.image.url;
//   div.append(newImg);
//   const fullName = document.createElement("h3");
//   fullName.innerText = data.biography["full-name"];
//   div.append(fullName);

//   for (let i = 0; i < 6; i++) {
//     const para = document.createElement("p");
//     div.append(para);
//   }
//   const paragraphs = div.querySelectorAll("p");
//   console.log(paragraphs);
//   for (let i = 0; i < paragraphs.length; i++) {
//     switch (i) {
//       case 0:
//         paragraphs[i].innerHTML = `Intelligence: <span class='intelligence bold'>${data.powerstats.intelligence}</span>`;
//         paragraphs[i].classList.add("superhero__intelligence");
//         break;
//       case 1:
//         paragraphs[i].innerHTML = `Power: <span class="power bold">${data.powerstats.power}</span>`;
//         paragraphs[i].classList.add("superhero__power");
//         break;
//       case 2:
//         paragraphs[i].innerHTML = `Strength: <span class="strength bold">${data.powerstats.strength}</span>`;
//         paragraphs[i].classList.add("superhero__strength");
//         break;
//       case 3:
//         paragraphs[i].innerHTML = `Combat: <span class="combat bold">${data.powerstats.combat}</span>`;
//         paragraphs[i].classList.add("superhero__combat");
//         break;
//       case 4:
//         paragraphs[i].innerHTML = `Speed: <span class="speed bold">${data.powerstats.speed}</span>`;
//         paragraphs[i].classList.add("superhero__speed");
//         break;
//       case 5:
//         paragraphs[i].innerHTML = `Durability: <span class="dura bold">${data.powerstats.durability}</span>`;
//         paragraphs[i].classList.add("superhero__dura");
//         break;
//       default:
//         break;
//     }
//   }
//   addClass();
// }
