import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { formatPrice } from '@/lib/mockData';
import { useCart } from '@/lib/cartContext';

export default function CartItemCard({ plantId, name, price, image, quantity }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrease = () => {
    updateQuantity(plantId, quantity + 1);
    console.log(`Increased ${name} quantity to ${quantity + 1}`);
  };

  const handleDecrease = () => {
    updateQuantity(plantId, quantity - 1);
    console.log(`Decreased ${name} quantity to ${quantity - 1}`);
  };

  const handleDelete = () => {
    removeFromCart(plantId);
    console.log(`Removed ${name} from cart`);
  };

  const subtotal = price * quantity;

  return (
    <div className="flex gap-6 p-6 border-b border-border" data-testid={`cart-item-${plantId}`}>
      <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
          data-testid={`img-cart-item-${plantId}`}
        />
      </div>

      <div className="flex-1 flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-serif font-medium text-foreground mb-1" data-testid={`text-cart-item-name-${plantId}`}>
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2" data-testid={`text-cart-item-price-${plantId}`}>
            {formatPrice(price)} each
          </p>
          <p className="text-base font-semibold text-foreground" data-testid={`text-cart-item-subtotal-${plantId}`}>
            Subtotal: {formatPrice(subtotal)}
          </p>
        </div>

        <div className="flex flex-col items-end gap-4">
          <div className="flex items-center gap-2">
            <Button 
              size="icon" 
              variant="outline"
              onClick={handleDecrease}
              data-testid={`button-decrease-${plantId}`}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="w-12 text-center font-medium" data-testid={`text-quantity-${plantId}`}>
              {quantity}
            </span>
            <Button 
              size="icon" 
              variant="outline"
              onClick={handleIncrease}
              data-testid={`button-increase-${plantId}`}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <Button 
            size="sm" 
            variant="destructive"
            onClick={handleDelete}
            data-testid={`button-delete-${plantId}`}
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
