// src/components/SongList.js (UPDATED to pass viewType)
import React from 'react';
import SongListItem from './SongListItem';

/**
 * Renders a list of songs using the SongListItem component.
 * @param {Array} songs - Array of song objects to display.
 * @param {string} viewType - 'list' or 'grid'
 */
const SongList = ({ songs, viewType = 'list' }) => {
  if (!songs || songs.length === 0) {
    return <p className="no-data-message">No songs found in this list.</p>;
  }

  const containerClass = viewType === 'grid' ? 'grid-view' : 'list-view';

  return (
    <div className={`song-list-container ${containerClass}`}>
      {songs.map(song => (
        // 💡 NEW: Pass the viewType down to the item component
        <SongListItem key={song.id} song={song} viewType={viewType} /> 
      ))}
    </div>
  );
};

export default SongList;