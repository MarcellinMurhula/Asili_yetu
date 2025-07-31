import { plants } from '@/data/content';
import { PlantCard } from '@/components/PlantCard';

export default function PlantsPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl font-headline">
          Notre Herboristerie
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-muted-foreground sm:mt-4">
          Découvrez les plantes médicinales de la région des Grands Lacs et leurs bienfaits.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}
