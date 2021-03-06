import useSWR from 'swr';

type Categories = [
  {
    createdAt: string;
    id: string;
    name: string;
  }
];

export const useCategories = (): {
  categories: Categories;
  categoriesLoading: boolean;
  categoriesError: { message: string };
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
    'https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/',
    fetcher
  );

  return {
    categories: data,
    categoriesLoading: !error && !data,
    categoriesError: error,
  };
};
