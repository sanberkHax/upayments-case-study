import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { CreateProductForm } from './../components/CreateProductForm';

const Create: NextPage = (): JSX.Element => {
  return (
    <div className="bg-[#ECECEC] p-10 min-h-screen">
      <Head>
        <title>UPayments Store</title>
        <meta name="description" content="UPayments Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full lg:mx-16 xl:mx-28 2xl:mx-48 flex flex-col justify-around gap-12">
        <Header />
        <section className="sm:mx-24 md:mx-48 lg:mx-56 xl:mx-64 2xl:mx-80 flex flex-col justify-around items-center gap-5">
          <h1 className="text-center font-bold text-4xl">Create Product</h1>
          <CreateProductForm />
        </section>
      </main>
    </div>
  );
};
export default Create;
