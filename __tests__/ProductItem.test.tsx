import { render, screen } from '@testing-library/react';
import { ProductItem } from '../components/ProductItem';

describe('ProductItem', () => {
  beforeEach(() => {
    render(
      <ProductItem id="1" name="test product" avatar="test avatar" price="1" />
    );
  });

  it('renders without an error', () => {
    const name = screen.getByText(/test product/i);
    const price = screen.getByText(`$1`);
    const avatar = screen.getByAltText(/test product/i);

    expect(name).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
