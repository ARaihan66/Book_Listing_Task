import { use } from 'react';
import axios from 'axios';

export default function BookList({ filter, page }) {
  const books = use(async () => {
    const url = `http://192.168.0.157:8000/books?page=${page}&filter=${filter}`;
    const res = await axios.get(url);
    return res.data;
  });

  if (books.error) {
    return <div>Error fetching books</div>;
  }

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>{book.title}</div>
      ))}
    </div>
  );
}