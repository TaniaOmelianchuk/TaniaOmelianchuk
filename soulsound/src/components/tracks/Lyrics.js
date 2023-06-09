import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Spinner } from "../layout/Spinner/Spinner";
import Moment from "react-moment";

function Lyrics() {
  const { id } = useParams();
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=2811126ad99a840f501e17c04d3e5028`
      )
      .then((res) => {
        setLyrics({ lyrics: res.data.message.body.lyrics });

        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=2811126ad99a840f501e17c04d3e5028`
        );
      })
      .then((res) => {
        setTrack({ track: res.data.message.body.track });
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (
    track === undefined ||
    lyrics === undefined ||
    Object.keys(track).length === 0 ||
    Object.keys(lyrics).length === 0
  ) {
    return <Spinner />;
  } else {
    return (
      <>
        <Link
          to="/"
          className="btn mb-4 card__button card__button--small card__button--lyrics"
        >
          Go back
        </Link>
        <div className="card">
          <h5 className=" card-body card__track-name">
            {track.track.track_name} by{" "}
            <span className="text-secondary card__text">
              {track.track.track_name}
            </span>
          </h5>
          <div className="card-body">
            <p className="card__text">{lyrics.lyrics.lyrics_body}</p>
          </div>
        </div>

        <ul className="list-group mt-3">
          <li className="list-group-item">
            <strong>Album ID</strong>: {track.track.album_id}
          </li>
          <li className="list-group-item">
            <strong>Song Genre</strong>:{" "}
            {
              track.track.primary_genres.music_genre_list[0].music_genre
                .music_genre_name
            }
          </li>
          <li className="list-group-item">
            <strong>Explicit Words</strong>:{" "}
            {track.track.explicit === 0 ? "No" : "Yes"}
          </li>
          <li className="list-group-item">
            <strong>Release Date</strong>:{" "}
            <Moment format="DD/MM/YYYY">{track.first_release_date}</Moment>
          </li>
        </ul>
      </>
    );
  }
}

export default Lyrics;
