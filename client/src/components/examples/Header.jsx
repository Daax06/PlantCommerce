import Header from '../Header';
import { CartProvider } from '@/lib/cartContext';

export default function HeaderExample() {
  return (
    <CartProvider>
      <Header />
    </CartProvider>
  );
}
