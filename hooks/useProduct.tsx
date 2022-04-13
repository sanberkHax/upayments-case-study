import useSWR from 'swr';

type Product = {
  createdAt: string;
  id: string;
  name: string;
  avatar: string;
  category: string;
  description: string;
  price: string;
};

export const useProduct = (
  id: string | string[] | undefined
): {
  product: Product;
  productLoading: boolean;
  productError: { message: string };
} => {
  const fetcher = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error: any = new Error(
        'An error occurred while fetching the data.'
      );

      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };
  const { data, error } = useSWR(
    `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`,
    fetcher
  );

  return {
    product: data,
    productLoading: !error && !data,
    productError: error,
  };
};
