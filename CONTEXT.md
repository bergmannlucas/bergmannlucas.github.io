# Blog Pessoal — Lucas Bergmann

Blog pessoal em PT-BR, site estático gerado a partir de arquivos Markdown,
hospedado gratuitamente. O conteúdo é o produto; a engine é descartável.

## Language

**Post**:
Um artigo do blog. Vive como page bundle em `content/posts/<slug>/` — um `index.md` com as imagens ao lado. Publicado em `/posts/<slug>/`.
_Avoid_: artigo, entrada, página

**Slug**:
Identificador do post na URL e no nome da pasta. Minúsculas, hífens, sem data. Uma vez publicado, não muda.
_Avoid_: permalink, path

**Front matter**:
Bloco YAML no topo do `index.md` com os metadados do post: `title`, `date`, `tags`, `draft`.
_Avoid_: cabeçalho, metadados

**Draft**:
Post com `draft: true` no front matter. Visível no servidor local, nunca publicado.
_Avoid_: rascunho, não-publicado

**Tag**:
Etiqueta temática do post, em minúsculas, definida no front matter. Gera listagem automática em `/tags/<tag>/`.
_Avoid_: categoria, label

**Page bundle**:
Pasta que agrupa o `index.md` de um post com suas imagens — a unidade autocontida de conteúdo. Mover ou apagar a pasta move ou apaga o post inteiro.
_Avoid_: diretório do post

**Comentários**:
Discussões do GitHub anexadas a posts via giscus. Não existe outro sistema de comentários.
_Avoid_: Disqus, discussões do fórum

**Deploy**:
O processo automático disparado por `git push` na `main`: a GitHub Action gera o site e publica. Não existe deploy manual.
_Avoid_: release, publicação manual
