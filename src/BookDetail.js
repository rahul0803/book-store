import React from 'react';


const BookDetail = ({ book, onClose }) => {
  return (
    <div className="book-detail">
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      <h3 className="book-title">{book.volumeInfo.title}</h3>
      <p className="book-authors">Author: {book.volumeInfo.authors?.join(', ')}</p>
      {/* Display detailed book information */}
      <div className="buttons">
        <button className="read-now" onClick={() => window.open(book.volumeInfo.previewLink)}>
          Read Now
        </button>
        <button className="more-info" onClick={() => window.open(book.volumeInfo.infoLink)}>
          More Info
        </button>
        <button className="close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default BookDetail;
