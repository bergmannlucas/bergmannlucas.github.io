# Stack: Hugo + Hextra + GitHub Pages, tudo gratuito

Blog criado com restrição explícita de **custo zero e mínima complexidade operacional**. Decidido: Hugo (binário único em Go) com o tema Hextra, hospedado no GitHub Pages com deploy via GitHub Actions a cada push na `main`, repositório público, comentários via giscus (GitHub Discussions), sem analytics.

## Considered Options

- **Netlify**: gratuito, mas é uma conta e uma peça externa a mais; GitHub Pages entrega o mesmo sem sair do GitHub.
- **Cloudflare Pages**: gratuito e com CDN melhor, mas de novo conta externa; irrelevante para um blog pessoal pequeno.
- **Astro/11ty/Zola**: Hugo foi escolhido por ser um gerador maduro, com build em frações de segundo, ecossistema grande e documentação abundante — além de o Hextra entregar um visual pronto e bem acabado.
- **Repo privado**: inviável — conta GitHub free só publica Pages de repositório público. Como o conteúdo é público por natureza, repo aberto ainda permite PRs de correção.

## Consequences

- Trocar de hospedagem depois é barato (site estático, só mudar o destino do workflow); trocar de gerador é caro (reescrever templates/config).
- Conta free do GitHub limita Pages a ~100 GB de banda/mês e 1 GB de site — de sobra para o cenário previsto.
