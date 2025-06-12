
import './App.css'
import Apple from './assets/IMG/Apple.png';
import Pizza from './assets/IMG/Pizza.png';
import Casa from './assets/IMG/Casa.png';
import MinhaFoto from './assets/IMG/MinhaFoto.jpg';
import Linkedin from './assets/IMG/linkedin.png';
import Whatsapp from './assets/IMG/whatsapp.png';
import github from './assets/IMG/github.png';
import css from './assets/IMG/css.png';
import express from './assets/IMG/express.png';
import figma from './assets/IMG/figma.png';
import git from './assets/IMG/git.png';
import html from './assets/IMG/html.png';
import javascript from './assets/IMG/javascript.png';
import node from './assets/IMG/node.png';
import php from './assets/IMG/php.png';
import react from './assets/IMG/react.png';
import seta from './assets/IMG/seta.png';
import sql from './assets/IMG/sql.png';
import sol from './assets/IMG/sol.png';
import lua from './assets/IMG/lua.png';
import typescript from './assets/IMG/typescript.png';
// import videoFile from './assets/videoBackground.mp4';
import quadrado from './assets/quadrados.mp4';
// import galaxia1 from './assets/galaxia1.mp4';
// import galaxia2 from './assets/galaxia2.mp4';
// import galaxia3 from './assets/galaxia3.mp4';
import jaguar from './assets/IMG/jaguar.jpg';
import mustang from './assets/IMG/mustang.jpg';
import f1 from './assets/IMG/f1.jpg';
import amg from './assets/IMG/amg.jpg';
import bronco from './assets/IMG/bronco.jpg';
import porsche from './assets/IMG/911.jpg';
import profile from './assets/IMG/profile.jpg';
import completo from './assets/IMG/completo.png';

import code from './assets/IMG/code.png';
import exemplo1 from './assets/IMG/exemplo1.png';
import exemplo29 from './assets/IMG/exemplo29.png';
import programando from './assets/IMG/programando.png';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
 useEffect(() => {
  AOS.init();
}, []);
  return (
    <>
<main className="videoSection">

<video autoPlay loop muted playsInline >
        <source src={quadrado} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      
      <div className= "overlayGradient"></div>
      
<section className='contentMain'>
  <section>

      <section >
  
      <article className="articleVideo">
        <div className="estiloBackground">
          <img src={sol} alt="Claro" /> 
          <img src={lua} alt="Escuro" /> 
      </div>
        <span data-aos="fade-up" data-aos-delay="200">Olá! Sou o</span>
      <h1 className="nome" data-aos="fade-down" data-aos-delay="200">Rafael Moraes</h1>
       <article className="logos" data-aos="fade-down" data-aos-delay="200">
          <a href="https://www.linkedin.com/in/rafael-moraes-13ba5b258/" target="_blank"><img src={Linkedin} alt="logo Linkedin"/></a>
          <a href="tel:+5511916658824"><img src={Whatsapp} alt="logo telefone"/></a>
          <a href="#"><img src={github} alt="logo email"/></a>
          </article>
          <motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ repeat: Infinity, duration: 1 }}
>
          <p className='arrowDown'>  <img src={seta} alt="seta Para Baixo"/></p>
          </motion.div>
         <article class="quote-box" data-aos="fade-left" data-aos-delay="800">
  <h3>Clean Code, Clear Purpose.</h3>
  <p>— Chat GPT</p>
</article>

      </article>
      
    </section>
</section>
 
<section className='content'>
 <section className="sobreMim" id="sobreMim" >   
   <div class="titleSobreMim" data-aos="fade-right" data-aos-delay="400">
        <h2>Quem eu sou?</h2>
        <p>Sou um Desenvolvedor Front-end e Full Stack, especializado na criação de interfaces web, desenvolvimento de sistemas e aplicações modernas. Trabalho com tecnologias como React.js, Laravel (PHP) e MySQL, sempre buscando construir soluções dinâmicas, escaláveis e de alta performance.
</p>
    </div> 
      <article className="contentSobre">
     
    <article className="listaSobre" data-aos="fade-right" data-aos-delay="400">
    <ul className='listaContent'>
      <p>Sou Desenvolvedor Full Stack, apaixonado por tecnologia e inovação. Localizado em São Paulo, tenho como propósito criar soluções digitais que sejam modernas, eficientes e impactem positivamente a vida das pessoas.

Sou graduado em Análise e Desenvolvimento de Sistemas pela Anhanguera Educacional e atualmente curso uma pós-graduação em Inteligência Artificial e Ciência de Dados pela Universidade Anhembi Morumbi. Também estou sempre em busca de evolução contínua, participando de diversos cursos e formações na área de Desenvolvimento Web, especialmente na Udemy.

Atuo com tecnologias como React.js no front-end e Laravel (PHP) com MySQL no back-end, sempre com foco em desenvolver aplicações escaláveis, bem estruturadas e com ótima performance. Me preocupo com a experiência do usuário, a responsividade das interfaces e a qualidade do código — buscando sempre aplicar boas práticas, Clean Code, versionamento com Git e metodologias ágeis.

Meu objetivo é construir sistemas que façam a diferença, com código limpo, arquitetura sólida e que estejam prontos para crescer junto com o projeto. Estou sempre aprendendo, testando novas ideias e contribuindo para soluções mais inteligentes e funcionais.</p>
    </ul>
  <div className="btnSobreMim">
     <button ><a href="#contato">Leia mais aqui</a></button>
     </div>
     </article>
      <img src={completo} data-aos="fade-left" data-aos-delay="400"/>
  </article>
 
</section>
<section className="projetos" id="projetos">
  {/* <div className="titleProjetos">
    <h2>Projetos</h2>
  <p>Uma seleção dos meus melhores trabalhos e projetos recentes</p>
  </div> */}
  <div className="title-wrapper" data-aos="fade-right" data-aos-delay="400" >
    <h2>Projetos</h2>
  </div>
<div className="subtitle" data-aos="fade-left" data-aos-delay="400">
     <p>Uma seleção dos meus melhores trabalhos e projetos recentes</p>
  </div>
  <article className="content-projetos">

    {/* Card Projeto */}
    <div className="card" data-aos="fade-right" data-aos-delay="200">
      <article className="cardResponsivo">
        <div className="imagensCard">
          <img src={amg} className="imagem" alt="Notebook" />
          </div>
      </article>
      <article className='contentProject'>
      <h5>Autosystem Linx</h5>
      <p>I am the main frontend in this project, building
         from scratch
         the architecture of an ERP full of complex modules.</p>
      <ul className="tecUsadas">
        <li><img src={html} alt="HTML" /></li>
        <li><img src={css} alt="CSS" /></li>
        <li><img src={javascript} alt="JavaScript" /></li>
      </ul>
      </article>
      {/* <button><a href="https://dev-rafaael.github.io/VendasIPhone.github.io/" target="_blank">Ver Projeto</a></button>
   */} </div> 

    {/* Card Projeto */}
    <div className="card" data-aos="fade-left" data-aos-delay="200">
      <article className="cardResponsivo">
        <div className="imagensCard">
          <img src={jaguar} className="imagem" alt="Notebook" />
           </div>
      </article>
       <article className='contentProject'>
      <h5>Npi Consultoria</h5>
      <p>I am the main frontend in this project, building
         from scratch the architecture of an ERP full of
        complex modules</p>
      <ul className="tecUsadas">
        <li><img src={html} alt="HTML" /></li>
        <li><img src={css} alt="CSS" /></li>
        <li><img src={javascript} alt="JavaScript" /></li>
      </ul>
      </article>
      {/* <button><a href="https://dev-rafaael.github.io/PizzariaLaPizza.github.io/" target="_blank">Ver Projeto</a></button>
   */} </div> 

    {/* Card Projeto */}
 <div className="card" data-aos="fade-right" data-aos-delay="200">
      <article className="cardResponsivo">
        <div className="imagensCard">
          <img src={bronco} className="imagem" alt="Notebook" />
        </div>

      </article>
      <article className='contentProject'>
      <h5>DecoreHome</h5>
      <p>I created a fullstack application using Next.js 
        with APi Routes, mongodb, firebase, built
         a CMS from scratch and several advanced features.</p>
      <ul className="tecUsadas">
        <li><img src={html} alt="HTML" /></li>
        <li><img src={css} alt="CSS" /></li>
        <li><img src={javascript} alt="JavaScript" /></li>
      </ul>
      {/* <button><a href="https://dev-rafaael.github.io/DecoreHome.github.io/" target="_blank">Ver Projeto</a></button>
    */}
      </article>
      
    </div>
 {/* Card Projeto */}
    <div className="card" data-aos="fade-left" data-aos-delay="200">
      <article className="cardResponsivo">
        <div className="imagensCard">
          <img src={f1} className="imagem" alt="Notebook" />
        </div>

      </article>
      <article className='contentProject'>
      <h5>DecoreHome</h5>
        <p>I have worked on several features in
           the netshoes core team, currently mostly in
            performance engineering.</p>
      <ul className="tecUsadas">
        <li><img src={html} alt="HTML" /></li>
        <li><img src={css} alt="CSS" /></li>
        <li><img src={javascript} alt="JavaScript" /></li>
      </ul>
      </article>
      {/* <button><a href="https://dev-rafaael.github.io/DecoreHome.github.io/" target="_blank">Ver Projeto</a></button> */}
    
    </div>
     <div className="card" data-aos="fade-left" data-aos-delay="200">
      <article className="cardResponsivo">
        <div className="imagensCard">
          <img src={mustang} className="imagem" alt="Notebook" />
           </div>
      </article>
      <article className='contentProject'>
      <h5>La Pizza</h5>
       <p>I have worked on several features in
           the netshoes core team, currently mostly in
            performance engineering.</p>
      <ul className="tecUsadas">
        <li><img src={html} alt="HTML" /></li>
        <li><img src={css} alt="CSS" /></li>
        <li><img src={javascript} alt="JavaScript" /></li>
      </ul>
      </article>
      {/* <button><a href="https://dev-rafaael.github.io/PizzariaLaPizza.github.io/" target="_blank">Ver Projeto</a></button> */}
    </div>
     <div className="card" data-aos="fade-left" data-aos-delay="200">
      <article className="cardResponsivo">
        <div className="imagensCard">
          <img src={porsche} className="imagem" alt="Notebook" />
           </div>
      </article>
      <article className='contentProject'>
      <h5>La Pizza</h5>
  <p>I have worked on several features in
           the netshoes core team, currently mostly in
            performance engineering.</p>
      <ul className="tecUsadas">
        <li><img src={html} alt="HTML" /></li>
        <li><img src={css} alt="CSS" /></li>
        <li><img src={javascript} alt="JavaScript" /></li>
      </ul>
        {/* <button><a href="https://dev-rafaael.github.io/PizzariaLaPizza.github.io/" target="_blank">Ver Projeto</a></button> */}
    
      </article>
    </div>
  </article>
  
</section>

<section class="habilidadesContent" >
   <div class="title-wrapper" data-aos="fade-right" data-aos-delay="400">
      <h2>Habilidades</h2>
    </div>
    <div className="subtitle" data-aos="fade-left" data-aos-delay="400">
     <p>Tecnologias e ferramentas que domino e utilizo nos meus projetos</p>
  </div>
  <article className='articleHabilidades' data-aos="fade-down" data-aos-delay="400">
  <div className="listas">
    <ul>
      
      <li>  <img src={react} alt="React JS"/></li>
     <li>  <img src={javascript} alt="javascript"/></li>
      <li>  <img src={typescript} alt="Typescript"/></li>
     <li>  <img src={html} alt="HTML"/></li>
      <li>  <img src={css} alt="CSS"/></li>
       <li>  <img src={node} alt="Node JS"/></li>
    </ul>
    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quisquam ad exercitationem facilis sit id, earum natus magnam iusto voluptates placeat fugiat voluptatum itaque doloremque totam amet molestias a assumenda.</span>
  </div>
   <div className="listas">
     <ul>
     
      <li>  <img src={express} alt="Express JS"/></li>
    
 <li>  <img src={php} alt="PHP"/></li>
    <li>  <img src={sql} alt="SQL"/></li>
       <li>  <img src={git} alt="GIT"/></li>
    <li>  <img src={figma} alt="Figma"/></li>

 </ul>
  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quisquam ad exercitationem facilis sit id, earum natus magnam iusto voluptates placeat fugiat voluptatum itaque doloremque totam amet molestias a assumenda.</span>
  
  </div>
  </article>
</section>

  <section className='contato'>
    <article className='contentContato'>
 <div class="title-wrapper" data-aos="fade-right" data-aos-delay="400">
      <h2>Entre em contato</h2>
      <div class="line"></div>
    </div>
    <article className='listaMotivos'>
    <ul>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eos maxime placeat!</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eos maxime placeat!</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eos maxime placeat!</li>
    </ul>
    </article>
    <article className='meioContato'>
      <ul>
        <li>Whatsapp: +55 1191665-8824</li>
        <li>Linkedin:<link rel="stylesheet" href="linkedin.com/in/rafael-moraes-13ba5b258/" /></li>
         <li>Github: <link rel="stylesheet" href="https://dev-rafaael.github.io/" /></li>
      </ul>
      </article>
    </article>
    <article className='formularioContato'>
      <form >
          <div className="campo">
             <label htmlFor="">Como Posso te Chamar *</label>
                <input type="text" placeholder='Digite Seu Nome' />           
          </div>
           <div className="campo">
             <label htmlFor=""> Seu Melhor Email *</label>
              <input type="email"  placeholder='Digite Seu Email'/>
          </div>
            <div className="campo">
             <label htmlFor="">Motivo De contato </label>
                <select name="motivo" id="motivo">
                  <option value="selecione" disabled>Selecione</option>
                  <option value="selecione" >Contratar</option>
                  <option value="selecione" >Selecione</option>
                  <option value="selecione" >Selecione</option>
                </select>
          </div>
            <div className="campo">
               <label htmlFor="Mensagem"> Conte Mais sobre o Motivo De Contato*</label>
                <textarea name="Mensagem" id="Mensagem"></textarea>
          </div>
          <div className="buttonForm">
            <button>Enviar Mensagem</button>
          </div>
      </form>
    </article>
    </section>
  </section>
  </section>
</main>
    </>
  )
}

export default App
