import React, { forwardRef } from "react";

import TextTruncate from "react-text-truncate";
import ThumpsUpSharp from "@material-ui/icons/ThumbUpSharp";

import "./VideoCard.css";

const VideoCard = forwardRef(({ movie }, ref) => {
  const baseURL = "https://image.tmdb.org/t/p/original/";
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${baseURL}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />

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
});

export default VideoCard;
