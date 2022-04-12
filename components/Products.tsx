import { FC } from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductItem } from './ProductItem';

type Props = {
  category: string | undefined;
};

export const Products: FC<Props> = ({ category }): JSX.Element => {
  const { products, productsLoading, productsError } = useProducts();

  if (productsLoading) return <h1>Loading...</h1>;
  if (productsError)
    return <h1 className="text-red-500">{productsError.message}</h1>;
  if (category) {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );

    return (
      <div className="grid gap-5 text-center md:gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts &&
          filteredProducts?.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              name={product.name}
              avatar={product.avatar}
              price={`$${product.price}`}
            />
          ))}
      </div>
    );
  }
  return (
    <div className="grid gap-10 text-center  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products &&
        products?.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            avatar={product.avatar}
            price={`$${product.price}`}
          />
        ))}
    </div>
  );
};
