import { render, screen, waitFor } from '@testing-library/react';
import { Products } from '../components/Products';
import userEvent from '@testing-library/user-event';

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

jest.mock('../hooks/useProducts', () => ({
  useProducts: () => mockedProducts,
}));

describe('Products', () => {
  it('renders every product', () => {
    render(<Products category="" />);
    const electronicProduct = screen.getByText(/electronic product/i);
    const furnitureProduct = screen.getByText(/furniture product/i);

    expect(electronicProduct).toBeInTheDocument();
    expect(furnitureProduct).toBeInTheDocument();
  });
  it('renders only electronics category', () => {
    render(<Products category="electronics" />);
    const electronicProduct = screen.getByText(/electronic product/i);

    expect(electronicProduct).toBeInTheDocument();
    expect(screen.queryByText(/furniture product/i)).not.toBeInTheDocument();
  });
  it('renders only furnitures category', () => {
    render(<Products category="furnitures" />);
    const furnitureProduct = screen.getByText(/furniture product/i);

    expect(furnitureProduct).toBeInTheDocument();
    expect(screen.queryByText(/electronic product/i)).not.toBeInTheDocument();
  });
  it('deletes a product', async () => {
    render(<Products category="electronics" />);
    const electronicProduct = screen.getByText(/electronic product/i);

    expect(electronicProduct).toBeInTheDocument();

    const deleteButton = screen.getByLabelText(/delete button/i);

    userEvent.click(deleteButton);

    waitFor(() =>
      expect(screen.findByText(/electronic product/i)).not.toBeInTheDocument()
    );
  });
});
