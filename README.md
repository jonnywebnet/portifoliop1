# Jhonatan Gomes de Souza — Portfólio

Portfólio pessoal desenvolvido para o trabalho P1 de Laboratório de Programação Front-End. O projeto apresenta minha formação em Engenharia de Software, meus projetos práticos, minhas habilidades atuais e meus canais de contato.

![React](https://img.shields.io/badge/React-19-172a3d?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-172a3d?style=for-the-badge&logo=typescript&logoColor=3178C6)
![Vite](https://img.shields.io/badge/Vite-7-172a3d?style=for-the-badge&logo=vite&logoColor=646CFF)
![License](https://img.shields.io/badge/license-MIT-f26b4f?style=for-the-badge)

## Sobre o projeto

Este é um portfólio responsivo, criado com React, TypeScript e Vite. A interface foi construída para comunicar de forma objetiva quem sou, o que estou aprendendo e quais soluções já desenvolvi.

A página contém:

- Apresentação pessoal e objetivo profissional;
- Seção sobre formação, localização e interesses;
- Cards do TG Assistência e do Café Aurora;
- Card com habilidades em desenvolvimento;
- Lista de tecnologias utilizadas nos estudos;
- Links para e-mail, GitHub e LinkedIn;
- Menu responsivo para dispositivos móveis;
- Imagens locais e recurso de áudio.

## Conteúdo apresentado

### TG Assistência

Sistema administrativo para uma assistência técnica, com recursos relacionados a clientes, equipamentos, estoque, ordens de serviço e auditoria operacional.

**Tecnologias:** React, TypeScript e Drizzle ORM.

### Café Aurora

Jogo 2D de cafeteria desenvolvido para praticar lógica de programação, interação e construção de uma experiência visual.

**Tecnologias:** Python e Pygame.

### Habilidades em desenvolvimento

Card dedicado às tecnologias e habilidades que venho praticando em projetos acadêmicos e pessoais:

- React;
- TypeScript;
- Python;
- HTML e CSS;
- Git e GitHub;
- MySQL.

## Tecnologias do projeto

- React 19;
- TypeScript;
- Vite;
- Lucide React;
- HTML5;
- CSS3;
- Google Fonts.

## Como executar localmente

É necessário ter o [Node.js](https://nodejs.org/) 18 ou superior instalado.

```bash
git clone https://github.com/jonnywebnet/portifoliop1.git
cd portifoliop1
npm install
npm run dev
```

Depois, acesse o endereço exibido pelo Vite no terminal, normalmente:

```text
http://localhost:5173
```

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão otimizada para produção |
| `npm run preview` | Executa uma prévia da versão de produção |
| `npm run check` | Verifica os tipos TypeScript |

## Estrutura do projeto

```text
.
├── public/
│   └── assets/
│       ├── Aurora.jpg
│       ├── Jhonatan.jpg
│       ├── habilidades.jpg
│       ├── tgassistenci.jpg
│       ├── atlasaudio.mp3
│       └── focus.wav
├── src/
│   ├── pages/
│   │   └── Home.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Personalização

As imagens utilizadas nos cards ficam em `public/assets/`. Para trocar uma imagem, adicione o novo arquivo nessa pasta e atualize o caminho correspondente em `src/pages/Home.tsx`.

Os estilos globais, incluindo cores, tipografia, layout, responsividade e animações, ficam em `src/index.css`.

## Contato

- **E-mail:** [jonnyweb.net@gmail.com](mailto:jonnyweb.net@gmail.com)
- **GitHub:** [github.com/jonnywebnet](https://github.com/jonnywebnet/)
- **LinkedIn:** [Jhonatan Gomes de Souza](https://www.linkedin.com/in/jhonatan-gomes-b50326301/)

## Licença

Este projeto está licenciado sob a licença MIT.
