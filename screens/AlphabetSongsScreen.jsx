// src/screens/AlphabetSongsScreen.jsx (UPDATED)
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../src/components/Header';
import SongList from '../src/components/SongList';
import songsData from '../data/songsData'; 

const AlphabetSongsScreen = () => {
  const { char } = useParams();
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const [viewType, setViewType] = useState('list'); // NEW STATE: 'list' or 'grid'

  const songsForChar = useMemo(() => {
    return songsData[char] || [];
  }, [char]);

  const uniqueGenres = useMemo(() => {
    const genres = new Set();
    songsForChar.forEach(song => {
      song.genre.forEach(g => genres.add(g));
    });
    return ['All Genres', ...Array.from(genres).sort()];
  }, [songsForChar]);

  const filteredSongs = useMemo(() => {
    if (selectedGenre === 'All Genres') {
      return songsForChar;
    }
    return songsForChar.filter(song => 
      song.genre.includes(selectedGenre)
    );
  }, [songsForChar, selectedGenre]);

  useEffect(() => {
    setSelectedGenre('All Genres');
  }, [char]);

  const handleResetFilter = useCallback(() => {
    setSelectedGenre('All Genres');
  }, []);

  if (songsForChar.length === 0) {
    return (
      <div className="page-container">
        <Header title={`Songs Starting with "${char}"`} />
        <p className="no-data-message">No songs found starting with "{char}".</p>
      </div>
    );
  }

  return (
    <div className="alphabet-songs-screen page-container">
      <Header title={`Songs Starting with "${char}"`} />

      {/* Filter and View Controls */}
      <div className="filter-controls">
        <div className="genre-filter">
          <label htmlFor="genre-select">Filter by Genre:</label>
          <select
            id="genre-select"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="dropdown-select"
          >
            {uniqueGenres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
        
        {/* NEW: View Toggle Buttons */}
        <div className="view-toggle-buttons">
            <button 
                onClick={() => setViewType('list')} 
                className={`view-toggle-btn ${viewType === 'list' ? 'active-view' : ''}`}
            >
                &#9776; {/* List Icon */}
            </button>
            <button 
                onClick={() => setViewType('grid')} 
                className={`view-toggle-btn ${viewType === 'grid' ? 'active-view' : ''}`}
            >
                &#9638; {/* Grid Icon */}
            </button>
        </div>

        <button onClick={handleResetFilter} className="reset-button">
          Reset Filter
        </button>
      </div>

      <p className="song-count">{filteredSongs.length} songs displayed</p>
      
      {/* Pass the new viewType prop to SongList */}
      <SongList songs={filteredSongs} viewType={viewType} />
    </div>
  );
};

export default AlphabetSongsScreen;