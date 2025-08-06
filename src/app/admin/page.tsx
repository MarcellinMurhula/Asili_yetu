import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { getMessages } from "@/lib/messages";
import { User, Mail, MessageSquare } from 'lucide-react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function AdminPage() {
  const cookieStore = cookies();
  const isAuthenticated = cookieStore.get('auth');

  if (!isAuthenticated || isAuthenticated.value !== 'true') {
    redirect('/login');
  }
  
  const messages = getMessages();

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl font-headline">
          Messages des Utilisateurs
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-muted-foreground sm:mt-4">
          Voici les derniers messages reçus via le formulaire de contact.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-secondary/50">
                <CardTitle className="flex items-center gap-3">
                  <User className="h-5 w-5 text-primary" />
                  <span>{msg.name}</span>
                </CardTitle>
                 <CardDescription className="flex items-center gap-3 pt-2">
                   <Mail className="h-4 w-4 text-muted-foreground" />
                   <a href={`mailto:${msg.email}`} className="hover:underline">{msg.email}</a>
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                    <MessageSquare className="h-5 w-5 mt-1 text-primary"/>
                    <p className="text-base text-foreground/90">{msg.message}</p>
                </div>
              </CardContent>
            </Card>
          )).reverse() // To show the latest messages first
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">Aucun message pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
