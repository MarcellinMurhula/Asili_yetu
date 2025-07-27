'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import type { Plant } from '@/lib/types';
import { Button } from './ui/button';
import { Bot, Leaf, Loader2, Sparkles } from 'lucide-react';
import { summarizeMedicinalPlantInfo } from '@/ai/flows/summarize-medicinal-plant-info';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface PlantDetailProps {
  plant: Plant;
}

export function PlantDetail({ plant }: PlantDetailProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetSummary = async () => {
    setIsLoading(true);
    setSummary(null);
    try {
      const result = await summarizeMedicinalPlantInfo({ plantName: plant.name });
      setSummary(result.summary);
    } catch (error) {
      console.error('Error fetching summary:', error);
      setSummary("Désolé, une erreur s'est produite lors de la génération du résumé.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <div className="relative h-96 w-full rounded-lg shadow-lg overflow-hidden">
            <Image
              src={plant.image}
              alt={`Image de ${plant.name}`}
              fill
              className="object-cover"
              data-ai-hint={plant.dataAiHint}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">{plant.name}</h1>
          <p className="text-xl text-muted-foreground italic mb-6">{plant.scientificName}</p>
          <p className="text-lg leading-relaxed">{plant.description}</p>
        </div>
      </div>

      <div className="mt-12 md:mt-16 space-y-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl md:text-3xl font-headline">
              <Leaf className="mr-3 h-8 w-8 text-primary" />
              Usages Traditionnels
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {plant.uses.map((use, index) => (
                <Badge key={index} variant="secondary" className="text-base px-4 py-2">
                  {use}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl md:text-3xl font-headline">
              <Sparkles className="mr-3 h-8 w-8 text-primary" />
              Préparation et Application
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">{plant.preparation}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl md:text-3xl font-headline">
              <Bot className="mr-3 h-8 w-8 text-primary" />
              Résumé par l'IA
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!summary && (
              <div className="flex flex-col items-start gap-4">
                <p>Cliquez sur le bouton pour obtenir un résumé rapide généré par notre assistant IA.</p>
                <Button onClick={handleGetSummary} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Génération...
                    </>
                  ) : (
                    'Obtenir un résumé IA'
                  )}
                </Button>
              </div>
            )}
            {summary && <p className="text-lg leading-relaxed">{summary}</p>}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
