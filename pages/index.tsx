import Head from 'next/head';
import type { NextPage } from 'next';
import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Products } from './../components/Products';
import { CreateButton } from '../components/CreateButton';
import { CategorySelect } from '../components/CategorySelect';

const Home: NextPage = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();

  return (
    <div className="bg-[#ECECEC] p-5 sm:p-10 min-h-screen">
      <Head>
        <title>UPayments Store</title>
        <meta name="description" content="UPayments Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full lg:mx-16 xl:mx-28 2xl:mx-48 flex flex-col justify-around gap-5 sm:gap-12">
        <Header />
        <section className="w-full flex gap-5 flex-col sm:flex-row justify-between">
          <input
            aria-label="search input"
            type="text"
            placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
            className="bg-white rounded-xl shadow-md w-full sm:w-[50%] p-2 h-full"
          />
          <div className="w-full sm:w-[25%] flex justify-center items-center">
            <CategorySelect setSelectedCategory={setSelectedCategory} />
          </div>
        </section>
        <section className="flex justify-center items-center">
          <Products category={selectedCategory} />
        </section>
        <CreateButton />
      </main>
    </div>
  );
};

export default Home;
