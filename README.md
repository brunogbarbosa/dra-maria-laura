# Dra. Maria Laura

Um único projeto Next.js para a Dra. Maria Laura Nascimento, adaptado da estrutura original Premium Vendas V4. Hero cinematográfico, navegação transparente, capítulos editoriais animados, seis registros reais com ampliação e comparação, menu mobile e favicon ML.

## Desenvolvimento

Requer Node.js 22.9 ou superior e npm. Após `npm run dev`, abra http://127.0.0.1:3000.

```sh
npm ci
npm run dev
```

## Verificação

```sh
npm run typecheck
npm run build
npm start
```

## Vercel

Importe este repositório pelo GitHub na Vercel. Selecione **Next.js**, mantenha o diretório raiz `./`, instalação `npm ci`, build `npm run build` e saída padrão do Next.js. Não há variáveis de ambiente obrigatórias. O projeto não depende de Sites, banco de dados ou APIs externas.

## Conteúdo

Dados, contatos e registros ficam em `data/site.ts`. Nome completo, odontologia e estética, atendimento em Franca e CRO 155071 provêm dos anexos. Não foram acrescentados endereço completo, formação ou depoimentos. WhatsApp: +55 (16) 99430-6692. Instagram: @dra.marialauranasc.

Retratos convertidos para WebP lossless, sem retoque ou alterações em rosto e pele. Resultados são cópias exatas dos JPGs enviados, com a disposição vertical original. A comparação utiliza recortes de apresentação do mesmo arquivo, sem gerar ou modificar os resultados. O modo original permanece disponível. Novos registros podem usar `vertical`, `horizontal` ou `single`; imagens únicas não exibem o comparador.

## Identidade visual

Inspirada no marfim marmorizado e nos veios dourados dos destaques enviados. Todas as cores estão centralizadas em `app/identity.css` e compartilhadas pelos capítulos, botões, ícones e detalhes decorativos.

| Cor | Hex |
| --- | --- |
| Marfim | `#F6F4EE` |
| Pedra clara | `#E7E3D8` |
| Champagne | `#C7B487` |
| Dourado suave | `#8B7852` |
| Grafite mineral | `#292B2A` |
| Tinta | `#363831` |
| Cinza oliva | `#67685F` |

Tipografia Cormorant Garamond e Manrope, servidas localmente, com licenças na pasta de fontes. A navegação e o hero mantêm composições próprias para desktop e mobile. O header é absoluto, acima da foto, e não possui fundo, gradiente, borda, sombra ou blur.

O favicon está em `app/icon.svg`. Nenhuma imagem OG foi criada ou incluída.
