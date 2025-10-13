# Over Tech - Landing Page

Uma landing page moderna e profissional para assistência técnica em informática, desenvolvida com tecnologias web atuais.

## 🚀 Características

- **Design Moderno**: Interface limpa e tecnológica com gradientes e animações
- **Totalmente Responsivo**: Adaptado para desktop, tablet e mobile
- **Animações Suaves**: Efeitos visuais e transições elegantes
- **Formulário de Contato**: Sistema de envio com validação
- **Navegação Suave**: Scroll suave entre seções
- **Performance Otimizada**: Carregamento rápido e eficiente

## 📁 Estrutura do Projeto

```
overtech/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para interatividade
└── README.md           # Documentação
```

## 🎨 Seções da Landing Page

### 1. **Header/Navegação**
- Logo da empresa
- Menu de navegação responsivo
- Efeito de transparência no scroll

### 2. **Hero Section**
- Título principal com efeito de digitação
- Descrição dos serviços
- Botões de call-to-action
- Animação de ícones tecnológicos

### 3. **Serviços**
- Grid responsivo com 6 serviços principais:
  - Manutenção de Computadores
  - Remoção de Vírus
  - Recuperação de Dados
  - Configuração de Redes
  - Reparos de Hardware
  - Manutenção Mobile

### 4. **Sobre a Empresa**
- Informações sobre a Over Tech
- Estatísticas animadas
- Lista de características

### 5. **Contato**
- Informações de contato
- Formulário funcional com validação
- Sistema de notificações

### 6. **Footer**
- Links rápidos
- Redes sociais
- Informações de copyright

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com:
  - CSS Grid e Flexbox
  - Variáveis CSS (Custom Properties)
  - Animações e transições
  - Media queries para responsividade
- **JavaScript (ES6+)**: Interatividade com:
  - Intersection Observer API
  - Event listeners
  - Animações dinâmicas
  - Validação de formulário

## 🎯 Funcionalidades JavaScript

- **Menu Mobile**: Toggle do menu hambúrguer
- **Scroll Suave**: Navegação entre seções
- **Animações de Entrada**: Elementos aparecem conforme scroll
- **Contador Animado**: Estatísticas com animação
- **Efeito Parallax**: Movimento sutil no hero
- **Validação de Formulário**: Validação em tempo real
- **Sistema de Notificações**: Feedback visual para ações
- **Efeito Ripple**: Botões com efeito de clique
- **Barra de Progresso**: Indicador de scroll
- **Efeito de Digitação**: Título principal animado

## 📱 Responsividade

A landing page é totalmente responsiva e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout em grid com 2-3 colunas
- **Tablet**: Layout adaptado com 1-2 colunas
- **Mobile**: Layout em coluna única com menu hambúrguer

## 🚀 Como Usar

1. **Abrir o arquivo**: Simplesmente abra o `index.html` em qualquer navegador moderno
2. **Servidor local** (opcional): Para melhor experiência, use um servidor local:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (com live-server)
   npx live-server
   ```

## 🎨 Personalização

### Cores
As cores principais estão definidas nas variáveis CSS no arquivo `styles.css`:
```css
:root {
    --primary-color: #00d4ff;    /* Azul principal */
    --secondary-color: #0066cc;  /* Azul secundário */
    --accent-color: #ff6b35;     /* Laranja de destaque */
    --dark-bg: #0a0a0a;          /* Fundo escuro */
}
```

### Conteúdo
- Edite o texto diretamente no `index.html`
- Atualize as informações de contato
- Modifique os serviços oferecidos
- Altere as estatísticas da empresa

### Animações
- Ajuste a velocidade das animações no `script.js`
- Modifique os efeitos de entrada dos elementos
- Personalize as transições CSS

## 📞 Informações de Contato

Para personalizar as informações de contato, edite a seção de contato no `index.html`:

```html
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <div>
        <h4>Telefone</h4>
        <p>(11) 99999-9999</p>
    </div>
</div>
```

## 🔧 Melhorias Futuras

- [ ] Integração com backend para formulário
- [ ] Sistema de blog/notícias
- [ ] Galeria de trabalhos realizados
- [ ] Chat online
- [ ] Sistema de agendamento
- [ ] PWA (Progressive Web App)

## 📄 Licença

Este projeto foi desenvolvido para a Over Tech. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para Over Tech - Assistência Técnica em Informática**

