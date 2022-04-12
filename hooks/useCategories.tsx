import useSWR from 'swr';

export type Categories = [
  {
    createdAt: string;
    id: string;
    name: string;
  }
];

export const useCategories = (): {
  categories: Categories;
  categoriesLoading: boolean;
  categoriesError: {};
} => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

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
