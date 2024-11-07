// src/components/BookList.js
import React from 'react';
import BookCard from './BookCard.js';

const BookList = ({ books }) => (
  <div className="book-list">
    {books.map((book) => (
      <BookCard key={book.key} book={book} />
    ))}
  </div>
);

export default BookList;
