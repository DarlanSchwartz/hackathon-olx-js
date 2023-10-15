# Desafio Hackathon OLX - DREX

## Blibiotecas ultilizadas

1. [React Icons](https://www.npmjs.com/package/react-icons)
2. [React router dom](https://www.npmjs.com/package/react-router-dom)
3. [React loader spinner](https://www.npmjs.com/package/react-loader-spinner)
4. [Styled Components](https://www.npmjs.com/package/styled-components)
5. [Web3](https://www.npmjs.com/package/web3)
6. [useHooks](https://www.npmjs.com/package/@uidotdev/usehooks)
7. [Alchemy SDK](https://www.npmjs.com/package/alchemy-sdk)
8. [Axios](https://www.npmjs.com/package/axios)

# Como rodar

- Va até https://dashboard.alchemy.com/ inscreva-se e navegue até a seção no menu lateral chamada "admin", em seguida clique em "Access keys"
- Crie sua chave da API da alchemy e copie ela.
- Crie um arquivo na pasta raiz do projeto chamado ".env"

Coloque dentro deste arquivo o seguinte:

```
VITE_PUBLIC_API=Coloque aqui sua chave da API da alchemy 
```

- Rode no seu terminal na pasta raiz do projeto:

```bash
npm install
```

- Após instalar as depedências com o comando acima, inicie o projeto

```bash
npm run dev
```

- Pronto

# É importante lembrar que:

1. Esta aplicação assume que você tem a extensão da metamask instalada (carteira de criptoativos).

2. Caso não tenha metamask instalada essa aplicação não tera o comportamento esperado.

3. Tendo o item 1 e 2 em mãos, a aplicação ainda é um protótipo, ela se baseia em uma tecnologia que ainda será liberada ao acesso do publico, no momento ela não está, que se chama DREX.

4. O DREX é um novo formato para representar a moeda oficial do Brasil, o Real, com a diferença que ela é 100% digital.

Cada brasileiro poderá ter a sua e ela será armazenada em um sistema virtual, que permite você realizar transações no mesmo valor da cédula ou moedas.

A diferença maior é que, o armazenamento será virtual, através das carteiras digitais que serão disponibilizadas pelas instituições financeiras.

A sua nomenclatura foi pensada para traduzir a mensagem do que é essa moeda.

- D – Formato Digital;
- R – A moeda brasileira, Real;
- E – Sistema Eletrônico que o Drex funcionará;
- X – Representa a inovação.

Assim como o Pix, o Drex foi criado com o intuito de facilitar as transações dos usuários, tornando-a mais segura e rápida.

5. A nossa aplicação visa a venda de veículos ultilizando o DREX, o governo federal ja anunciou que isso será possível, tendo isso em mente simulamos de uma maneira bem simples como seria a ultilização do DREX na compra de um veículo de segunda mão na plataforma OLX, usando uma carteira digital (neste caso a metamask).

6. Quer conferir mais sobre o item 5? Leia este artigo -> https://br.cointelegraph.com/news/federal-government-expands-access-to-the-digital-sale-of-vehicles-and-paves-the-way-for-a-boom-in-car-rwa-tokens-in-brazil