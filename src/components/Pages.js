import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../Styles/Row.css";
// Component
import Row from "../components/Row";

const base_url = "https://image.tmdb.org/t/p/original/";

const Trending = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  return <Row movies={movies} baseUrl={base_url} title={title} />;
};

export default Trending;
