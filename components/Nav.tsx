
'use client';
import Button from '@/components/ui/Button';
import { Waves } from 'lucide-react';

export default function Nav(){
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-rose-200 grid place-items-center">
            <Waves className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-wide">Instituto Melek Devaya</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="/manifesto" className="hover:opacity-80">Manifesto</a>
          <a href="/ofertas" className="hover:opacity-80">Ofertas</a>
          <a href="/rituais" className="hover:opacity-80">Rituais</a>
          <a href="/contato" className="hover:opacity-80">Contato</a>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild href="/contato">Começar</Button>
        </div>
      </nav>
    </header>
  );
}
