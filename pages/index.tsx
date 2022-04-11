import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className="bg-[#ECECEC] p-5 h-screen w-screen">
      <Head>
        <title>UPayments Store</title>
        <meta name="description" content="UPayments Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
};

export default Home;
