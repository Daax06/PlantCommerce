import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import heroImg from '@assets/generated_images/Indoor_jungle_hero_background_18b557a6.png';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-white mb-6" data-testid="text-company-name">
              GreenHaven
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto" data-testid="text-company-description">
              Transform your living space with our curated collection of premium houseplants. 
              Each plant is carefully selected and comes with expert care guidance to help you 
              create your own indoor sanctuary.
            </p>
            <Link href="/products" asChild>
              <Button 
                size="lg" 
                className="uppercase tracking-wide text-sm px-8 py-6 bg-white/90 backdrop-blur-md text-foreground hover:bg-white border border-white/20"
                data-testid="button-get-started"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
