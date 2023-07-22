import React from 'react';


const BookCard = ({ book, onClick }) => {
  return (
    <div className="book-card" onClick={onClick}>
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      <h3 className="book-title">{book.volumeInfo.title}</h3>
      <p className="book-authors">Author: {book.volumeInfo.authors?.join(', ')}</p>
    </div>
  );
};

export default BookCard;
