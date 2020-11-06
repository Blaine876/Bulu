import React, { useState, useEffect } from "react";

import { VideoCard } from "../components";

import "./Results.css";
import axios from "../utils/axios";
import FlipMove from "react-flip-move";

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
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
