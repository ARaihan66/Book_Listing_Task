
import { use } from 'react';
import axios from 'axios';

export default function BookList({ filter, page }) {
  const booksPromise = use(async () => {
    const url = `http://192.168.0.157:8000/books?page=${page}&filter=${filter}`;
    const res = await axios.get(url);
    return res.data;
  });

  if (booksPromise.pending) {
    return <div>Loading...</div>;
  } else if (booksPromise.error) {
    return <div>Error: {booksPromise.error.message}</div>;
  } else {
    return (
      <div>
        {booksPromise.value.map((book) => (
          <div key={book.id}>{book.title}</div>
        ))}
      </div>
    );
  }
}