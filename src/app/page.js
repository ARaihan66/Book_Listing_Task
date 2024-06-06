"use client"
import { useSearchParams } from 'next/navigation';
import BookList from './components/Booklist';

import Filter from './components/Filter';
import Pagination from './components/Pagination';

export default function Page() {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || 1;
  const filter = searchParams.get('filter') || '';


  const totalPages = 10;

  return (
    <div>
      <Filter />
      <BookList filter={filter} page={page} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}