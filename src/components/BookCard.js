// src/components/BookCard.js
import React from 'react';

const BookCard = ({ book }) => {
  const { title, author_name, cover_i, first_publish_year } = book;

  return (
    <div className="book-card">
      <img
        src={`http://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
        alt={title}
        className="book-cover"
      />
      <h3>{title}</h3>
      <p>{author_name ? author_name.join(', ') : 'Unknown Author'}</p>
      <p>{first_publish_year || 'N/A'}</p>
    </div>
  );
};

export default BookCard;
