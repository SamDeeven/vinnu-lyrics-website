// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all screens
import HomePage from '../screens/HomePage';
import AlphabetSongsScreen from '../screens/AlphabetSongsScreen';
import LyricsScreen from '../screens/LyricsScreen';
// NOTE: The SongList, Header, and Modals will be imported inside their respective screen files.

const App = () => {
  return (
    // BrowserRouter is the main wrapper for routing
    <Router>
      <div className="app-main-container">
        {/* Routes component defines the screen for each URL path */}
        <Routes>
          {/* Home Page: The entry point */}
          <Route path="/" element={<HomePage />} />
          
          {/* Songs List: Displays songs starting with a specific alphabet letter (e.g., /alphabet/అ) */}
          <Route path="/alphabet/:char" element={<AlphabetSongsScreen />} />
          
          {/* Lyrics Screen: Displays the full lyrics for a specific song ID (e.g., /song/tel-a1) */}
          <Route path="/song/:id" element={<LyricsScreen />} />

          {/* Fallback for 404 (optional but good practice) */}
          <Route path="*" element={<h1 style={{textAlign: 'center', marginTop: '50px'}}>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;