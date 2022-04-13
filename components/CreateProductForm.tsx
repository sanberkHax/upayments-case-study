import { useForm, SubmitHandler } from 'react-hook-form';
import { CategorySelect } from './CategorySelect';
import { useState } from 'react';
import { useRouter } from 'next/router';

type Inputs = {
  name: string;
  description: string;
  avatar: string;
  price: string;
};

export const CreateProductForm = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = {
      ...data,
      price: parseInt(data.price),
      category: selectedCategory,
      developerEmail: 'sanberk.trker@gmail.com',
    };
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
      const data = await response.json();
      router.push('/');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="flex flex-col justify-around w-full gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
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
