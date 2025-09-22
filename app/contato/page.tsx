
'use client';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Contato(){
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50">
      <Nav />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold mb-2">Contato</h1>
        <p className="text-zinc-700 mb-6">Recebe o Guia Devaya de Boas-Vindas (PDF) e dá teu primeiro passo.</p>
        <form
          action="https://formspree.io/f/xbldgoyj"
          method="POST"
          onSubmit={() => setSent(true)}
          className="bg-white border rounded-2xl p-6 space-y-4"
        >
          <div>
            <label className="block text-sm mb-1">Nome</label>
            <input name="name" required className="w-full border rounded-xl px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input name="email" type="email" required className="w-full border rounded-xl px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">Mensagem</label>
            <textarea name="message" rows={4} className="w-full border rounded-xl px-3 py-2" />
          </div>
          <button className="inline-flex items-center justify-center rounded-2xl bg-rose-600 text-white px-5 py-2.5">Enviar</button>
          {sent && <p className="text-sm text-green-700">Enviado! Verifica teu email.</p>}
        </form>
        <p className="text-xs text-zinc-500 mt-3">*Formulário usa Formspree como placeholder — trocamos depois por Resend ou servidor próprio.</p>
      </main>
      <Footer />
    </div>
  )
}
