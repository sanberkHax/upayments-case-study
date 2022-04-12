import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

const mockedProducts = {
  products: [
    {
      createdAt: 'date',
      name: 'name',
      avatar: 'avatar',
      id: 'id',
      price: 'price',
      category: 'category',
      description: 'description',
    },
  ],
  productsLoading: false,
  productsError: null,
};
const mockedCategories = {
  categories: [
    {
      createdAt: 'date',
      name: 'name',
      id: 'id',
    },
  ],
  categoriesLoading: false,
  categoriesError: null,
};

jest.mock('../hooks/useProducts', () => ({
  useProducts: () => mockedProducts,
}));
jest.mock('../hooks/useCategories', () => ({
  useCategories: () => mockedCategories,
}));

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });
  it('renders the header', () => {
    const heading = screen.getByRole('heading', {
      name: /UPayments Store/i,
    });

    expect(heading).toBeInTheDocument();
  });
  it('renders search input', () => {
    const input = screen.getByPlaceholderText(/Apple Watch/i);
    expect(input).toBeInTheDocument();
  });
  it('renders categories', () => {
    const categorySelect = screen.getByText(/Categories/i);
    expect(categorySelect).toBeInTheDocument();
  });
  it('renders a product', () => {
    const product = screen.getByLabelText(/Product/i);
    expect(product).toBeInTheDocument();
  });
});
