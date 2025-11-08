import CartItemCard from '../CartItemCard';
import { CartProvider } from '@/lib/cartContext';
import monsteraImg from '@assets/generated_images/Monstera_deliciosa_product_photo_f2dc90d8.png';

export default function CartItemCardExample() {
  return (
    <CartProvider>
      <div className="max-w-2xl bg-card rounded-lg">
        <CartItemCard 
          plantId="1"
          name="Monstera Deliciosa"
          price={4500}
          image={monsteraImg}
          quantity={2}
        />
      </div>
    </CartProvider>
  );
}
