"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';

export default function Home({ books }) {
  const [loading, setLoading] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    const filterBooks = async () => {
      setLoading(true);
      setLoading(false);
      setFilteredBooks(filteredData); 
    };

    filterBooks();
  }, []);

  return (
    <div>
      <Filter />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {filteredBooks.map((book) => (
            <div key={book.id}>{book.title}</div>
          ))}
        </div>
      )}
    </div>
  );
}