import React from 'react'

export function MovieCards({ movie, mode }) {
  const mystyle = {
    color: mode === 'dark' ? 'white' : 'black',
    backgroundColor: mode === 'dark' ? '#1a1a1a' : 'white',
    border: '1px solid gray',
    transition : 'all 0.5s ease',
  };

  const subtitleStyle = {
    color: mode === 'dark' ? '#ccc' : '#6c757d', // added this to override Bootstrap's muted color
    transition: 'all 0.5s ease'
  };

  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <img src={movie.Poster} alt={movie.Title} width="100%" />
        </div>
        <div className="col-md-10">
          <div className="card" style={mystyle}>
            <div className="card-body">
              <h3 className="card-title">{movie.Title}</h3>
              <h6 className="card-subtitle mb-2" style={subtitleStyle}>
                {movie.Released}
              </h6>
              <p className="card-text">{movie.Plot}</p>
              <a
                href={`https://www.imdb.com/title/${movie.imdbID}`}
                target="_blank"
                rel="noreferrer"
                className="card-link"
              >
                IMDB
              </a>
              <a
                href={`https://www.youtube.com/results?search_query=${movie.Title} trailer`}
                target="_blank"
                rel="noreferrer"
                className="card-link"
              >
                Watch Trailer
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
