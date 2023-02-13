let searchedMoviesContainer = document.getElementById("movie-list")
let inputMovieName = document.getElementById("input-movie")
let searchMovieBtn = document.getElementById("search-movie-btn")

let movie
let movieWatchList = []

searchMovieBtn.addEventListener("click", function() {
    let movieTitle = inputMovieName.value
    fetch(`http://www.omdbapi.com/?apikey=3b7419ee&t=${movieTitle}`)
        .then(response => response.json())
        .then(data => {
           movie = data
           render(movie)
    })
})

function render(data) {
    const {Title,imdbRating,Runtime,Genre,Plot,Poster} = data

    const movieCard = `
        <div class="movie-card">
                <img src="${Poster}"/>
               <div>
                    <div class="child-movie-card">
                        <h2 class="movie-title">${Title}</h2 >
                        <p class="rating">
                            <img width="20px" src="img/star.png"/>
                        ${imdbRating}</p>
                    </div>
            
                    <div class="child-movie-card">
                        <p class="runtime">${Runtime}</p>
                        <p class="genre">${Genre}</p>
                        <button class="add-to-watchlist-btn" id="add-to-watchlist-btn"> 
                        <img src="img/plus-icon.svg"/>
                        Watchlist </button>
                    </div>
            
                    
                    <p class="movie-plot">${Plot}</p>
                   
                </div>
        </div>
    <hr/>   
`;

searchedMoviesContainer.innerHTML = movieCard;

document.getElementById("add-to-watchlist-btn").addEventListener("click", function() {
    movieWatchList.push(movie)
    localStorage.setItem("movies",JSON.stringify(movieWatchList))
    alert("Sucessfully added to your watchlist")
})
}


  






      
       





