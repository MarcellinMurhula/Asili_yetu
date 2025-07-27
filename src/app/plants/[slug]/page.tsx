import { plants } from '@/data/content';
import { notFound } from 'next/navigation';
import { PlantDetail } from '@/components/PlantDetail';

interface PlantPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return plants.map((plant) => ({
    slug: plant.slug,
  }));
}

export default function PlantPage({ params }: PlantPageProps) {
  const plant = plants.find((p) => p.slug === params.slug);

  if (!plant) {
    notFound();
  }

  return <PlantDetail plant={plant} />;
}
