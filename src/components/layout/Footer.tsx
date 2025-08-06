'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Languages, Leaf, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Le nom doit contenir au moins 2 caractères.',
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse e-mail valide.",
  }),
  message: z.string().min(10, {
    message: 'Le message doit contenir au moins 10 caractères.',
  }),
});

export function Footer() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('La soumission du formulaire a échoué.');
      }

      toast({
        title: `Message reçu, ${values.name}!`,
        description: (
          <p>
            Merci pour votre message. Nous vous répondrons bientôt.
          </p>
        ),
      });
      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Erreur',
        description: 'Une erreur est survenue. Veuillez réessayer.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 font-headline">Restons connectés</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom complet</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre nom" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adresse e-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="votre.email@exemple.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Votre message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Écrivez votre message ici..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Envoyer
                </Button>
              </form>
            </Form>
          </div>
          <div className="md:col-span-2 md:pl-10">
            <div className="mb-8">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold font-headline">Asili Yetu</span>
              </Link>
              <p className="max-w-md">
                Explorer la sagesse de la nature pour une vie plus saine. Nous nous engageons à préserver et partager les connaissances ancestrales.
              </p>
            </div>
            
            <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2 font-headline">Langue</h3>
                <div className="flex items-center gap-2">
                    <Languages className="w-5 h-5 text-primary"/>
                     <Select defaultValue="fr">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Choisir la langue" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="fr">Français</SelectItem>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="sw">Kiswahili</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold">Avertissement :</span> Les informations sur ce site sont fournies à titre informatif uniquement et ne remplacent pas un avis médical professionnel. Consultez toujours un professionnel de la santé qualifié pour tout problème de santé.
              </p>
            </div>

          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Asili Yetu. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
