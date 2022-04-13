import Link from 'next/link';
export const Header = () => {
  return (
    <header className="flex rounded-xl shadow-md justify-between p-3 bg-white">
      <Link href="/">
        <button className="italic font-semibold">UPayments Store</button>
      </Link>
      <button className="italic font-semibold">Register</button>
    </header>
  );
};
