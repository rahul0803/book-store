import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import BookDetail from './BookDetail';
import SearchBar from './SearchBar';
import './App.css';


const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchBooks('harry+potter'); 
  }, []);

  const fetchBooks = async (query) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      setBooks([]);
    }
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleSearch = () => {
    fetchBooks(searchQuery);
  };

  return (
    <div className="app-container">
      <h1 className="app-heading">Online Bookstore</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch} />
      <div className="book-list">
        {selectedBook ? (
          <BookDetail book={selectedBook} onClose={() => setSelectedBook(null)} />
        ) : (
          books.map((book) => (
            <BookCard key={book.id} book={book} onClick={() => handleBookClick(book)} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
