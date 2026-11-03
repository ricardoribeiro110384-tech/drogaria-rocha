# Drogaria Rocha — React + TypeScript

Nova vitrine da Drogaria Rocha construída sem Lovable, com **React 18, TypeScript, Vite e CSS responsivo**.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Para compilar: `npm run build`. Para validação de tipos: `npm run typecheck`.

O código-fonte está em `src/app.ts` e `src/styles.css`. Para os dados comerciais em produção, substitua o array demonstrativo `catalog` por dados fornecidos pela Drogaria Rocha. Não há preços, estoque ou promoções informados pela empresa.

## Prévia independente

O projeto inclui uma versão estática da aplicação em `../nova/` para visualização pelo GitHub Pages sem substituir a página principal. Os arquivos `nova/app.js` e `nova/styles.css` correspondem ao código React da prévia e devem ser atualizados junto com a versão de origem. A prévia utiliza os arquivos UMD oficiais do React 18 via CDN; a versão Vite utiliza npm normalmente.

## Atenções antes do lançamento

- A identidade textual e a cruz laranja são provisórias, até recebermos a logomarca oficial.
- As imagens de embalagens vêm de URLs externas de catálogo de terceiros ou fabricante e podem falhar ou exigir direitos de uso. Para uso comercial definitivo, hospede imagens autorizadas pelo fornecedor/fabricante.
- Nenhum produto tem preço ou disponibilidade confirmada.
- O site monta uma lista de consulta e abre uma mensagem no WhatsApp; não processa pagamentos, reservas nem compras.
- Endereço/telefone e horário publicados em registros públicos devem ser validados pela administração da loja antes de lançamento definitivo.
- O site principal não foi substituído.
