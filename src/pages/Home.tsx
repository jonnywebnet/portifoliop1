import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    type: "APLICAÇÃO WEB",
    title: "TG Assistência",
    description:
      "Sistema administrativo para uma assistência técnica de eletrodomésticos: clientes, equipamentos, estoque, ordens de serviço e auditoria.",
    tags: ["React", "TypeScript", "Drizzle ORM"],
    status: "Projeto funcional",
    link: undefined,
    visual: "service",
  },
  {
    number: "02",
    type: "JOGO 2D",
    title: "Café Aurora",
    description:
      "Jogo de cafeteria desenvolvido em Python com Pygame, criado para praticar lógica, interação e construção de uma experiência visual.",
    tags: ["Python", "Pygame", "Game dev"],
    status: "Em evolução",
    link: "https://github.com/jonnywebnet/Cafe_aurora",
    visual: "cafe",
  },
  {
    number: "03",
    type: "ESTUDOS DE FRONT-END",
    title: "React Study",
    description:
      "Repositório de estudos para experimentar interfaces, componentes e fundamentos de CSS durante a formação em desenvolvimento web.",
    tags: ["React", "CSS", "Git"],
    status: "Estudo contínuo",
    link: "https://github.com/jonnywebnet/reactstudy",
    visual: "code",
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "service") {
  return (
    <div className="project-visual visual-service">
      <img
        src="/assets/tgassistenci.jpg"
        alt="Tela do sistema TG Assistência"
        className="project-image"
      />
    </div>
  );
}
  if (type === "cafe") {
  return (
    <div className="project-visual visual-cafe">
      <img 
        src="/assets/Aurora.jpg" 
        alt="Foto de alta qualidade do Café Aurora" 
        className="project-image2"
      />
    </div>
  );
}

  return <div className="project-visual visual-code"><div className="code-lines"><span /><span /><span /><span /><span /><span /></div><Code2 size={52} /><strong>aprendendo<br />na prática.</strong></div>;
}

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-app">
      <header className="topbar">
        <div className="topbar-inner">
          <a className="identity" href="#inicio" aria-label="Início"><span className="identity-mark">JG</span><span><b>Jhonatan Gomes</b><small>desenvolvedor em formação</small></span></a>
          <nav className="main-nav" aria-label="Navegação principal">{navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
          <a className="topbar-contact" href="#contato">Vamos conversar <ArrowRight size={16} /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
        {menuOpen && <nav className="mobile-menu" aria-label="Menu mobile">{navItems.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}<ArrowRight size={16} /></a>)}<a href="#contato" onClick={closeMenu}>Entrar em contato<ArrowRight size={16} /></a></nav>}
      </header>

      <main>
        <section className="new-hero" id="inicio">
          <div className="hero-inner">
            <div className="hero-main"><p className="hero-label"><span /> PORTFÓLIO PESSOAL / 2026</p><h1>Eu construo<br /><em>soluções</em><br />que funcionam.</h1><p className="hero-intro">Sou Jhonatan Gomes de Souza, estudante de Engenharia de Software e desenvolvedor em formação. Gosto de transformar problemas reais em produtos digitais simples de usar.</p><div className="hero-buttons"><a className="solid-button" href="#projetos">Conheça meu trabalho <ArrowRight size={17} /></a><a className="outline-link" href="#contato">Falar comigo</a></div><div className="hero-meta"><span><i /> disponível para estágio</span><span>Saquarema / RJ</span></div></div>
            <div className="hero-aside"><div className="portrait-card"><img src="/assets/jhonatan-workspace.jpg" alt="Pessoa trabalhando em um projeto de software" /><div className="portrait-shade" /><div className="portrait-caption"><span>JGS</span><small>software<br />& produto</small></div><div className="portrait-badge">01<br /><small>code<br />with<br />purpose</small></div></div><div className="hero-stack"><span>STACK ATUAL</span><b>React</b><b>TypeScript</b><b>Python</b></div></div>
          </div>
          <a className="hero-scroll" href="#sobre"><ChevronDown size={17} /> role para ver mais</a>
        </section>

        <section className="proof-bar"><div><strong>3</strong><span>projetos em<br />destaque</span></div><div><strong>02</strong><span>linguagens<br />principais</span></div><div><strong>01</strong><span>objetivo: primeiro<br />estágio em tech</span></div><p>código com<br /><em>clareza.</em></p></section>

        <section className="about-new" id="sobre"><div className="content-wrap"><div className="section-heading"><span className="section-number">01</span><div><p className="section-overline">Sobre mim</p><h2>Desenvolver é<br /><em>resolver.</em></h2></div></div><div className="about-copy"><div><p className="about-lead">Não quero apenas fazer telas bonitas. Quero entender o problema, organizar a solução e entregar algo que realmente ajude alguém.</p><p>Na Engenharia de Software, venho construindo repertório com aplicações web, jogos e estudos de front-end. Também tenho experiência prática trabalhando em sistemas administrativos, sempre com atenção para organização, segurança e usabilidade.</p></div><div className="about-facts"><div><span>FORMAÇÃO</span><b>Engenharia de<br />Software</b></div><div><span>LOCALIZAÇÃO</span><b>Saquarema,<br />Rio de Janeiro</b></div><div><span>INTERESSE</span><b>Desenvolvimento<br />web</b></div></div></div></div></section>

        <section className="projects-new" id="projetos"><div className="content-wrap"><div className="projects-heading"><div className="section-heading"><span className="section-number">02</span><div><p className="section-overline">Trabalho selecionado</p><h2>O que eu<br /><em>construí.</em></h2></div></div><p>Projetos reais, estudos e sistemas em evolução. Cada um representa uma etapa diferente do meu aprendizado.</p></div><div className="projects-grid">{projects.map((project) => <article className="project-card-new" key={project.title}><ProjectVisual type={project.visual} /><div className="project-card-body"><div className="project-card-top"><span>{project.number} / {project.type}</span><span className="project-status"><i /> {project.status}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-card-footer"><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{project.link ? <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.title} no GitHub`}><ExternalLink size={18} /></a> : <span className="private-label">projeto privado</span>}</div></div></article>)}</div></div></section>

        <section className="skills-new"><div className="content-wrap"><div className="skills-title"><Code2 size={20} /><span>Ferramentas que estou usando</span></div><div className="skills-cloud"><span>React</span><span>TypeScript</span><span>Python</span><span>HTML</span><span>CSS</span><span>Git</span><span>Pygame</span><span>MySQL</span><span>APIs</span></div></div></section>

        <section className="contact-new" id="contato"><div className="content-wrap"><div className="contact-heading"><span className="section-number">03</span><div><p className="section-overline">Contato</p><h2>Vamos fazer<br /><em>algo útil.</em></h2></div></div><div className="contact-layout"><p>Estou aberto a conversar sobre estágio, projetos e oportunidades de aprendizado em desenvolvimento web.</p><div className="contact-links"><a href="mailto:jonnyweb.net@gmail.com"><Mail size={19} /> jonnyweb.net@gmail.com <ArrowRight size={17} /></a><a href="https://github.com/jonnywebnet/" target="_blank" rel="noreferrer"><Github size={19} /> GitHub <ExternalLink size={15} /></a><a href="https://www.linkedin.com/in/jhonatan-gomes-b50326301?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer"><Linkedin size={19} /> LinkedIn <ExternalLink size={15} /></a></div></div><div className="audio-strip"><div><Check size={16} /><span>pausa para criar</span></div><audio controls preload="metadata"><source src="/assets/focus.wav" type="audio/wav" />Seu navegador não suporta áudio.</audio></div></div></section>
      </main>
      <footer className="new-footer"><div className="content-wrap"><span>JG / portfólio pessoal</span><span>feito com React + TypeScript</span><a href="#inicio">voltar ao topo ↑</a></div></footer>
    </div>
  );
}
