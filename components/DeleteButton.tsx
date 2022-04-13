import React from 'react';
import { useSWRConfig } from 'swr';

export const DeleteButton = ({ id }: { id: string }): JSX.Element => {
  const { mutate } = useSWRConfig();

  const clickHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    try {
      // Delete product by id
      await fetch(
        `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`,
        { method: 'DELETE' }
      );

      // Revalidate products
      mutate(
        'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/'
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <button aria-label="delete button" onClick={clickHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 absolute top-2 right-2 hover:fill-red-500 z-10"
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
      </svg>
    </button>
  );
};
