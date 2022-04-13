import { render, screen, waitFor, act } from '@testing-library/react';
import { CreateProductForm } from '../components/CreateProductForm';
import selectEvent from 'react-select-event';
import userEvent from '@testing-library/user-event';

const mockedCategories = {
  categories: [
    {
      createdAt: 'date',
      id: '1',
      name: 'electronics',
    },
  ],
  categoriesLoading: false,
  categoriesError: null,
};

jest.mock('../hooks/useCategories', () => ({
  useCategories: () => mockedCategories,
}));

const fakeFetch = jest.fn();

describe('CreateProductForm', () => {
  beforeEach(() => {
    render(<CreateProductForm />);

    window.fetch = fakeFetch.mockImplementation(
      jest.fn(() =>
        Promise.resolve({ json: () => Promise.resolve({ data: 100 }) })
      )
    );
  });

  afterEach(() => {
    fakeFetch.mockClear();
  });

  it('renders error messages after submit if inputs are empty', async () => {
    const submitButton = screen.getByRole('button', {
      name: /SUBMIT/i,
    });

    await userEvent.click(submitButton);

    waitFor(() => {
      expect(
        screen.findByText(/Product name is required/i)
      ).toBeInTheDocument();
      expect(screen.findByText(/Description is required/i)).toBeInTheDocument();
      expect(screen.findByText(/Image URL is required/i)).toBeInTheDocument();
      expect(screen.findByText(/Category is required/i)).toBeInTheDocument();
      expect(screen.findByText(/Price is required/i)).toBeInTheDocument();
    });
  });

  it('submits form without any error', async () => {
    const nameInput = screen.getByPlaceholderText(/Product name/i);
    const descriptionInput = screen.getByPlaceholderText(/Description/i);
    const avatarInput = screen.getByPlaceholderText(/Image URL/i);
    const priceInput = screen.getByPlaceholderText(/Price/i);
    const categoriesSelect = await screen.findByText('Categories');

    await userEvent.type(nameInput, 'test');
    await userEvent.type(descriptionInput, 'test');
    await userEvent.type(avatarInput, 'test');
    await userEvent.type(priceInput, '1');

    waitFor(() => {
      selectEvent.select(categoriesSelect, 'electronics');
    });

    expect(
      screen.queryByText(/Product name is required/i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Description is required/i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Image URL is required/i)
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/Category is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Price is required/i)).not.toBeInTheDocument();
  });
});
