import React from "react";
import {data} from '../data';
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        {/* tab start */}
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
        {/* tab end */}

        {/* list satrt here */}
        <div className="list">
           {
            data.map(movie=>(
              <MovieCard movie={movie}/>
            ))
           }

        </div>
      </div>
    
    </div>
  );
}

export default App;
