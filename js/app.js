const btnMovies = document.querySelector('#movies');
const btnSeries = document.querySelector('#series');
const btnSongs = document.querySelector('#songs');
const btnGames = document.querySelector('#games');
const btnRestaurants = document.querySelector('#restaurants');
const content = document.querySelector('#content-remember');
const btnLogOut = document.querySelector("#btnLogOut");
const favContent = document.querySelector("#contentfav")
let userFavorites = [];


init();


function init(){
  cargarEventListeners();
  showUser();
}

function cargarEventListeners(){
  btnMovies.addEventListener("click", () => {
    content.innerHTML = '';
    showMovies();
    
  });

  content.addEventListener("click", agregarFav)


  
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
    fetch(`./data/movies.json`)
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
            <img src="${movies[i].imgMovie}" id="imgRef" width="100%" height="225">
  
              
              <h3>${movies[i].movieName} </h3>
                <p class="card-text">${movies[i].description}</p>
                <div class="d-flex justify-content-between align-items-center">
                <img src="${movies[i].pegi}" width="15%" height="75">
                <button type="button" class="btn btn-warning input addFavorite" data-id="1">Add to Favourite</button>
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
          <img src="${restaurants[i].imgRestaurant}" class="imgRef" width="100%" height="225">

            <div class="card-body">
            <h3>${restaurants[i].restaurantName} </h3>
              <p class="card-text">${restaurants[i].description}</p>
              <div class="d-flex justify-content-between align-items-center">
              <button type="button" class="btn btn-warning input addFavorite" data-id="1">Add to Favourite</button>
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
          <img src="${series[i].imgSerie}" class="imgRef" width="100%" height="225">

            <div class="card-body">
            <h3>${series[i].serieName} </h3>
              <p class="card-text">${series[i].description}</p>
              <div class="d-flex justify-content-between align-items-center">
              <img src="${series[i].pegi}" width="15%" height="75">
              <button type="button" class="btn btn-warning input addFavorite" data-id="1">Add to Favourite</button>
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
          <img src="${songs[i].imgSong}" class="imgRef" width="100%" height="225">

            <div class="card-body">
            <h3>${songs[i].songName} </h3>
              <p class="card-text">${songs[i].description}</p>
              <div class="d-flex justify-content-between align-items-center">
              <h5>${songs[i].artist}</h5>
              <img src="${songs[i].imgStars}" width="15%" height="25">
              <button type="button" class="btn btn-warning input addFavorite" data-id="1">Add to Favourite</button>
             
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
          <img src="${videogames[i].imgVideogame}" class="imgRef" width="100%" height="225">

            <div class="card-body">
            <h3>${videogames[i].videogameName} </h3>
              <p class="card-text">${videogames[i].description}</p>
              <div class="d-flex justify-content-between align-items-center">
              <img src="${videogames[i].pegi}" width="15%" height="75">
              <button type="button" class="btn btn-warning input addFavorite" data-id="1">Add to Favourite</button>
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

function agregarFav(e) {

  e.preventDefault();
  let favorite; 


  if (e.target.classList.contains("addFavorite")) {

    favorite = e.target.parentElement.parentElement;

  } else {
    console.error("Error leyedo datos, no hay fav");
    return false;
  }

  const infoFav = {
    imagen: favorite.querySelector("img").src,
    titulo: favorite.querySelector("h3").textContent,
    id: favorite.querySelector("button").getAttribute("data-id"),
  };

    userFavorites.push(infoFav); 
  

  console.log(userFavorites);

  mostrarAlert();

  localStorage.setItem("favorites", JSON.stringify(userFavorites));
}


function mostrarAlert() {
  Swal.fire({
    position: "center-center",
    icon: "success",
    title: "Añadido a favoritos!!",
    showConfirmButton: false,
    timer: 1000,
  });
}

//Funciones fuera del projecto: En el boton de arriba a la derecha se representa siempre el nombre del usuario, boton de log out que borra los datos al salir y redirige, boton de favoritos que lo añade al localStorage.
//Este ha sido mi projecto, en mi opinión creo que cumple con la gran parte que se ha pedido pero he intentado muchas mas cosas que no estan aqui y no me han acabado saliendo
//pero de las cuales he aprendido bastante, me hubiese gustado poner los favoritos de manera dinamica en HTML pero no he podido conseguirlo al igual que con buscador...
//Espero que te guste Emilio ;)

