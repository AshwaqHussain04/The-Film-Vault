import { useState } from "react";
import React from 'react'
import { fetchMovies } from "../API/fetch";
import { showAlert } from "./error_Alert";
import {MovieCards} from './Movie_Cards'

export default function SearchBar(props) {
  
    const [Searchitem,setSearchitem] = useState('');
    const [movies,setmovies] = useState([]); //array to store the movies imported from OMDB API
    const [error, setError] = useState(""); //to handle errors
    

    const onEnterSearchKey = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault(); //to prevent the page from reloading everytime to prevent breaking components
        fetchMovies(Searchitem, setmovies, setError); //send the movie name from searchbar to Fetch()to fetch that movie
      }
    }

  return (
    <>
      <div className="row">
          <div className="col-md-12">
                  <input 
                  className="form-control" type="text" placeholder="Search Movies"
                  value={Searchitem}
                  onChange={(e) => setSearchitem(e.target.value)}
                  onKeyDown={onEnterSearchKey}
                  />
          </div>
      </div>
            {error && showAlert(Searchitem,error)}
             {movies.length > 0 ? (
                    <>
                      <p className="text-dark">
                        Showing {movies.length} movies for '{Searchitem}'
                      </p>
                      {/* get the necessary data like IMDBID from movies array to display in card component */}
                      {movies.map((movie) => (
                        <MovieCards mode={props.mode} key={movie.imdbID} movie={movie} />
                      ))}
                    </>
                    // if there is an error display the error message
                      ) : (
                        error && <p className="text-danger">Error: {error}</p>
                      )}

    </>
  )
  
}
