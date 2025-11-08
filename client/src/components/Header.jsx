import { Link } from 'wouter';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/cartContext';
import { Badge } from '@/components/ui/badge';

export default function Header() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" asChild>
            <a className="text-2xl font-serif font-semibold text-foreground hover-elevate active-elevate-2 px-4 py-2 -mx-4 -my-2 rounded-md" data-testid="link-home">
              GreenHaven
            </a>
          </Link>

          <nav className="flex items-center gap-8">
            <Link href="/products" asChild>
              <a className="text-sm font-medium text-foreground hover-elevate active-elevate-2 px-3 py-2 -mx-3 -my-2 rounded-md" data-testid="link-products">
                Shop Plants
              </a>
            </Link>
            <Link href="/cart" asChild>
              <a className="relative hover-elevate active-elevate-2 p-2 -m-2 rounded-md" data-testid="link-cart">
                <ShoppingCart className="w-6 h-6 text-foreground" />
                {totalItems > 0 && (
                  <Badge 
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary text-primary-foreground border border-primary-border"
                    data-testid="badge-cart-count"
                  >
                    {totalItems}
                  </Badge>
                )}
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
