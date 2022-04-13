import Link from 'next/link';
import { FC } from 'react';

export const CreateButton: FC = (): JSX.Element => {
  return (
    <Link href="/create">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-12 md:w-16 fixed right-5 md:right-10 bottom-10 fill-black hover:fill-red-500"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
        </svg>
      </button>
    </Link>
  );
};
