
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const items = [
  { title: 'Mentoria Devaya', desc: 'Acompanhamento individual com rituais, estudo e plano de vida espiritual-prático.' },
  { title: 'Retiros & Rituais', desc: 'Experiências imersivas com o Ritual das Águas e Banho Rosa com Pimenta.' },
  { title: 'Cursos & Estudos', desc: 'Tarot, Kabbalah, linguagem poética, magnetismo feminino e autocuidado.' },
  { title: 'Comunidade Devaya', desc: 'Círculos de mulheres, leituras coletivas e práticas semanais.' },
  { title: 'Produtos Ritualísticos', desc: 'PDFs, cadernos de prática, artes e coleções sazonais.' },
  { title: 'Consultas Espirituais', desc: 'Atendimentos sob demanda, com ética e sigilo.' }
];

export default function Ofertas(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50">
      <Nav />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold">Ofertas Iniciais</h1>
        <p className="mt-2 text-zinc-700">Caminhos para florescer com propósito.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((card, i) => (
            <Card key={i}><CardContent>
              <h3 className="font-medium text-lg">{card.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{card.desc}</p>
              <div className="mt-4">
                <Button variant="outline">Saber mais</Button>
              </div>
            </CardContent></Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
