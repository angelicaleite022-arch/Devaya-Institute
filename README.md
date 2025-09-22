
# Instituto Melek Devaya — Website (Next.js 14)

## Stack
- Next.js 14 (App Router)
- TailwindCSS
- framer-motion, lucide-react
- Simple UI components (Button, Card)

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm start
```

## Deploy (Vercel)
1. Crie uma conta em https://vercel.com/ e instale o Vercel CLI (opcional).
2. `vercel` ou conecte o repositório GitHub e importe o projeto.
3. Defina o domínio customizado (ex: melekdevaya.org) no painel da Vercel.
4. Copie os registros DNS sugeridos (A / CNAME) para o seu registrador.

## Domínio
- Registre um .org no seu registrador preferido (Cloudflare, Namecheap, Gandi, GoDaddy).
- Ative DNSSEC e Privacy/WHOIS quando possível.
- Crie email `contato@seu-dominio.org` via:
  - Google Workspace, Zoho Mail, Fastmail, ou
  - Email forwarding do próprio registrador + Formspree/Resend para formulários.

## Formulário de Contato
- Atualmente usa Formspree (action em /contato). Substitua pela sua URL do serviço ou implemente uma API route usando Resend.

## SEO/OG
- Edite `app/layout.tsx` (metadata) e substitua `public/og.png` por uma imagem 1200x630.

## Estrutura
- `app/` rotas: `/`, `/manifesto`, `/ofertas`, `/rituais`, `/contato`
- `components/` UI
- `public/` ícones e imagens

Com amor e axé ✨
