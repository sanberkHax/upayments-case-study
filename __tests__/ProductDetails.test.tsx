import { render, screen } from '@testing-library/react';
import ProductDetails from '../pages/products/[id]';

const mockedProduct = {
  product: {
    createdAt: 'date',
    name: 'electronic product',
    avatar: 'test avatar',
    id: '1',
    price: '1',
    category: 'electronics',
    description: 'product description',
  },
  productLoading: false,
  productError: null,
};

jest.mock('../hooks/useProduct', () => ({
  useProduct: () => mockedProduct,
}));

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { id: '1' },
  }),
}));

describe('ProductDetails', () => {
  beforeEach(() => {
    render(<ProductDetails />);
  });
  it('renders product details', () => {
    const name = screen.getByRole('heading', { name: /electronic product/i });
    const price = screen.getByRole('heading', { name: `$1` });
    const description = screen.getByText(/product description/i);

    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
