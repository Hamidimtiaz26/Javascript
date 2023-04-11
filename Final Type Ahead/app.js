

//declaring an empty array so that i can push data from api later into it.

const cities = [];
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//This function is fecting data from api named endpoint and then push data into cities array
const fetchingData = async () => {
  const request = await fetch(endpoint);
  const response = await request.json();
  //Using spread operator so that we can add all the cities into array
  cities.push(...response);
}
//Selecting input so that later we can addeventlisteners to it
const searchInput = document.querySelector(".search");
//selecting suggestions so can change innerHTML of it later
const suggestions = document.querySelector(".suggestions");


//findMatches function takes value from and cities array that we have created before 
//and then filter those city and state that matches our regular expression and return array of those cities or state
const findMatches = function (wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    console.log(regex);
    return place.city.match(regex) || place.state.match(regex);
  })
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

//This is the main function where we are changing our innerHTML of suggestion.
//Two addEventListners invoke this function keyup or change of input.

//What it does:
//It invokes the findMatches function which take cities array and input.value as a argument and save the result from findMatches into a variable. Then i use forEach array method where it checks each element present in the array of dataFromFindMatches with regular Expression. If it matches regular Expression then we are replacing the matched input value with the span of class highlight that contain input value.
//Then we are pushing the matched data into an array of results.
//*** We can also use map method which return us array but i want to do this way. For map method see another file(app.js) */
const displayMatch = function () {

  const dataFromFindMatches = findMatches(this.value, cities);
  let result = [];

  console.log(dataFromFindMatches);
  const re = dataFromFindMatches.forEach((eachMatch) => {
    console.log('eachMatch is:', eachMatch)
    const regex = new RegExp(this.value, 'gi');
    const cityName = eachMatch.city.replace(regex, `<span class="highlight">${this.value}</span>`);
    const stateName = eachMatch.state.replace(regex, `<span class="highlight">${this.value}</span>`);
    result.push(`<li  class="panel-block is-flex is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center">
    <span class="name">${cityName},${stateName}</span>
    <span class="population">${numberWithCommas(eachMatch.population)}</span>
    </li>`)
  });
  //To join the element present inside of array. Join method gives us string.
  result = result.join("");
  console.log(result);

  //checking if the input value is not empty set innerHTML to result.
  if (searchInput.value != "") {
    suggestions.innerHTML = result;
  } else {
    suggestions.innerHTML = `<li
    class="panel-block is-flex is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center">
    Find a city
    </li>
    <li
    class="panel-block is-flex is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center">
    or A State
    </li>`
  }

}

searchInput.addEventListener("change", displayMatch);
searchInput.addEventListener("keyup", displayMatch);


fetchingData();