// src/App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar.js';
import BookList from './components/BookList.js';
import axios from 'axios';
import "./App.css"

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchBooks = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?title=${query}`);
      setBooks(response.data.docs);
    } catch (err) {
      setError('Failed to fetch books. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Book Finder</h1>
      <SearchBar handleSearch={searchBooks} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <BookList books={books} />
    </div>
  );
};

export default App;
