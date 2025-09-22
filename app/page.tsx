
'use client';
import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import { Heart, Sparkles, Waves, Wind, Flower2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

export default function Page(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50 text-zinc-900">
      <Nav />
      <section className="relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-72 w-72 bg-rose-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 h-56 w-56 bg-sky-100/50 rounded-full blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-14 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Reencontra teu eixo. <span className="text-rose-600">Reescreve</span> tua vida.
            </h1>
            <p className="mt-5 text-lg text-zinc-700">
              O Instituto Melek Devaya guia mulheres em jornadas de reconexão, espiritualidade e expressão — com rituais, estudos e práticas que viram vida real.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/ofertas" asChild={true} size="lg">Explorar Ofertas</Button>
              <Button href="/manifesto" asChild={true} size="lg" variant="outline">Ler Manifesto</Button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-zinc-600">
              <Sparkles className="h-4 w-4" />
              <span>Axé, beleza e verdade como prática diária.</span>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}}>
            <Card className="rounded-2xl shadow-xl">
              <CardContent className="p-6">
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-rose-100 via-white to-sky-100 grid place-items-center">
                  <div className="flex flex-col items-center">
                    <Wind className="h-10 w-10 mb-3" />
                    <p className="text-center max-w-xs text-zinc-700">
                      “15 de dezembro de 2015 – ANGEL perdida procurando a Estação ANGEL” — nossa abertura oficial.
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="p-3 rounded-xl bg-white border">
                    <Heart className="h-4 w-4 mx-auto mb-2" />
                    Amor-próprio
                  </div>
                  <div className="p-3 rounded-xl bg-white border">
                    <Waves className="h-4 w-4 mx-auto mb-2" />
                    Manifestação nas Águas
                  </div>
                  <div className="p-3 rounded-xl bg-white border">
                    <Flower2 className="h-4 w-4 mx-auto mb-2" />
                    Proteção & Beleza
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
