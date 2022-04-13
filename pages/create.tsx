import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { CreateProductForm } from './../components/CreateProductForm';

const Create: NextPage = () => {
  return (
    <div className="bg-[#ECECEC] p-10 min-h-screen">
      <Head>
        <title>UPayments Store</title>
        <meta name="description" content="UPayments Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-full flex flex-col justify-around gap-5">
        <Header />
        <section className="my-24 mx-12 sm:mx-24 md:mx-48 lg:mx-56 xl:px-[10rem] flex flex-col justify-around items-center gap-12">
          <h1 className="font-bold text-4xl">Create Product</h1>
          <CreateProductForm />
        </section>
      </main>
    </div>
  );
};
export default Create;
