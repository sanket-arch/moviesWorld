import React, { useState } from "react";
import Header from "./components/header";
import Movies from "./components/movies";
import Footer from "./components/footer";
import useFetch from "./fetch";
function App() {
  const [searchValue, updateSerach] = useState("avengers");
  const { data: movies, error, isloaded } = useFetch(searchValue);

  function HandleChange(event) {
    var newValue = event.target.value;
    updateSerach(newValue);
  }


  return (
    <div>
      <Header />
      <Footer />
      <div className="inputField">
        <input onChange={HandleChange} placeholder="enter movie name" />
      </div>

      <div className="movies">
        {error && <div>{error}</div>}
        {isloaded && <div>Loading...</div>}
        {movies &&
          movies.map((movie, index) => {
            return (
              <div>
                <Movies
                  key={index}
                  ImgUrl={movie.Poster}
                  name={movie.Title}
                  year={movie.Year}
                  Type={movie.Type}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
