import Link from 'next/link';
import { FC } from 'react';
export const Header: FC = (): JSX.Element => {
  return (
    <header className="flex rounded-xl shadow-md justify-between p-3 bg-white">
      <Link href="/">
        <button className="italic font-semibold">UPayments Store</button>
      </Link>
      <button className="italic font-semibold">Register</button>
    </header>
  );
};
