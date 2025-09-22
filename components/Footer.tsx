
export default function Footer(){
  return (
    <footer className="py-10 border-t bg-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
        <p>© {new Date().getFullYear()} Instituto Melek Devaya — Axé e Verdade.</p>
        <div className="flex gap-4">
          <a href="/manifesto" className="hover:opacity-80">Manifesto</a>
          <a href="/ofertas" className="hover:opacity-80">Ofertas</a>
          <a href="/rituais" className="hover:opacity-80">Rituais</a>
          <a href="/contato" className="hover:opacity-80">Contato</a>
        </div>
      </div>
    </footer>
  );
}
