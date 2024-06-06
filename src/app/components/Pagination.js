
import { useRouter } from 'next/navigation';

export default function Pagination({ totalPages }) {
  const router = useRouter();

  const handlePageChange = (page) => {
    router.push({ pathname: '/', query: { page } });
  };

  return (
    <div>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button key={page} onClick={() => handlePageChange(page)}>
          {page}
        </button>
      ))}
    </div>
  );
}