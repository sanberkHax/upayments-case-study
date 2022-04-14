import Link from 'next/link';
import { FC } from 'react';
export const Header: FC = (): JSX.Element => {
  return (
    <header className="flex flex-col sm:flex-row rounded-xl shadow-md justify-between p-3 bg-white">
      <Link href="/">
        <button className="hover:text-red-500 italic text-xl font-semibold">
          UPayments Store
        </button>
      </Link>
      <button className="hover:text-red-500 italic text-xl font-semibold">
        Register
      </button>
    </header>
  );
};
