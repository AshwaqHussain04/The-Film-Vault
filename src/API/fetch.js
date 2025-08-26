export const fetchMovies = async (searchitem, movie_data, error_Callback,key) => {
  let data = [];
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${searchitem}&apikey=${key}`
    );

    data = await response.json();

    if (data.Response === "True") {
      const movies_DetailsPromises = data.Search.map((movie) =>
        fetchMovieDetails(movie.imdbID, error_Callback)
      );
      const movie_details = await Promise.all(movies_DetailsPromises);

      movie_data(movie_details);
      error_Callback(null);
    } else {
      movie_data([]);
      error_Callback(
        "Something Went wrong with the request. Please try again Later"
      );
    }
  } catch (err) {
    console.error("Error fetching movies:");
  }
};

// this function returns the id and the plot of the Movie to display
const fetchMovieDetails = async (id, error_Callback) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&plot=full&apikey=8f7f5aa8`
    );
    const data = await response.json();
    if (data.Response === "True") {
      return data;
    } else {
      throw new Error(data.Error);
    }
  } catch (err) {
    error_Callback(
      "Something Went wrong with the request. Please try again Later"
    );
  }
};
