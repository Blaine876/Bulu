import React, { useState, useEffect } from "react";

import { VideoCard } from "../components";

import "./Results.css";
import axios from "../utils/axios";
import tmdb from "../utils/tmdb";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([1, 2]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    };

    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Results;
