# 📚 Landing Page - Diogo Correa Dias (Escritor)

**Landing page oficial de Diogo Correa Dias, escritor de ficção científica e fantasia.**

<div align="center">
  <img src="public/hero-diogo-foto.png" alt="Diogo Correa Dias" width="300" />
</div>

---

## 🎯 Sobre o Projeto

Este projeto é uma **landing page responsiva** desenvolvida para apresentar o trabalho e biografia do escritor **Diogo Correa Dias**. O site conta com design moderno, animações suaves e funcionalidades interativas, proporcionando uma experiência imersiva para os visitantes conhecerem melhor o autor e suas publicações.

### 📖 Sobre o Autor

**Diogo Correa Dias**, 20 anos, natural de Praia Grande-SP, é graduando em **Biomedicina**, fluente em **inglês** e apaixonado por escrita desde a infância. Especializa-se em:

- 🎭 **Ficção científica e fantasia**
- 🔍 **Suspense e investigação** 
- 🎲 **Narrativas de RPG**
- 📚 **Contos curtos de aventura**

Suas obras publicadas incluem:
- **"Vanessa Verdante líder da Seita das Máscaras"** - Uma história sombria sobre sobrevivência e ética
- **"Quiet"** - Um thriller apocalíptico sobre sanidade e humanidade

---

## 🚀 Tecnologias Utilizadas

### **Frontend Core**
- ⚛️ **React 19** - Biblioteca principal
- 🔄 **Next.js 15.3.4** - Framework React
- 📘 **TypeScript 5** - Tipagem estática
- 🎨 **Tailwind CSS 4** - Framework CSS utility-first

### **Fonts & Design**
- 🔤 **Google Fonts (Mynerve)** - Tipografia personalizada
- 🎨 **Design responsivo** - Mobile, Tablet e Desktop
- 🌊 **Animações CSS** - Hover effects e transições suaves; React Card Flip

---

## ✨ Funcionalidades

### 🎯 **Navegação Inteligente**
- **Menu responsivo** com detecção automática de seção ativa
- **Smooth scroll** entre seções
- **Menu hambúrguer** para dispositivos móveis

### 📱 **Design Responsivo Completo**
- **Desktop** (`lg:`) - Layout completo com elementos laterais
- **Tablet** (`md: lg:hidden`) - Layout intermediário otimizado
- **Mobile** (`md:hidden`) - Layout vertical compacto

### 🃏 **Card Flip Interativo**
- Visualização de **capas e contra-capas** dos livros
- **Animação 3D** suave de rotação
- **Botões direcionais** adaptativos

### 📋 **Funcionalidade PIX**
- **Cópia automática** para clipboard
- **Fallback robusto** para dispositivos sem suporte
- **Feedback visual** de confirmação

### 🔗 **Links Externos**
- Integração com **redes sociais**
- Links para **compra dos livros**
- **Abertura em nova aba** para melhor UX

---

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── Header/          # Navegação e menu
│   │   ├── Hero/            # Seção inicial
│   │   ├── About/           # Biografia do autor
│   │   ├── Books/           # Publicações com CardFlip
│   │   ├── Contact/         # Contatos e PIX
│   │   ├── Footer/          # Rodapé
│   │   └── CardFlip/        # Componente reutilizável
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página home
├── lib/
│   └── utils.ts             # Utilitários (cn function)
└── utils/
    └── openLink.ts          # Função para links externos
```

---

## 🎨 Seções da Landing Page

### 🏠 **Hero Section**
Apresentação visual do autor com foto e título animado.

### 👤 **About Section** 
Biografia detalhada com design de papéis sobrepostos e texto destacado.

### 📚 **Books Section**
- Cards interativos com flip 3D
- Descrições completas das obras
- Botões de compra integrados
- Layout responsivo para todos os dispositivos

### 📞 **Contact Section**
- Informações de contato (Email, Instagram, LinkedIn)
- Sistema de doação PIX com cópia automática
- Links para redes sociais

---

## ⚙️ Como Executar

### **Pré-requisitos**
- Node.js 18+ 
- npm, yarn, pnpm ou bun

### **Instalação**

```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Navegue até o diretório
cd landing-page-diogo-correa-dias

# Instale as dependências
npm install
# ou
yarn install
```

### **Desenvolvimento**

```bash
# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev

# Acesse http://localhost:3000
```

### **Build de Produção**

```bash
# Gere o build otimizado
npm run build

# Inicie o servidor de produção
npm start
```

---

## 🌐 Deploy

### **Vercel**
Este projeto está otimizado para deploy na **Vercel**:

```bash
# Link

```
---

## 🔧 Configurações Importantes

### **Next.js Config**
- **Webpack otimizado** para produção
- **Source maps desabilitados** para melhor performance
- **Build workers** habilitados

### **Metadata SEO**
- **Open Graph** configurado
- **Viewport responsivo**
- **Robots.txt** otimizado

### **Performance**
- **Images otimizadas** com Next.js Image
- **Lazy loading** automático
- **Bundle splitting** inteligente

---

## 🎯 Funcionalidades Especiais

### **🔄 Card Flip Component**
Componente reutilizável com:
- Rotação horizontal suave
- Botões de navegação adaptativos
- Suporte a diferentes direções
- Acessibilidade completa

### **🎨 Sistema de Cores**
- **Amarelo (#FFC62B)** - Call-to-actions
- **Laranja (#FD9C3D)** - Instagram/destaques
- **Ciano (#50D8FF)** - LinkedIn/elementos secundários
- **Cinza (#575757)** - Textos principais

---

## 🤝 Créditos

- **👨‍💻 Desenvolvido por**: [Vinicius Caua](https://www.linkedin.com/in/vinicius-cau%C3%A3-111b6620b/)
- **🎨 Design por**: [Marcelly Farias](https://www.linkedin.com/in/marcelly-do-nascimento-farias-93aa17268/)
- **📚 Conteúdo**: Diogo Correa Dias

---

## 📄 Licença

© 2025 - Diogo Correa Dias. Todos os direitos reservados.

---

## 📧 Contato

- **📧 Email**: digocdias@live.com
- **📱 Instagram**: [@diogocorreadias](https://www.instagram.com/diogocorreadias/)
- **💼 LinkedIn**: [diogo-correa-dias](https://br.linkedin.com/in/diogo-correa-dias-1366b2265)

---

<div align="center">
  <p><strong>🚀 Desenvolvido com Next.js 15 + React 19 + TypeScript + Tailwind CSS</strong></p>
  <p><em>"A criatividade é uma arma poderosa, onde o possível e o impossível coexistem."</em></p>
</div>