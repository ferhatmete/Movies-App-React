import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// API
import requests from "./requests";
// Components
import Home from "./Pages/Home";
import Nav from "./components/Nav";
// Pages
import Trending from "./Pages/Trending";
import TopRated from "./Pages/TopRated";
import ActionMovies from "./Pages/ActionMovies";
import ComedyMovies from "./Pages/ComedyMovies";
import HorrorMovies from "./Pages/HorrorMovies";
import RomanceMovies from "./Pages/RomanceMovies";
import Documentaries from "./Pages/Documentaries";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/trending"
            element={
              <Trending title="Trending" fetchUrl={requests.fetchTrending} />
            }
          ></Route>
          <Route
            path="/top-rated"
            element={
              <TopRated title="Top Rated" fetchUrl={requests.fetchTopRated} />
            }
          ></Route>
          <Route
            path="/action-movies"
            element={
              <ActionMovies
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
              />
            }
          ></Route>
          <Route
            path="/comedy-movies"
            element={
              <ComedyMovies
                title="Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}
              />
            }
          ></Route>
          <Route
            path="/horror-movies"
            element={
              <HorrorMovies
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
              />
            }
          ></Route>
          <Route
            path="/romance-movies"
            element={
              <RomanceMovies
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
              />
            }
          ></Route>
          <Route
            path="/documentaries"
            element={
              <Documentaries
                title="Documentaries"
                fetchUrl={requests.fetchDocumantaries}
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
