import React, { FC } from 'react';
import { useCategories } from '../hooks/useCategories';
import Select from 'react-select';

interface Option {
  value: string;
  label: string;
}

interface Props {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | undefined>>;
}
export const CategorySelect: FC<Props> = ({
  setSelectedCategory,
}): JSX.Element => {
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
    <>
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
              menu: (base) => ({
                ...base,
                zIndex: 99,
              }),
            }}
            options={options}
            onChange={changeHandler}
            isClearable={true}
            placeholder="Categories"
          />
        </div>
      )}
    </>
  );
};
