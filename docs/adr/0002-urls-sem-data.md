# URLs de posts sem data: `/posts/<slug>/`

URLs de posts seguem o padrão `/posts/<slug>/`, sem data no caminho — a data vive no front matter. URL é o contrato mais difícil de reverter de um site (depois de indexado e compartilhado, mudar = link quebrado), então ela carrega o mínimo de informação possível.

## Considered Options

- **`/2026/07/28/<slug>/`**: padrão de blogs antigos que precisam preservar anos de links já indexados. Este blog nasceu sem legado para preservar; data na URL seria redundante com o front matter.
- **Slug na raiz (`/<slug>/`)**: mistura posts com páginas fixas (Sobre, etc.) no mesmo namespace.

## Consequences

- Renomear título de um post não afeta a URL; renomear o slug, sim — logo, slug publicado é tratado como imutável (ver `CONTEXT.md`).
