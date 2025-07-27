'use client';

import { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { emergencyTreatmentChatbot } from '@/ai/flows/emergency-treatment-chatbot';
import { cn } from '@/lib/utils';
import { Bot, Loader2, Send, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: number;
  role: 'user' | 'bot';
  text: string;
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'bot', text: "Bonjour ! Comment puis-je vous aider en cas d'urgence ? Posez-moi une question sur un symptôme ou un petit malaise." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now(), role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await emergencyTreatmentChatbot({ query: input });
      const botMessage: Message = { id: Date.now() + 1, role: 'bot', text: result.answer };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage: Message = { id: Date.now() + 1, role: 'bot', text: "Désolé, je rencontre une difficulté pour répondre. Veuillez réessayer." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
      <Card className="w-full max-w-3xl h-[75vh] flex flex-col shadow-2xl">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-3 text-2xl font-headline">
            <Bot className="w-8 h-8 text-primary" />
            Assistant d'Urgence Asili
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-0 overflow-hidden">
          <ScrollArea className="h-full" ref={scrollAreaRef}>
             <div className="p-6 space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    'flex items-start gap-4',
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  {message.role === 'bot' && (
                    <Avatar className="w-10 h-10 border-2 border-primary">
                      <AvatarFallback>
                        <Bot />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      'max-w-md p-4 rounded-2xl',
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-none'
                        : 'bg-secondary text-secondary-foreground rounded-bl-none'
                    )}
                  >
                    <p className="text-base">{message.text}</p>
                  </div>
                  {message.role === 'user' && (
                     <Avatar className="w-10 h-10 border-2 border-muted">
                      <AvatarFallback>
                        <User />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {isLoading && (
                 <div className='flex items-start gap-4 justify-start'>
                    <Avatar className="w-10 h-10 border-2 border-primary">
                      <AvatarFallback>
                        <Bot />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-bl-none p-4">
                        <Loader2 className="w-6 h-6 animate-spin text-primary" />
                    </div>
                 </div>
              )}
             </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="border-t p-4">
          <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
            <Input
              type="text"
              placeholder="Décrivez votre situation..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              className="flex-1"
            />
            <Button type="submit" size="icon" disabled={isLoading}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
