let watchList = document.getElementById("movie-list")
let myWatchListMovies = JSON.parse(localStorage.getItem("movies"))


myWatchListMovies.forEach(movie => {
    const {Title,imdbRating,Runtime,Genre,Plot,Poster,imdbID} = movie
        watchList.innerHTML  += `
            <div class="movie-card">
                <img src="${Poster}"/>
                <div>
                    <div class="child-movie-card">
                        <h2 class="movie-title">${Title}</h2 >
                        <p class="rating">
                        <img width="20px" src="/img/star.png"/>
                        ${imdbRating}</p>
                    </div>
    
                    <div class="child-movie-card">
                        <p class="runtime">${Runtime}</p>
                        <p class="genre">${Genre}</p>
                        <button data-id="${imdbID}" class="remove-from-watchlist-btn" id="remove-from-watchlist-btn">
                        <img src="/img/minus-icon.svg"/>
                        Watchlist </button>
                    </div>
    
                    <p class="movie-plot">${Plot}</p>
           
                </div>
            </div>
        <hr/>`
})

const removeMovieFromWatchListBtn = document.getElementsByClassName(
    "remove-from-watchlist-btn"
  );

  //   get the clicked movie id and remove from watchlist
  Array.from(removeMovieFromWatchListBtn).forEach((singleMovie) => {
    singleMovie.addEventListener("click", () => {
      removeMovieFromWatchListHandler(singleMovie.dataset.id);
    });
  });

  // remove the movie from the watchlist handler
function removeMovieFromWatchListHandler(id) {
    const filterdMovies = myWatchListMovies.findIndex((movie) => {
      return movie.imdbID == id;
    });
    myWatchListMovies.splice(filterdMovies, 1);
    localStorage.setItem("movies", JSON.stringify(myWatchListMovies));
    location.reload()
  }