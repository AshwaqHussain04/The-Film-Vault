import { useState } from "react";
import React from 'react'
import { fetchMovies } from "../API/fetch";
import { showAlert } from "./error_Alert";
import {MovieCards} from './Movie_Cards'

export default function SearchBar(props) {
  
    const [Searchitem,setSearchitem] = useState('');
    const [movies,setmovies] = useState([]);
    const [error, setError] = useState("");
    

    const onEnterSearchKey = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        fetchMovies(Searchitem, setmovies, setError);
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
                      {movies.map((movie) => (
                        <MovieCards mode={props.mode} key={movie.imdbID} movie={movie} />
                      ))}
                    </>
                      ) : (
                        error && <p className="text-danger">Error: {error}</p>
                      )}

    </>
  )
  
}
