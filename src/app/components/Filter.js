import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Filter() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryString = `?name=${name}&price=${price}`;
    router.push(`/${queryString}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
      <button type="submit">Filter</button>
    </form>
  );
}