import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import Home from '../pages/index';
import selectEvent from 'react-select-event';

const mockedProducts = {
  products: [
    {
      createdAt: 'date',
      name: 'electronic product',
      avatar: 'test avatar',
      id: '1',
      price: '1',
      category: 'electronics',
      description: 'description',
    },
    {
      createdAt: 'date',
      name: 'furniture product',
      avatar: 'test avatar',
      id: '2',
      price: '2',
      category: 'furnitures',
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
      name: 'electronics',
      id: '1',
    },
    {
      createdAt: 'date',
      name: 'furnitures',
      id: '2',
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
    const storeButton = screen.getByRole('button', {
      name: /UPayments Store/i,
    });

    expect(storeButton).toBeInTheDocument();
  });
  it('renders search input', () => {
    const input = screen.getByPlaceholderText(/Apple Watch/i);

    expect(input).toBeInTheDocument();
  });
  it('renders categories', async () => {
    const categorySelect = await screen.findByText(/Categories/i);

    expect(categorySelect).toBeInTheDocument();
  });
  it('renders products', () => {
    const electronicProduct = screen.getByText(/electronic product/i);
    const furnitureProduct = screen.getByText(/furniture product/i);

    expect(electronicProduct).toBeInTheDocument();
    expect(furnitureProduct).toBeInTheDocument();
  });
});
