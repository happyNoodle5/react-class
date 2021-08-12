function startSearch() {
    const search = prompt("Search for a movie", "terminator");
    getMoviesBySearchTerm(search);
    console.log(search);
};
startSearch();

async function getMoviesBySearchTerm(searchTerm) {
    const searchURL = `http://www.omdbapi.com/?type=movie&t=${searchTerm}&apikey=642292cb`;
    try {
        let movieList = await fetch(searchURL);

        if (!movieList.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else if (movieList.hasOwnProperty("Error")) {
            alert("Hmm.. I couldn't find that.. try looking for a different movie");
        } else {
            let myBlob = (await movieList.text());
            console.log(myBlob);
        };
    }
    catch(e) {
        console.log(e);
      }
};

function startIdSearch() {
    const searchId = prompt("Search for a movie by IMDb ID", "tt5817168");
    getMoviesBySearchId(searchId);
    console.log(searchId);
};
startIdSearch();

async function getMoviesBySearchId(searchIdInput) {
    const searchIdURL = `http://www.omdbapi.com/?type=movie&t=${searchIdInput}&apikey=642292cb`;
    try {
        let movie = await fetch(searchIdURL);

        if (!movie.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else if (movie.hasOwnProperty("Error")) {
            alert("Hmm.. I couldn't find that.. try looking for a different movie");
        } else {
            let myId = (await movie.text());
            console.log(myId);
        };
    }
    catch(e) {
        console.log(e);
      }
};