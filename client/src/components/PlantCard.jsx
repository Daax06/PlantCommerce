import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/lib/cartContext';
import { formatPrice } from '@/lib/mockData';

export default function PlantCard({ id, name, category, price, image, description }) {
  const { cart, addToCart } = useCart();
  const isInCart = cart.some(item => item.plantId === id);

  const handleAddToCart = () => {
    addToCart(id);
    console.log(`Added ${name} to cart`);
  };

  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          data-testid={`img-plant-${id}`}
        />
      </div>
      <CardContent className="p-6">
        <div className="mb-2">
          <Badge variant="secondary" className="text-xs" data-testid={`badge-category-${id}`}>
            {category}
          </Badge>
        </div>
        <h3 className="text-xl font-serif font-medium mb-2 text-foreground" data-testid={`text-plant-name-${id}`}>
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed" data-testid={`text-description-${id}`}>
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-foreground" data-testid={`text-price-${id}`}>
            {formatPrice(price)}
          </span>
          <Button 
            onClick={handleAddToCart}
            disabled={isInCart}
            data-testid={`button-add-to-cart-${id}`}
            className="uppercase tracking-wide text-sm"
          >
            {isInCart ? 'In Cart' : 'Add to Cart'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
