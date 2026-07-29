# Lucas Bergmann

Blog pessoal gerado com [Hugo](https://gohugo.io/) e [Tailwind CSS](https://tailwindcss.com/), hospedado no GitHub Pages.

## Desenvolvimento local

```bash
npm install
npm run dev
```

O site fica disponível em `http://localhost:1313` com rascunhos habilitados.

## Build de produção

```bash
npm run build
```

O deploy é automático via GitHub Actions em push para `main`.

## Novo post

```bash
npm run new -- posts/meu-post/index.md
```

O arquivo é criado em `content/posts/meu-post/index.md` com o front matter preenchido.
Imagens do post ficam no mesmo diretório.
