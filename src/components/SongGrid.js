import React from "react";
import "../App.css";

const SongGrid = ({ songs }) => {
  return (
    <div className="Song-grid">
      {songs.map((song) => (
        <div key={song.id} className="Song-card">
          <iframe
            src={`https://open.spotify.com/embed/track/${song.spotifyId}`}
            width="300"
            height="352"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title={song.title}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default SongGrid;
