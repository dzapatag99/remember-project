const btnMovies = document.querySelector('#movies');
const btnSeries = document.querySelector('#series');
const btnSongs = document.querySelector('#songs');
const btnGames = document.querySelector('#games');
const btnRestaurants = document.querySelector('#restaurants');
const content = document.querySelector('#content-remember');
const btnLogOut = document.querySelector("#btnLogOut");

init();

function init(){
  showMovies();
  cargarEventListeners();
  showUser();
}

function cargarEventListeners(){
  btnMovies.addEventListener("click", () => {
    content.innerHTML = '';
    showMovies();
  });
  
  btnSeries.addEventListener("click", () => {
    content.innerHTML = '';
    showSeries();
  });

  btnRestaurants.addEventListener("click", () => {
    content.innerHTML = '';
    showRestaurants();
  });

  btnSongs.addEventListener("click", () => {
    content.innerHTML = '';
    showSongs();
  });

  btnGames.addEventListener("click", () => {
    content.innerHTML = '';
    showVideogames();
  });

  btnLogOut.addEventListener("click", () =>{
    localStorage.removeItem('name1'); 
    localStorage.removeItem('pw'); 
    location.reload();
    window.location.href = "./sign-in.html";
});
}


function showMovies(){
    fetch("./data/movies.json")
    .then(function(res) {
        return res.json();
    })
    .then(function(data){
        let html = document.querySelector("#content-remember");
        let movies = data.movies;
        for (let i = 0; i < movies.length; i++) {
          html.innerHTML +=`
          <div class="col">
            <div class="card shadow-sm">
            <img src="${movies[i].imgMovie}" width="100%" height="225">
  
              <div class="card-body">
              <h3>${movies[i].movieName} </h3>
                <p class="card-text">${movies[i].description}</p>
                <div class="d-flex justify-content-between align-items-center">
                <img src="${movies[i].pegi}" width="15%" height="75">
                  <img src="${movies[i].imgStars}" width="20%" height="25">
                </div>
              </div>
            </div>
          </div>
          `
        }
    })
    .catch(function(error) {
        console.log(error);
    });
}

function showRestaurants(){
  fetch("./data/restaurants.json")
  .then(function(res) {
      return res.json();
  })
  .then(function(data){
      let html = document.querySelector("#content-remember");
      let restaurants = data.restaurants;
      for (let i = 0; i < restaurants.length; i++) {
        html.innerHTML +=`

        <div class="col">
          <div class="card shadow-sm">
          <img src="${restaurants[i].imgRestaurant}" width="100%" height="225">

            <div class="card-body">
            <h3>${restaurants[i].restaurantName} </h3>
              <p class="card-text">${restaurants[i].description}</p>
              <div class="d-flex justify-content-between align-items-center">

                <img src="${restaurants[i].imgStars}" width="20%" height="25">
              </div>
            </div>
          </div>
        </div>
        `
      }
  })
  .catch(function(error) {
      console.log(error);
  });
}

function showSeries(){
  fetch("./data/series.json")
  .then(function(res) {
      return res.json();
  })
  .then(function(data){
      let html = document.querySelector("#content-remember");
      let series = data.series;
      for (let i = 0; i < series.length; i++) {
        html.innerHTML +=`

        <div class="col">
          <div class="card shadow-sm">
          <img src="${series[i].imgSerie}" width="100%" height="225">

            <div class="card-body">
            <h3>${series[i].serieName} </h3>
              <p class="card-text">${series[i].description}</p>
              <div class="d-flex justify-content-between align-items-center">
              <img src="${series[i].pegi}" width="15%" height="75">
                <img src="${series[i].imgStars}" width="20%" height="25">
              </div>
            </div>
          </div>
        </div>
        `
      }
  })
  .catch(function(error) {
      console.log(error);
  });
}

function showSongs(){
  fetch("./data/songs.json")
  .then(function(res) {
      return res.json();
  })
  .then(function(data){
      let html = document.querySelector("#content-remember");
      let songs = data.songs;
      for (let i = 0; i < songs.length; i++) {
        html.innerHTML +=`

        <div class="col">
          <div class="card shadow-sm">
          <img src="${songs[i].imgSong}" width="100%" height="225">

            <div class="card-body">
            <h3>${songs[i].songName} </h3>
              <p class="card-text">${songs[i].description}</p>
              <div class="d-flex justify-content-between align-items-center">
              <h4> ${songs[i].artist} </h4>
              </div>
            </div>
          </div>
        </div>
        `
      }
  })
  .catch(function(error) {
      console.log(error);
  });
}

function showVideogames(){
  fetch("./data/videogames.json")
  .then(function(res) {
      return res.json();
  })
  .then(function(data){
      let html = document.querySelector("#content-remember");
      let videogames = data.videogames;
      for (let i = 0; i < videogames.length; i++) {
        html.innerHTML +=`

        <div class="col">
          <div class="card shadow-sm">
          <img src="${videogames[i].imgVideogame}" width="100%" height="225">

            <div class="card-body">
            <h3>${videogames[i].videogameName} </h3>
              <p class="card-text">${videogames[i].description}</p>
              <div class="d-flex justify-content-between align-items-center">
              <img src="${videogames[i].pegi}" width="15%" height="75">
              <img src="${videogames[i].imgStars}" width="20%" height="25">
              </div>
            </div>
          </div>
        </div>
        `
      }
  })
  .catch(function(error) {
      console.log(error);
  });
}

function showUser(){
  const contentOfUserName = document.querySelector("#ShowUserName");
  const userStoraged = localStorage.getItem('name1');
  contentOfUserName.innerHTML +=`
  <i class="far fa-user">${userStoraged}</i>

  `
}

