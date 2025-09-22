
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/Card';

export default function Manifesto(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50">
      <Nav />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold mb-4">Manifesto Devaya</h1>
        <p className="text-zinc-700 mb-6">Axé, empoderamento e serviço: um caminho de cura, liberdade e expressão autêntica.</p>
        <Card><CardContent>
          <ul className="grid md:grid-cols-3 gap-4 text-sm">
            <li className="p-4 bg-rose-50 rounded-xl border">Serviço com beleza</li>
            <li className="p-4 bg-rose-50 rounded-xl border">Verdade + poesia</li>
            <li className="p-4 bg-rose-50 rounded-xl border">Espiritualidade prática</li>
            <li className="p-4 bg-rose-50 rounded-xl border">Comunidade & irmandade</li>
            <li className="p-4 bg-rose-50 rounded-xl border">Autonomia feminina</li>
            <li className="p-4 bg-rose-50 rounded-xl border">Integração corpo-mente-alma</li>
          </ul>
        </CardContent></Card>
      </main>
      <Footer />
    </div>
  )
}
