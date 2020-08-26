import React from "react";

import TextTruncate from "react-text-truncate";
import ThumpsUpSharp from "@material-ui/icons/ThumbUpSharp";

import "./VideoCard.css";

function VideoCard({ movie }) {
  const baseURL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="videoCard">
      <img src={`${baseURL}${movie.backdrop_path || movie.poster_path}`} />

      <TextTruncate line={2} element="p" text={movie.overview} />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        {movie.media_type && `${movie.media_type} ⚫`}
        {movie.release_date || movie.first_air_date}
        <ThumpsUpSharp />
        {movie.vote_count}
      </p>
    </div>
  );
}

export default VideoCard;
