// src/components/SongListItem.jsx (UPDATED for conditional rendering)
import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Renders a single song item in a list.
 * @param {object} song - The song object.
 * @param {string} viewType - 'list' or 'grid' (Passed from SongList)
 */
const SongListItem = ({ song, viewType }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/song/${song.id}`);
  };

  const displayGenres = song.genre || []; 
  const isGridView = viewType === 'grid'; // Helper flag

  return (
    <div className="song-list-item" onClick={handleItemClick}>
      <h3 className="song-title">{song.title}</h3>
      
      {/* 💡 NEW: Only render details if NOT in Grid View */}
      {!isGridView && (
        <div className="song-details-small">
          <span className="detail-genre">
            {displayGenres.slice(0, 2).join(', ')} 
          </span>
          <span className="detail-separator">|</span>
          <span className="detail-timesig">
            {song.timeSignature || 'N/A'}
          </span>
          <span className="detail-separator">|</span>
          <span className="detail-artist">
            {song.artist || 'Unknown Artist'}
          </span>
        </div>
      )}
    </div>
  );
};

export default SongListItem;