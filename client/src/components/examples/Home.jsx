import Home from '@/pages/Home';
import { CartProvider } from '@/lib/cartContext';

export default function HomeExample() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}
