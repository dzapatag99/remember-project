const btnMovies = document.querySelector('#movies');
const btnSeries = document.querySelector('#series');
const btnSongs = document.querySelector('#songs');
const btnGames = document.querySelector('#games');
const btnRestaurants = document.querySelector('#restaurants');
const content = document.querySelector('#content-remember')

init();

function init(){
    showMovies();
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
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" src="img/${movies[i].imgMovie}" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
  
              <div class="card-body">
              <h3>${movies[i].movieName} </h3>
                <p class="card-text">${movies[i].description}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small class="text-muted">${movies[i].imgStars}</small>
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
