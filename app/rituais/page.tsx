
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const rit = [
  { title: 'Manifestação nas Águas', desc: 'Ritual guiado no mar ou na água, com visualização e gesto simbólico.' },
  { title: 'Banho Rosa com Pimenta & Proteção', desc: 'Amor-próprio, beleza, axé e proteção inspirada em Pombagira.' },
  { title: 'Me Devolvo – Desamarração', desc: 'Corte de laços, devolução de projeções e afirmação da identidade.' },
];

export default function Rituais(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50">
      <Nav />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold">Rituais Fundacionais</h1>
        <p className="mt-2 text-zinc-700">Âncoras espirituais que viram prática e presença.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {rit.map((r, i) => (
            <Card key={i}><CardContent>
              <h3 className="font-medium text-lg">{r.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{r.desc}</p>
              <div className="mt-4">
                <Button variant="outline">Ver guia</Button>
              </div>
            </CardContent></Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
