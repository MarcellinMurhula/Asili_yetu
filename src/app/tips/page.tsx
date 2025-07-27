import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { tips } from '@/data/content';
import { Lightbulb } from 'lucide-react';

export default function TipsPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
          Astuces et Remèdes d'Urgence
        </h1>
        <p className="mt-3 max-w-3xl mx-auto text-xl text-muted-foreground sm:mt-4">
          Des conseils pratiques inspirés du savoir traditionnel pour les petits maux du quotidien.
        </p>
      </div>

      <div className="flex justify-center">
        <Carousel className="w-full max-w-2xl">
          <CarouselContent>
            {tips.map((tip) => (
              <CarouselItem key={tip.id}>
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center space-y-4">
                      <div className="bg-primary/10 p-4 rounded-full">
                        <Lightbulb className="h-10 w-10 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold font-headline">{tip.title}</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {tip.content}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
      
      <div className="mt-16 text-center text-muted-foreground p-4 border-t">
          <h3 className="font-semibold text-foreground font-headline">Note pour l'intégration de contenu</h3>
          <p className="max-w-3xl mx-auto text-sm">
            Dans une application réelle, les astuces affichées ici pourraient être gérées via un système de gestion de contenu (CMS). Un administrateur pourrait téléverser un document PDF ou remplir un formulaire, et le contenu serait automatiquement extrait et affiché sur cette page, garantissant une mise à jour facile et rapide des informations.
          </p>
      </div>

    </div>
  );
}
