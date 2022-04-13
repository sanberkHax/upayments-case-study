import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { CategorySelect } from './CategorySelect';
import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type Inputs = {
  name: string;
  description: string;
  avatar: string;
  price: string;
  category: string;
};

export const CreateProductForm: FC = (): JSX.Element => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [categoryError, setCategoryError] = useState<boolean | undefined>(
    false
  );
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    if (selectedCategory) {
      setCategoryError(false);
    }
  }, [selectedCategory]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setFormError(null);
    if (!selectedCategory) {
      setCategoryError(true);
      return;
    }

    // Build form data for post request body
    const formData = {
      ...data,
      price: parseInt(data.price),
      category: selectedCategory,
      developerEmail: 'example@gmail.com',
    };

    // Send post request
    try {
      const response = await fetch(
        'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error('Error when creating a product, please try again');
      } else {
        // Navigate to homepage on succesful request
        router.push('/');
      }
    } catch (error: any) {
      setFormError(error.message);
    }
  };

  const onError: SubmitErrorHandler<Inputs> = (err) => {
    if (!selectedCategory) {
      setCategoryError(true);
    }
  };
  return (
    <form
      className="flex flex-col justify-around w-full gap-3"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <h1 className="text-center text-red-500">{formError}</h1>
      <input
        className="bg-white rounded-xl shadow-md py-1 px-3"
        placeholder="Product name"
        {...register('name', { required: true })}
      />
      {errors.name && (
        <span className="text-red-500">Product name is required</span>
      )}
      <textarea
        className="bg-white rounded-xl shadow-md py-1 px-3"
        placeholder="Description"
        {...register('description', { required: true })}
        rows={5}
      />
      {errors.description && (
        <span className="text-red-500">Description is required</span>
      )}
      <input
        className="bg-white rounded-xl shadow-md py-[6px] px-3"
        placeholder="Image URL"
        {...register('avatar', { required: true })}
      />
      {errors.avatar && (
        <span className="text-red-500">Image URL is required</span>
      )}
      <CategorySelect setSelectedCategory={setSelectedCategory} />
      {categoryError && (
        <span className="text-red-500">Category is required</span>
      )}
      <input
        className="bg-white rounded-xl shadow-md py-[6px] px-3 "
        type="number"
        placeholder="Price"
        {...register('price', { required: true })}
      />
      {errors.price && <span className="text-red-500">Price is required</span>}
      <button
        type="submit"
        className="font-bold bg-white hover:bg-slate-300 rounded-xl shadow-md py-[6px] px-3"
      >
        SUBMIT
      </button>
    </form>
  );
};
