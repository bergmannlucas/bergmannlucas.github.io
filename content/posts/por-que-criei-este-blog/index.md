---
title: Por Que Criei Este Blog
date: 2026-07-28
tags:
  - blog
  - hugo
  - meta
---

Todo desenvolvedor deveria ter um blog. Não pra virar influencer, mas por
dois motivos bem práticos. Primeiro: registrar o que eu faço e aprendo,
com passo a passo, pra consultar daqui uns anos quando tiver esquecido
como resolvi algo. Segundo: escrever é treino de comunicação — e
comunicação é uma habilidade que a nossa área costuma negligenciar.

E o mais importante: não existe blog perfeito. Então em vez de passar
semanas arquitetando a engine ideal, fui pelo caminho mais simples e
barato (leia-se: grátis) possível.

## A stack

| Peça | Escolha | Custo |
|------|---------|-------|
| Gerador | [Hugo](https://gohugo.io/) + tema [Hextra](https://imfing.github.io/hextra/) | R$ 0 |
| Hospedagem | GitHub Pages | R$ 0 |
| Deploy | GitHub Actions (no `git push`) | R$ 0 |
| Imagens | No próprio repo, em page bundles | R$ 0 |
| Comentários | [giscus](https://giscus.app/) (GitHub Discussions) | R$ 0 |
| Domínio | `bergmannlucas.github.io` | R$ 0 |

Site estático, sem banco de dados, sem servidor, sem conta em serviço
externo. As imagens vivem do lado do texto — cada post é uma pasta com
`index.md` e suas imagens — e o GitHub Pages hospeda de graça direto do
repositório. Menos peças móveis, menos manutenção.

## O workflow de escrita

1. Criar uma pasta em `content/posts/meu-post/` com um `index.md`
2. Escrever em Markdown, com front matter (`title`, `date`, `tags`)
3. Conferir local com `hugo server --buildDrafts`
4. `git push`

O push dispara uma GitHub Action que gera o site e publica no GitHub
Pages. É só isso.

## Decisões documentadas

As decisões que são difíceis de reverter — e o porquê de cada uma — estão
registradas como ADRs em
[`docs/adr/`](https://github.com/bergmannlucas/bergmannlucas.github.io/tree/main/docs/adr)
no repositório, e o glossário do blog está no
[`CONTEXT.md`](https://github.com/bergmannlucas/bergmannlucas.github.io/blob/main/CONTEXT.md).
Exemplos: por que as URLs são `/posts/slug/` sem data, por que as imagens
ficam no repo em vez de um storage externo.

O código todo é aberto — achou um erro de digitação ou de português?
Pull request é bem-vindo.

Agora é a parte difícil: sentar e escrever.
