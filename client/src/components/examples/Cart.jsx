import Cart from '@/pages/Cart';
import { CartProvider } from '@/lib/cartContext';

export default function CartExample() {
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  );
}
