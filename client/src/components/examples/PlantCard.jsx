import PlantCard from '../PlantCard';
import { CartProvider } from '@/lib/cartContext';
import monsteraImg from '@assets/generated_images/Monstera_deliciosa_product_photo_f2dc90d8.png';

export default function PlantCardExample() {
  return (
    <CartProvider>
      <div className="max-w-sm">
        <PlantCard 
          id="1"
          name="Monstera Deliciosa"
          category="Tropical"
          price={4500}
          image={monsteraImg}
          description="Large split leaves create a dramatic statement in any room"
        />
      </div>
    </CartProvider>
  );
}
