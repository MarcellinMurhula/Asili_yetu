'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Bot, Home, Leaf, Menu, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Accueil', icon: Home },
  { href: '/plants', label: 'Plantes', icon: Leaf },
  { href: '/tips', label: 'Astuces', icon: Sparkles },
];

export function Header() {
  const pathname = usePathname();

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <Button
        key={link.href}
        asChild
        variant={pathname === link.href ? 'secondary' : 'ghost'}
        className={cn(isMobile && 'justify-start')}
      >
        <Link href={link.href}>
          <link.icon className="mr-2 h-4 w-4" />
          {link.label}
        </Link>
      </Button>
    ));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Asili Yetu
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            {renderNavLinks()}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Ouvrir le menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">Asili Yetu</span>
                </Link>
                <nav className="flex flex-col gap-2">{renderNavLinks(true)}</nav>
              </SheetContent>
            </Sheet>
          </div>
          <Link href="/" className="flex items-center space-x-2 md:hidden">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Asili Yetu</span>
          </Link>
          <Button asChild>
            <Link href="/chatbot">
              Chatbot <Bot className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
