'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { proverbs } from '@/data/content';
import { ArrowRight, Bot, Quote, Leaf, Sparkles, PlusCircle } from 'lucide-react';

export default function Home() {
  const [currentProverbIndex, setCurrentProverbIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProverbIndex((prevIndex) => (prevIndex + 1) % proverbs.length);
    }, 7000); // Change proverb every 7 seconds

    return () => clearInterval(timer);
  }, []);

  const currentProverb = proverbs[currentProverbIndex];

  return (
    <div className="flex flex-col items-center justify-center">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 text-center bg-primary/10 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHVLqHtZJWyuz0Nvjzb3kDDMRXGIORF4O3Yw&s)' }}
          data-ai-hint="medicinal plants texture"
        ></div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-6 lg:grid-cols-1 lg:gap-x-12 xl:grid-cols-1">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary-foreground font-headline">
                  Asili Yetu
                </h1>
                <p className="max-w-[600px] text-foreground/80 md:text-xl mx-auto">
                  Redécouvrez la puissance des remèdes ancestraux. Votre guide
                  vers la médecine traditionnelle de la région des Grands Lacs
                  Africains.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild size="lg">
                  <Link href="/plants">
                    Explorer les plantes <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/chatbot">
                    Urgence? Parlez au Chatbot <Bot className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex justify-center">
            <Card className="max-w-3xl w-full shadow-lg border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <Quote className="mx-auto h-12 w-12 text-primary" />
                <blockquote className="mt-4 text-xl md:text-2xl font-semibold italic text-foreground">
                  "{currentProverb.text}"
                </blockquote>
                <p className="mt-4 text-lg text-muted-foreground font-headline">
                  - Proverbe {currentProverb.origin}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

       <section className="w-full py-12 md:py-24 bg-background">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
              Une Sagesse Transmise de Génération en Génération
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Notre mission est de préserver et de partager la connaissance des plantes médicinales qui ont soigné nos communautés depuis des siècles.
            </p>
          </div>
          <div className="relative grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mx-auto">
             <Link href="/plants" className="flex flex-col items-center space-y-2 p-4 rounded-lg transition-all hover:bg-primary/5 hover:shadow-lg group">
                <div className="p-4 bg-primary/10 rounded-full transition-all group-hover:scale-110 group-hover:bg-primary/20">
                    <Leaf className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-headline">Plantes Médicinales</h3>
                <p className="text-sm text-muted-foreground">Un catalogue détaillé des plantes et de leurs usages thérapeutiques.</p>
            </Link>
             <Link href="/tips" className="flex flex-col items-center space-y-2 p-4 rounded-lg transition-all hover:bg-primary/5 hover:shadow-lg group">
                <div className="p-4 bg-primary/10 rounded-full transition-all group-hover:scale-110 group-hover:bg-primary/20">
                    <Sparkles className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-headline">Astuces d'Urgence</h3>
                <p className="text-sm text-muted-foreground">Des conseils pratiques pour les situations courantes, basés sur le savoir local.</p>
            </Link>
             <Link href="/chatbot" className="flex flex-col items-center space-y-2 p-4 rounded-lg transition-all hover:bg-primary/5 hover:shadow-lg group">
                <div className="p-4 bg-primary/10 rounded-full transition-all group-hover:scale-110 group-hover:bg-primary/20">
                    <Bot className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-headline">Assistant IA</h3>
                <p className="text-sm text-muted-foreground">Obtenez des réponses rapides à vos questions urgentes grâce à notre chatbot.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
