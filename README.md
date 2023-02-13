# movies-watchlist
For this project I created a website similiar to IMDb where you can search for movies and add them to your watchlist.

The Data I used for this app comes from the OMDb API.

I used the input value as an url parameter for the title search in the API request.

With the data I got I displayed the movie that was searched for in a movie card on the site.

In this movie card is a button add to watchlist. When clicked on it the data which I saved in a variable after fetching it gets pushed in an array and that array gets 
saved to localStorage.

With a forEach I displayed all the movies that got saved to localStorage in that Array in the watchlist.html file.


https://robinho1997.github.io/movies-watchlist/index.html
