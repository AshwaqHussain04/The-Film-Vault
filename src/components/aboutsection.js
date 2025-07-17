import React from 'react'


export default function About(props) {
  let myStyle ={
  color :props.mode === 'dark'?'white' :'',
  transition : 'all 0.5s ease',
}


  return ( 

    <div className="container my-4" style={myStyle}>
      <h2 className="mb-4 text-center">About Movie Library</h2>
      <p>
        Welcome to <strong>The Film Vault</strong> – your one-stop platform for searching movies and discovering what's trending. 
        With our seamless interface and real-time movie data, finding your next favorite film has never been easier.
      </p>
      <p>
        Built using <strong>React</strong> and <strong>Bootstrap</strong>, this project demonstrates the use of modern web technologies, 
        RESTful API integration, and clean UI transitions. Whether you’re a movie buff or just exploring, this app aims to deliver a 
        smooth and responsive experience.
      </p>
      <p>
        Toggle between <strong>Light</strong> and <strong>Dark</strong> modes, search for movies, and enjoy browsing!
      </p>
    </div>
  )
}
