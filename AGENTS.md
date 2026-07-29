# AGENTS.md

Instruções compactas para agentes trabalhando neste repositório.

## O que é este projeto

Blog pessoal em português (pt-BR) gerado com [Hugo](https://gohugo.io/) e tema customizado com [Tailwind CSS](https://tailwindcss.com/), hospedado no GitHub Pages.

## Stack e dependências

- Hugo **Extended**, mínimo `0.146.0` (CI usa `0.164.0`).
- Tailwind CSS v3 como dependência de build (`npm`).
- Layouts customizados em `layouts/`; não há tema externo.
- Node.js 22+ e `npm` necessários para desenvolvimento local e CI.
- Não há `Makefile`, testes automatizados, lint ou formatador configurado.

## Comandos principais

- Instalar dependências: `npm install`
- Servidor local com rascunhos: `npm run dev` (gera CSS e inicia `hugo server --buildDrafts`)
- Build de produção: `npm run build` (gera CSS minificado + `hugo --gc --minify`)
- CI usa a baseURL: `https://<owner>.github.io/`

## Estrutura de conteúdo

- Posts são **page bundles** em `content/posts/<slug>/`, contendo `index.md` e imagens juntas.
- **Slug**: minúsculas, hífens, sem data na URL. Exemplo: `content/posts/por-que-criei-este-blog/` publica em `/posts/por-que-criei-este-blog/`.
- Front matter dos posts: `title`, `date`, `tags`, `draft`.
- Tags são minúsculas e geram listagens em `/tags/<tag>/`.
- Rascunhos (`draft: true`) aparecem no servidor local com `--buildDrafts`, mas nunca são publicados.
- Textos em português; o front matter usa `title`, não `título`.

## Build e deploy

- Deploy automático via GitHub Action `.github/workflows/pages.yaml` em `git push` para `main`.
- Não existe deploy manual.
- A action precisa do histórico git completo (`fetch-depth: 0`) porque `enableGitInfo: true`.
- O build roda com `HUGO_ENVIRONMENT=production` e `HUGO_ENV=production`.
- O CSS final é gerado em `assets/css/main.css` pelo Tailwind CLI e ignorado pelo git.

## Decisões arquiteturais

- ADRs em `docs/adr/`.
- Glossário do domínio em `CONTEXT.md`.
- Imagens ficam no próprio repositório, ao lado de cada post (`page bundle`), e não em storage externo.

## Gotchas

- `assets/css/main.css` é gerado pelo Tailwind CLI; não edite manualmente. O arquivo-fonte é `assets/css/styles.css`.
- `hugo.yaml` define `enableGitInfo: true` — sem histórico git completo, timestamps `.GitInfo` e `.Lastmod` podem falhar ou ficar inconsistentes.
- `enableInlineShortcodes: true` permanece habilitado para flexibilidade de shortcodes.
