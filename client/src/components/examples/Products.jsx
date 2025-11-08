import Products from '@/pages/Products';
import { CartProvider } from '@/lib/cartContext';

export default function ProductsExample() {
  return (
    <CartProvider>
      <Products />
    </CartProvider>
  );
}
