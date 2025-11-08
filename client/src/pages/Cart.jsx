import { Link } from 'wouter';
import Header from '@/components/Header';
import CartItemCard from '@/components/CartItemCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/lib/cartContext';
import { MOCK_PLANTS, formatPrice } from '@/lib/mockData';
import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

export default function Cart() {
  const { cart, getTotalItems } = useCart();
  const [showCheckoutDialog, setShowCheckoutDialog] = useState(false);

  const cartWithDetails = cart.map(item => {
    const plant = MOCK_PLANTS.find(p => p.id === item.plantId);
    return plant ? { ...item, plant } : null;
  }).filter(Boolean);

  const totalItems = getTotalItems();
  const totalCost = cartWithDetails.reduce((sum, item) => 
    sum + (item.plant.price * item.quantity), 0
  );

  const handleCheckout = () => {
    setShowCheckoutDialog(true);
    console.log('Checkout clicked');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center py-16">
            <h1 className="text-3xl font-serif font-normal text-foreground mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">Start adding some beautiful plants to your collection</p>
            <Link href="/products" asChild>
              <Button data-testid="button-continue-shopping-empty">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-serif font-normal text-foreground mb-8" data-testid="text-cart-title">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-0">
                {cartWithDetails.map(item => item && (
                  <CartItemCard 
                    key={item.plantId}
                    plantId={item.plantId}
                    name={item.plant.name}
                    price={item.plant.price}
                    image={item.plant.image}
                    quantity={item.quantity}
                  />
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-serif font-medium text-foreground mb-4">Order Summary</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between text-base">
                      <span className="text-muted-foreground">Total Items:</span>
                      <span className="font-medium text-foreground" data-testid="text-total-items">
                        {totalItems}
                      </span>
                    </div>
                    <div className="flex justify-between text-xl pt-4 border-t border-border">
                      <span className="font-serif font-medium text-foreground">Total:</span>
                      <span className="font-semibold text-foreground" data-testid="text-total-cost">
                        {formatPrice(totalCost)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    className="w-full uppercase tracking-wide"
                    onClick={handleCheckout}
                    data-testid="button-checkout"
                  >
                    Checkout
                  </Button>
                  <Link href="/products" asChild>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      data-testid="button-continue-shopping"
                    >
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <AlertDialog open={showCheckoutDialog} onOpenChange={setShowCheckoutDialog}>
        <AlertDialogContent data-testid="dialog-checkout">
          <AlertDialogHeader>
            <AlertDialogTitle>Coming Soon</AlertDialogTitle>
            <AlertDialogDescription>
              Checkout functionality will be available soon. We're working hard to bring you a seamless shopping experience!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogAction data-testid="button-close-dialog">Close</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
