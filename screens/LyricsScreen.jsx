// src/screens/LyricsScreen.js
import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../src/components/Header';
import SongInfoModal from '../src/components/SongInfoModal';
import { getAllSongs } from '../data/songsData'; 

const LyricsScreen = () => {
  const { id } = useParams(); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Find the specific song data
  const song = useMemo(() => {
    const allSongs = getAllSongs();
    return allSongs.find(s => s.id === id);
  }, [id]);

  if (!song) {
    return (
      <div className="page-container">
        <Header title="Lyrics Not Found" />
        <p className="no-data-message">Sorry, the song you are looking for does not exist.</p>
      </div>
    );
  }
  
  // Format lyrics: uses '\n' to create line breaks in the UI
  const formattedLyrics = song.lyrics.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="lyrics-screen page-container">
      <Header title={song.title} />

      <div className="lyrics-toolbar">
        {/* Button to display details modal */}
        <button onClick={() => setIsModalOpen(true)} className="info-button">
          &#x2139; Song Details
        </button>
        
        {/* YouTube Icon (only visible if a video link exists) */}
        {song.video && (
          <a href={song.video} target="_blank" rel="noopener noreferrer" className="youtube-link">
            &#x25B6; YouTube
          </a>
        )}
      </div>

      <div className="lyrics-content">
        {formattedLyrics}
      </div>

      {/* Modal for Song Details */}
      <SongInfoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        song={song}
      />
    </div>
  );
};

export default LyricsScreen;