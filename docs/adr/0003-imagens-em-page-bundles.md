# Imagens versionadas no repositório, em page bundles

Imagens de posts ficam dentro do page bundle do post (`content/posts/<slug>/imagem.png`), referenciadas com caminho relativo no Markdown — não em storage externo.

## Considered Options

- **Storage externo (S3, imgur, etc.)**: custo (mesmo que pequeno), credenciais, workflow de upload separado e risco de link rot — sem nenhum ganho para um blog pequeno.
- **Pasta central `static/images/`**: separa imagem do texto; com o tempo vira balaio de arquivos órfãos.

## Consequences

- O repositório cresce com cada screenshot (tipicamente 100–500 KB). Para o volume de um blog pessoal, isso leva anos para virar problema; se virar, a saída é Git LFS ou storage externo com redirecionamento.
- Apagar ou mover um post apaga ou move suas imagens junto — sem órfãos.
