// src/components/SettingsModal.js
import React, { useMemo } from 'react';
import { getAllSongs } from '../../data/songsData'; 

/**
 * Modal for general app settings and info.
 * @param {boolean} isOpen - Controls visibility.
 * @param {function} onClose - Function to close the modal.
 */
const SettingsModal = ({ isOpen, onClose }) => {
  // Calculate total songs dynamically
  const totalSongs = useMemo(() => {
    return getAllSongs().length;
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content settings-modal" onClick={e => e.stopPropagation()}>
        <h2>App Info</h2>
        
        <div className="settings-section">
          <h3>Total Songs in the App:</h3>
          <p className="song-count-display">{totalSongs}</p>
        </div>
        
        <div className="settings-section">
          <h3>Contact:</h3>
          <p>Please contact us at example@email.com for support.</p>
        </div>
        
        <div className="settings-section">
          <h3>About:</h3>
          <p>This is a lightweight Telugu Christian Lyrics Application, created using React.js and Vite.</p>
        </div>
        
        <button onClick={onClose} className="modal-close-button primary-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;