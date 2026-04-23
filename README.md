# 📰 Portal de Notícias

## 🎯 Visão Geral

O **Portal de Notícias** é uma aplicação web completa desenvolvida em **React 19 + TypeScript + React Router v7**, com CSS Puro (CSS Modules). O projeto implementa um sistema robusto de gerenciamento de notícias com múltiplos níveis de acesso e funcionalidades avançadas.

---

## 📋 Índice

1. [Características Principais](#características-principais)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Instalação e Setup](#instalação-e-setup)
4. [Rotas da Aplicação](#rotas-da-aplicação)
5. [Perfis de Usuário](#perfis-de-usuário)
6. [Páginas Públicas](#páginas-públicas)
7. [Painel Leitor](#painel-leitor)
8. [Painel Autor](#painel-autor)
9. [Painel Editor](#painel-editor)
10. [Painel SuperAdmin](#painel-superadmin)
11. [Dados Mockados](#dados-mockados)
12. [Tecnologias Utilizadas](#tecnologias-utilizadas)
13. [Próximos Passos](#próximos-passos)

---

## ✨ Características Principais

O Portal de Notícias oferece um conjunto completo de funcionalidades:

| Funcionalidade | Descrição |
|---|---|
| **Autenticação** | Sistema de login com múltiplos perfis |
| **Cadastro de Usuários** | Formulário completo com validação |
| **Gerenciamento de Notícias** | CRUD completo de notícias |
| **Sistema de Comentários** | Comentários com aprovação |
| **Filtros Avançados** | Busca por UF, Tag, Título, Status |
| **Painel Admin** | Gerenciamento completo do sistema |
| **Responsivo** | Design mobile-first |
| **Validação de Dados** | Validação em tempo real |
| **Dados Mockados** | 27 UFs, 30 cidades, 10 tags, 15 usuários, 13 notícias, 40 comentários |

---

## 📁 Estrutura do Projeto

```
portal-noticias/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── robots.txt
│   ├── src/
│   │   ├── pages/
│   │   │   ├── publico/
│   │   │   │   ├── HomePage.tsx
│   │   │   │   ├── LoginPage.tsx
│   │   │   │   ├── SignUpPage.tsx
│   │   │   │   ├── CadastroPage.tsx
│   │   │   │   ├── LembrarSenhaPage.tsx
│   │   │   │   ├── BuscaPorUFPage.tsx
│   │   │   │   ├── BuscaPorTagPage.tsx
│   │   │   │   ├── DetalheNoticiaPage.tsx
│   │   │   │   └── *.module.css
│   │   │   ├── leitor/
│   │   │   │   ├── PerfilLeitorPage.tsx
│   │   │   │   ├── ComentarLeitorPage.tsx
│   │   │   │   └── *.module.css
│   │   │   ├── autor/
│   │   │   │   ├── PerfilAutorPage.tsx
│   │   │   │   ├── MinhasNoticiasPage.tsx
│   │   │   │   ├── NovaNoticiaPage.tsx
│   │   │   │   ├── EditarNoticiaPage.tsx
│   │   │   │   ├── ComentarAutorPage.tsx
│   │   │   │   └── *.module.css
│   │   │   ├── editor/
│   │   │   │   ├── PainelEditorPage.tsx
│   │   │   │   ├── PerfilEditorPage.tsx
│   │   │   │   ├── PublicarDespublicarPage.tsx
│   │   │   │   ├── EditarQualquerNoticiaPage.tsx
│   │   │   │   └── *.module.css
│   │   │   ├── admin/
│   │   │   │   ├── DashboardPage.tsx
│   │   │   │   ├── CrudUFPage.tsx
│   │   │   │   ├── FormUFPage.tsx
│   │   │   │   ├── CrudCidadesPage.tsx
│   │   │   │   ├── FormCidadePage.tsx
│   │   │   │   ├── CrudTagsPage.tsx
│   │   │   │   ├── FormTagPage.tsx
│   │   │   │   ├── CrudPerfisPage.tsx
│   │   │   │   ├── CrudNoticiasPage.tsx
│   │   │   │   ├── FormNoticiaAdminPage.tsx
│   │   │   │   ├── CrudUsuariosPage.tsx
│   │   │   │   ├── FormUsuarioPage.tsx
│   │   │   │   ├── GerenciarComentariosPage.tsx
│   │   │   │   └── *.module.css
│   │   │   └── NotFoundPage.tsx
│   │   ├── data/
│   │   │   ├── ufs.ts
│   │   │   ├── cidades.ts
│   │   │   ├── tags.ts
│   │   │   ├── usuarios.ts
│   │   │   ├── noticias.ts
│   │   │   └── comentarios.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Instalação e Setup

### Pré-requisitos

Certifique-se de ter instalado:
- **Node.js** (versão 18+)
- **npm** ou **pnpm**

### Passo 1: Clonar ou Extrair o Projeto

```bash
# Se estiver em um ZIP
unzip portal-noticias.zip
cd portal-noticias
```

### Passo 2: Instalar Dependências

```bash
npm install
# ou
pnpm install
```

### Passo 3: Executar em Desenvolvimento

```bash
npm run dev
# ou
pnpm dev
```

O servidor estará disponível em: **http://localhost:5173**

### Passo 4: Build para Produção

```bash
npm run build
# ou
pnpm build
```

---

## 🗺️ Rotas da Aplicação

### Rotas Públicas

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | HomePage | Página inicial com listagem de notícias |
| `/login` | LoginPage | Página de login |
| `/signup` | SignUpPage | Página de cadastro |
| `/cadastro` | CadastroPage | Alternativa de cadastro |
| `/lembrar-senha` | LembrarSenhaPage | Recuperação de senha |
| `/busca/uf/:sigla` | BuscaPorUFPage | Buscar notícias por UF |
| `/busca/tag/:slug` | BuscaPorTagPage | Buscar notícias por tag |
| `/noticia/:id` | DetalheNoticiaPage | Detalhes de uma notícia |

### Rotas Leitor

| Rota | Página | Descrição |
|------|--------|-----------|
| `/leitor/perfil` | PerfilLeitorPage | Perfil do leitor |
| `/leitor/comentar/:noticiaId` | ComentarLeitorPage | Comentar em notícia |

### Rotas Autor

| Rota | Página | Descrição |
|------|--------|-----------|
| `/autor/perfil` | PerfilAutorPage | Perfil do autor |
| `/autor/noticias` | MinhasNoticiasPage | Minhas notícias |
| `/autor/noticias/nova` | NovaNoticiaPage | Criar nova notícia |
| `/autor/noticias/:id/editar` | EditarNoticiaPage | Editar notícia |
| `/autor/comentar/:noticiaId` | ComentarAutorPage | Comentar em notícia |

### Rotas Editor

| Rota | Página | Descrição |
|------|--------|-----------|
| `/editor/painel` | PainelEditorPage | Painel de revisão |
| `/editor/perfil` | PerfilEditorPage | Perfil do editor |
| `/editor/publicar/:id` | PublicarDespublicarPage | Publicar/despublicar notícia |
| `/editor/noticias/:id/editar` | EditarQualquerNoticiaPage | Editar qualquer notícia |

### Rotas SuperAdmin

| Rota | Página | Descrição |
|------|--------|-----------|
| `/admin/dashboard` | DashboardPage | Dashboard com estatísticas |
| `/admin/ufs` | CrudUFPage | Listar UFs |
| `/admin/ufs/nova` | FormUFPage | Criar UF |
| `/admin/ufs/:id/editar` | FormUFPage | Editar UF |
| `/admin/cidades` | CrudCidadesPage | Listar cidades |
| `/admin/cidades/nova` | FormCidadePage | Criar cidade |
| `/admin/cidades/:id/editar` | FormCidadePage | Editar cidade |
| `/admin/tags` | CrudTagsPage | Listar tags |
| `/admin/tags/nova` | FormTagPage | Criar tag |
| `/admin/tags/:id/editar` | FormTagPage | Editar tag |
| `/admin/perfis` | CrudPerfisPage | Visualizar perfis |
| `/admin/noticias` | CrudNoticiasPage | Listar notícias |
| `/admin/noticias/:id/editar` | FormNoticiaAdminPage | Editar notícia |
| `/admin/usuarios` | CrudUsuariosPage | Listar usuários |
| `/admin/usuarios/:id/editar` | FormUsuarioPage | Editar usuário |
| `/admin/comentarios` | GerenciarComentariosPage | Gerenciar comentários |

---

## 👥 Perfis de Usuário

### 1. Leitor

O perfil mais básico, com acesso limitado:

- Visualizar notícias públicas
- Comentar em notícias
- Editar seu perfil
- Visualizar seus comentários

**Acesso em**: `/leitor/perfil`

### 2. Autor

Perfil para criadores de conteúdo:

- Todas as permissões do Leitor
- Criar novas notícias
- Editar suas próprias notícias
- Visualizar estatísticas de suas notícias
- Gerenciar comentários em suas notícias

**Acesso em**: `/autor/noticias`

### 3. Editor

Perfil para revisores de conteúdo:

- Todas as permissões do Leitor
- Revisar notícias de autores
- Publicar/despublicar notícias
- Editar qualquer notícia
- Moderar comentários
- Visualizar painel de revisão

**Acesso em**: `/editor/painel`

### 4. SuperAdmin

Perfil com acesso total ao sistema:

- Todas as permissões dos outros perfis
- Gerenciar UFs
- Gerenciar cidades
- Gerenciar tags
- Gerenciar perfis
- Gerenciar notícias (todas)
- Gerenciar usuários
- Gerenciar comentários
- Visualizar dashboard com estatísticas

**Acesso em**: `/admin/dashboard`

---

## 🏠 Páginas Públicas

### HomePage

A página inicial do portal com:
- Grid de notícias publicadas
- Filtros por UF e tag
- Busca por título
- Paginação
- Acesso rápido para login/cadastro

### LoginPage

Sistema de autenticação com:
- Campos de e-mail e senha
- Botões de acesso rápido para cada perfil
- Link para recuperação de senha
- Link para cadastro

### SignUpPage

Página de cadastro com:
- Validação completa de formulário
- Seleção de Estado e Cidade
- Bio opcional
- Aceitar termos de uso
- Mensagens de erro em tempo real

### Páginas de Busca

Permitem filtrar notícias por:
- **UF**: Buscar notícias de um estado específico
- **Tag**: Buscar notícias de uma categoria específica

### DetalheNoticiaPage

Exibe:
- Título e conteúdo completo da notícia
- Autor e data de publicação
- Número de visualizações
- Seção de comentários
- Botão para comentar

---

## 👤 Painel Leitor

### PerfilLeitorPage

Exibe informações do leitor:
- Avatar e nome
- E-mail e localização
- Bio
- Data de cadastro
- Número de comentários
- Botão para editar perfil

### ComentarLeitorPage

Permite comentar em notícias:
- Formulário de comentário
- Validação de texto
- Envio do comentário
- Visualização de comentários anteriores

---

## ✍️ Painel Autor

### PerfilAutorPage

Perfil do autor com:
- Informações pessoais
- Estatísticas de notícias
- Notícias publicadas vs rascunhos
- Total de visualizações
- Botão para editar perfil

### MinhasNoticiasPage

Listagem de notícias do autor:
- Tabela com todas as notícias
- Filtros por título e status
- Ações: editar, visualizar, excluir
- Botão para criar nova notícia

### NovaNoticiaPage

Formulário para criar notícia:
- Título, subtítulo, conteúdo
- Seleção de tags
- Seleção de UF/Cidade
- Imagem de capa
- Salvar como rascunho ou publicar

### EditarNoticiaPage

Editar notícia existente:
- Todos os campos da criação
- Histórico de versões
- Botão para visualizar
- Botão para publicar/despublicar

### ComentarAutorPage

Comentar em notícias de outros autores:
- Formulário de comentário
- Visualização de comentários
- Responder comentários

---

## 📝 Painel Editor

### PainelEditorPage

Dashboard de revisão com:
- Notícias pendentes de revisão
- Notícias já revisadas
- Filtros por autor e status
- Ações: revisar, publicar, rejeitar

### PerfilEditorPage

Perfil do editor com:
- Informações pessoais
- Estatísticas de revisões
- Notícias revisadas
- Taxa de aprovação

### PublicarDespublicarPage

Gerenciar publicação de notícia:
- Visualizar notícia completa
- Publicar notícia
- Despublicar notícia
- Adicionar comentário de revisão

### EditarQualquerNoticiaPage

Editar qualquer notícia do sistema:
- Acesso a todas as notícias
- Edição completa
- Histórico de alterações

---

## 🔐 Painel SuperAdmin

### DashboardPage

Dashboard executivo com:
- 6 cards de métricas (Usuários, Notícias, Rascunhos, Comentários, UFs, Tags)
- Menu de gerenciamento rápido
- Tabela de últimas notícias
- Gráficos de estatísticas

### Gerenciamento de UFs

**CrudUFPage**: Listar, buscar, editar e excluir UFs
**FormUFPage**: Criar e editar UF com validação

### Gerenciamento de Cidades

**CrudCidadesPage**: Listar cidades com filtros por nome e UF
**FormCidadePage**: Criar e editar cidade com select dinâmico de UF

### Gerenciamento de Tags

**CrudTagsPage**: Listar tags com busca e preview visual
**FormTagPage**: Criar tag com slug automático

### Gerenciamento de Perfis

**CrudPerfisPage**: Visualizar 4 perfis (somente leitura) com permissões

### Gerenciamento de Notícias

**CrudNoticiasPage**: Listar notícias com filtros por título, status e autor
**FormNoticiaAdminPage**: Editar notícia com seleção de autor

### Gerenciamento de Usuários

**CrudUsuariosPage**: Listar usuários com filtros por nome, perfil e status
**FormUsuarioPage**: Editar usuário com seleção de perfil e localização

### Gerenciamento de Comentários

**GerenciarComentariosPage**: Listar comentários com ações em lote
- Filtros por texto e status
- Selecionar múltiplos comentários
- Aprovar selecionados
- Excluir selecionados

---

## 📊 Dados Mockados

O projeto inclui dados de exemplo para facilitar testes:

| Tipo | Quantidade | Arquivo |
|------|-----------|---------|
| UFs | 27 | `data/ufs.ts` |
| Cidades | 30 | `data/cidades.ts` |
| Tags | 10 | `data/tags.ts` |
| Usuários | 15 | `data/usuarios.ts` |
| Notícias | 13 (10 publicadas + 3 rascunhos) | `data/noticias.ts` |
| Comentários | 40 (25 aprovados + 15 pendentes) | `data/comentarios.ts` |

### Acessar Dados Mockados

```typescript
import { ufs } from "@/data/ufs";
import { cidades } from "@/data/cidades";
import { tags } from "@/data/tags";
import { usuarios } from "@/data/usuarios";
import { noticias } from "@/data/noticias";
import { comentarios } from "@/data/comentarios";
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 19 | Framework principal |
| TypeScript | 5.6 | Tipagem estática |
| React Router | 7 | Roteamento |
| Vite | 7.1 | Build tool |
| CSS Modules | - | Estilos |
| Node.js | 18+ | Runtime |

### Dependências Principais

```json
{
  "react": "^19.2.1",
  "react-dom": "^19.2.1",
  "react-router": "^7.x.x",
  "typescript": "5.6.3",
  "vite": "^7.1.7"
}
```

---

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Compila para produção

# Preview
npm run preview      # Visualiza build de produção

# Type checking
npm run check        # Verifica tipos TypeScript

# Formatação
npm run format       # Formata código com Prettier
```

---

## 🎨 Design e Estilos

### Paleta de Cores

- **Primária**: `#667eea` (Roxo)
- **Secundária**: `#764ba2` (Roxo Escuro)
- **Sucesso**: `#4caf50` (Verde)
- **Erro**: `#f44336` (Vermelho)
- **Aviso**: `#ff9800` (Laranja)
- **Info**: `#2196f3` (Azul)

### Tipografia

- **Fonte Principal**: Sistema padrão do navegador
- **Tamanhos**: 0.85rem a 2rem
- **Pesos**: 400, 500, 600, 700

### Responsividade

O projeto é totalmente responsivo com breakpoints:

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

---

## 🔄 Fluxo de Autenticação

1. Usuário acessa `/login`
2. Seleciona seu perfil (Leitor, Autor, Editor, SuperAdmin)
3. Sistema redireciona para painel correspondente
4. Usuário pode navegar conforme suas permissões
5. Logout retorna para homepage

---

## 🚀 Próximos Passos

### Implementações Recomendadas

1. **Backend API**
   - Criar API REST com Node.js/Express
   - Integrar banco de dados (PostgreSQL/MongoDB)
   - Autenticação JWT

2. **Melhorias de UX**
   - Adicionar notificações em tempo real
   - Implementar dark mode
   - Adicionar PWA (Progressive Web App)

3. **Performance**
   - Implementar lazy loading
   - Adicionar cache
   - Otimizar imagens

4. **Segurança**
   - Validação no backend
   - Proteção contra CSRF
   - Rate limiting

5. **Testes**
   - Testes unitários com Vitest
   - Testes de integração
   - Testes E2E com Cypress

6. **Funcionalidades Adicionais**
   - Sistema de notificações
   - Favoritar notícias
   - Compartilhar em redes sociais
   - Exportar notícias em PDF
   - Modo offline

---

## 📞 Suporte e Contribuição

Para dúvidas ou sugestões sobre o projeto, entre em contato com a equipe de desenvolvimento.

---

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.

---

## 📅 Histórico de Versões

| Versão | Data | Descrição |
|--------|------|-----------|
| 1.0.0 | 2024-04-23 | Versão inicial com todas as páginas e funcionalidades |

---

## 🎯 Checklist de Funcionalidades

- [x] Páginas públicas (Home, Login, Signup, Busca)
- [x] Painel Leitor (Perfil, Comentários)
- [x] Painel Autor (Notícias, Criação, Edição)
- [x] Painel Editor (Revisão, Publicação)
- [x] Painel SuperAdmin (CRUD completo)
- [x] Validação de formulários
- [x] Dados mockados
- [x] Design responsivo
- [x] Navegação entre páginas
- [x] Filtros e busca

---

**Desenvolvido por Victor Castro, João Victor Lima, Maikon Douglas e Lucas Gomes, com React + TypeScript**

