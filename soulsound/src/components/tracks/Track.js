import React from "react";
import { Link } from "react-router-dom";

const Track = (props) => {
  const { track } = props;

  const getLyricsLink = () => {
    if (props.isSearch) {
      return `/search/track/${track.track_id}`;
    } else {
      return `/track/${track.track_id}`;
    }
  };

  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card__track-name">
            {" "}
            <i className="fas fa-play" /> {track.track_name}
          </h5>
          <p className="card__text">
            <i className="fas fa-compact-disc" /> <strong> Artist:</strong>{" "}
            {track.artist_name}
          </p>
          <Link
            to={getLyricsLink()}
            className="btn card__button card__button--small"
          >
            View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
