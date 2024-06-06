"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Filter() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const filterParams = { name, price };
    router.push({ pathname: '/', query: filterParams });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <button type="submit">Filter</button>
    </form>
  );
}