// src/screens/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllSongs, getAlphabetKeys } from '../data/songsData';
import Header from '../src/components/Header';
import SettingsModal from '../src/components/SettingsModal';
import SongList from '../src/components/SongList';
import { useDebounce } from '../hooks/useDebounce'; 

const allSongs = getAllSongs();
const alphabetKeys = getAlphabetKeys();

const HomePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Search logic: uses the keywords array
  useEffect(() => {
    if (debouncedSearchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const lowerCaseTerm = debouncedSearchTerm.toLowerCase();
    
    const results = allSongs.filter(song => 
      // Search in title OR in keywords
      song.title.toLowerCase().includes(lowerCaseTerm) ||
      song.keywords.some(keyword => keyword.toLowerCase().includes(lowerCaseTerm))
    );
    
    setSearchResults(results);
  }, [debouncedSearchTerm]);

  return (
    <div className="home-page page-container">
      <Header title="Home">
        {/* Top Left Menu (3 dots button) */}
        <button onClick={() => setIsModalOpen(true)} className="header-icon">
          &#x22EE; 
        </button>
      </Header>

      <div className="content-area">
        {/* Search Field */}
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search songs by title or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        {/* Only show alphabet grid if not searching */}
        {searchTerm.trim() === '' ? (
          <>
            <hr />
            <div className="alphabet-nav-grid">
              {alphabetKeys.map(char => (
                <Link key={char} to={`/alphabet/${char}`} className="alphabet-link">
                  {char}
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="search-results-area">
            <h3>Search Results for: "{searchTerm}"</h3>
            {searchResults.length > 0 ? (
              <SongList songs={searchResults} />
            ) : (
              <p>No songs found matching your search.</p>
            )}
          </div>
        )}
      </div>

      <SettingsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default HomePage;