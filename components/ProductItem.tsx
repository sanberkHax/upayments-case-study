import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DeleteButton } from './DeleteButton';

type Props = {
  id: string;
  name: string;
  avatar: string;
  price: string;
};

export const ProductItem: FC<Props> = ({
  id,
  name,
  avatar,
  price,
}): JSX.Element => {
  const myLoader = () => {
    return avatar;
  };
  return (
    <Link href={`/products/${id}`}>
      <button
        aria-label="Product"
        className="flex hover:scale-95 transition flex-col gap-3 justify-around items-center"
      >
        <div className="bg-white rounded-xl p-5 relative">
          <DeleteButton id={id} />
          <Image
            loader={myLoader}
            src={avatar}
            alt={name}
            width={180}
            height={200}
            layout="fixed"
          />
        </div>
        <h1>{name}</h1>
        <h2>{price}</h2>
      </button>
    </Link>
  );
};
