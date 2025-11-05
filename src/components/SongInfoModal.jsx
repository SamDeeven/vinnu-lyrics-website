// src/components/SongInfoModal.js
import React from 'react';

/**
 * Modal to display detailed song information.
 * @param {boolean} isOpen - Controls visibility.
 * @param {function} onClose - Function to close the modal.
 * @param {object} song - The song object containing details.
 */
const SongInfoModal = ({ isOpen, onClose, song }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Song Information</h2>
        <p className="modal-song-title">**{song.title}**</p>
        
        <div className="modal-details-grid">
          <div className="detail-row">
            <strong>Genre(s):</strong> 
            <span>{song.genre.join(', ')}</span>
          </div>
          <div className="detail-row">
            <strong>Time Signature:</strong> 
            <span>{song.timeSignature}</span>
          </div>
          <div className="detail-row">
            <strong>Artist:</strong> 
            <span>{song.artist}</span>
          </div>
        </div>
        
        <button onClick={onClose} className="modal-close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default SongInfoModal;