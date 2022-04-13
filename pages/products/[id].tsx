import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Header } from '../../components/Header';
import { useProduct } from './../../hooks/useProduct';

const ProductDetails: NextPage = (): JSX.Element => {
  // Get page id from url
  const router = useRouter();
  const { id } = router.query;

  // Fetch product by id
  const { product, productError, productLoading } = useProduct(id);

  const myLoader = () => {
    return product?.avatar;
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
        {productLoading ? (
          <h1 className="text-center">Loading...</h1>
        ) : productError ? (
          <h1 className="text-red-500">{productError.message}</h1>
        ) : (
          <section className="md:px-12 lg:px-36 xl:px-72">
            <div className="border-b-4 border-black my-5 pb-5 flex flex-col sm:flex-row gap-5 sm:gap-24 lg:gap-52 justify-center">
              <div className="bg-white mx-5 rounded-xl p-5 flex justify-center items-center">
                {product && (
                  <Image
                    loader={myLoader}
                    src={product.avatar}
                    alt={product.name}
                    width={180}
                    height={200}
                    layout="fixed"
                  />
                )}
              </div>
              <div className="flex flex-col justify-around items-center">
                <h1 className="text-2xl md:text-4xl font-bold">
                  {product.name}
                </h1>
                <h2 className="text-xl font-semibold">{`$${product?.price}`}</h2>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">Description</h2>
              <p>{product.description}</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ProductDetails;