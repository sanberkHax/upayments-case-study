import Head from 'next/head';
import type { NextPage } from 'next';
import React, { useState } from 'react';
import Select from 'react-select';
import { Header } from '../components/Header';
import { useCategories } from '../hooks/useCategories';
import { Products } from './../components/Products';

interface Option {
  value: string;
  label: string;
}

const Home: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();

  // Fetch categories
  const { categories, categoriesLoading, categoriesError } = useCategories();

  // Turn categories into options for select component
  const options = categories?.map((category) => {
    return {
      value: category.name,
      label: category.name.toUpperCase(),
    };
  });

  // Select component's onChange handler
  const changeHandler = (option: Option | null) => {
    setSelectedCategory(option?.value);
  };
  return (
    <div className="bg-[#ECECEC] p-10 min-h-screen">
      <Head>
        <title>UPayments Store</title>
        <meta name="description" content="UPayments Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-full flex flex-col justify-around gap-5 sm:gap-12">
        <Header />
        <section className="w-full flex gap-5 flex-col sm:flex-row justify-between">
          <input
            aria-label="search input"
            type="text"
            placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
            className="bg-white rounded-xl shadow-md sm:w-1/2 lg:w-1/3 p-2 h-full"
          />
          <div className="sm:w-1/3 lg:w-1/5 flex justify-center items-center">
            {categoriesLoading ? (
              <h1>Loading...</h1>
            ) : categoriesError ? (
              <h1 className="text-red-500">
                Error when loading categories, try refreshing the page.
              </h1>
            ) : (
              <div className="w-full">
                <Select
                  id="long-value-select"
                  instanceId="long-value-select"
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderRadius: '10px',
                    }),
                  }}
                  options={options}
                  onChange={changeHandler}
                  isClearable={true}
                  placeholder="Categories"
                />
              </div>
            )}
          </div>
        </section>
        <section className="px-12 sm:px-18 lg:px-20 xl:px-36 flex justify-center items-center">
          <Products category={selectedCategory} />
        </section>
      </main>
    </div>
  );
};

export default Home;
