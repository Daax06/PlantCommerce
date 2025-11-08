import Header from '@/components/Header';
import PlantCard from '@/components/PlantCard';
import { MOCK_PLANTS, CATEGORIES } from '@/lib/mockData';

export default function Products() {
  const groupedPlants = CATEGORIES.map(category => ({
    category,
    plants: MOCK_PLANTS.filter(plant => plant.category === category)
  })).filter(group => group.plants.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-serif font-normal text-foreground mb-4" data-testid="text-page-title">
            Our Plant Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover beautiful, healthy plants for every space and skill level
          </p>
        </div>

        {groupedPlants.map(({ category, plants }) => (
          <div key={category} className="mb-16">
            <h2 className="text-3xl font-serif font-normal text-foreground mb-8" data-testid={`text-category-${category}`}>
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plants.map(plant => (
                <PlantCard key={plant.id} {...plant} />
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
