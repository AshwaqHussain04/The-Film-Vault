import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieNavbar(props) {
  // custom colors for navbar during dark mode and light mode.
  let mystyle ={
    color: props.mode === 'light' ? '#212121' : 'white' ,
    backgroundColor: props.mode === 'light'?'#03A6A1' :'#E8988A',
  }

  return (
     <nav className="navbar navbar-expand-lg my-3" style={mystyle}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">The Film Vault</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Movies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Tv Shows</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            <button onClick={props.toggleMode} className={`btn btn-${props.mode ==='dark'?'light':'dark'}`}> Dark Mode</button>
          </div>
        </div>
</nav>
  )
}
