# Devaya Website – Next.js Project Structure

Abaixo está um projeto Next.js 14 completo com rotas, páginas e componentes para o Instituto Melek Devaya. Ele está preparado para deploy na **Vercel** (ou Netlify), com suporte para domínio `.org`, SEO e email de contato.

---

## Estrutura de Pastas
```
/devaya-site
  /app
    /page.tsx (Landing)
    /manifesto/page.tsx
    /ofertas/page.tsx
    /rituais/page.tsx
    /sobre/page.tsx
    /contato/page.tsx
  /components
    Navbar.tsx
    Footer.tsx
    Hero.tsx
    Section.tsx
  /public
    /images (colocar artes, símbolos, fotos)
  /styles
    globals.css
  next.config.js
  package.json
  tailwind.config.js
```

---

## Exemplo de `app/layout.tsx`
```tsx
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instituto Melek Devaya",
  description: "Axé, empoderamento e serviço espiritual – Instituto Melek Devaya.",
  openGraph: {
    title: "Instituto Melek Devaya",
    description: "Axé, empoderamento e serviço espiritual – Instituto Melek Devaya.",
    url: "https://melekdevaya.org",
    siteName: "Instituto Melek Devaya",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Instituto Melek Devaya",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gradient-to-b from-white to-rose-50 text-zinc-900">
        {children}
      </body>
    </html>
  );
}
```

---

## Página Inicial – `app/page.tsx`
```tsx
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Seções de manifesto, ofertas, rituais resumidas */}
      <Footer />
    </>
  );
}
```

---

## Exemplo de Rota – `app/manifesto/page.tsx`
```tsx
import Section from "@/components/Section";

export default function ManifestoPage() {
  return (
    <Section title="Manifesto Devaya">
      <p>
        Axé, empoderamento e serviço: um caminho de cura, liberdade e expressão
        autêntica.
      </p>
      <ul className="list-disc pl-5 mt-4 space-y-2">
        <li>Serviço com beleza</li>
        <li>Verdade + poesia</li>
        <li>Espiritualidade prática</li>
        <li>Comunidade & irmandade</li>
        <li>Autonomia feminina</li>
        <li>Integração corpo-mente-alma</li>
      </ul>
    </Section>
  );
}
```

---

## Contato – `app/contato/page.tsx`
```tsx
import Section from "@/components/Section";

export default function ContatoPage() {
  return (
    <Section title="Contato">
      <p className="mb-4">
        Escreve para nós e recebe o Guia Devaya de Boas-Vindas.
      </p>
      <a
        href="mailto:contato@melekdevaya.org"
        className="inline-block px-6 py-3 rounded-2xl bg-rose-600 text-white hover:bg-rose-700"
      >
        contato@melekdevaya.org
      </a>
    </Section>
  );
}
```

---

## Deploy e Domínio
1. **Hospedagem**: Vercel (1-click deploy de Next.js).  
2. **Domínio .org**: registrar (ex: `melekdevaya.org`).  
3. **Configuração DNS**: apontar domínio para Vercel.  
4. **Email profissional**: Google Workspace ou Zoho Mail → `contato@melekdevaya.org`.  

---

## Próximos Passos
- Registrar domínio `.org`.
- Deploy do projeto Next.js.
- Configurar SEO + OG + favicon.
- Adicionar imagens oficiais Devaya (símbolos, água, flores, vento).
- Criar versão multilíngue (pt + en) no futuro.

---

💫 Este é o esqueleto do **site oficial Devaya** pronto para deploy. Só precisamos escolher e registrar o domínio `.org` e publicar.
