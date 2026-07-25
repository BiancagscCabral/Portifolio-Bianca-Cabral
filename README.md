# Portfólio — Bianca Cabral



## O que editar antes de publicar

Procure por `EDITAR:` dentro do `index.html` — são os pontos marcados para você personalizar:

- Links do GitHub e LinkedIn (sidebar, topbar mobile e seção de contato)
- Email de contato
- Link do currículo em PDF (se quiser disponibilizar pra download)
- Textos e imagens dos cards de projeto (trocar `print do dashboard aqui` etc. por `<img src="prints/nome-do-print.png">`)

## Como publicar no GitHub Pages (passo a passo)

1. Crie um repositório novo no GitHub, por exemplo `portfolio` (pode ser público).
2. Coloque o `index.html` (e uma pasta `prints/` com suas imagens, se tiver) na raiz do repositório.
3. Suba os arquivos:
   ```
   git init
   git add .
   git commit -m "primeira versão do portfólio"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/portfolio.git
   git push -u origin main
   ```
4. No GitHub, vá em **Settings → Pages**.
5. Em "Source", selecione a branch `main` e a pasta `/ (root)`. Salve.
6. Em alguns minutos seu site estará em:
   `https://SEU-USUARIO.github.io/portfolio/`

Esse é o link que você coloca no currículo e no LinkedIn.

## Como adicionar um print/imagem

1. Crie uma pasta `prints/` ao lado do `index.html`.
2. Coloque a imagem lá, ex: `prints/dashboard-vendas.png`.
3. No card do projeto correspondente, troque:
   ```html
   <div class="project-thumb"><div class="placeholder">print do dashboard aqui</div></div>
   ```
   por:
   ```html
   <div class="project-thumb"><img src="prints/dashboard-vendas.png" style="width:100%;height:100%;object-fit:cover;"></div>
   ```
