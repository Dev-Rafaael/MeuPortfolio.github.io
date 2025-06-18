
import './App.css'
import Apple from './assets/IMG/Apple.png';
import Pizza from './assets/IMG/Pizza.png';
import Casa from './assets/IMG/Casa.png';
import MinhaFoto from './assets/IMG/MinhaFoto.jpg';
import LinkedinTop from './assets/IMG/linkedinTop.png';
import Whatsapp from './assets/IMG/whatsapp.png';
import linkedin from './assets/IMG/linkedin.png';
import github from './assets/IMG/github.png';
import zap from './assets/IMG/zap.png';
import gitHubTop from './assets/IMG/githubTop.png';
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
import profile from './assets/IMG/RmBlueSea.png';
import completo from './assets/IMG/completo.png';
import logoTransparente from './assets/IMG/logoTransparente.png'
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

        <div className="overlayGradient"></div>

        <section className='contentMain'>
          <nav className='navbar'>
            <article className='logo'>
             <p> <img  src={profile} alt="minha Logo" />Rafael </p>
            </article>

            <article className='barra'>
              <ul className='listaBarra'>
                 <li>Home</li>
                <li>Sobre Mim</li>
                <li>Projetos</li>
                <li>Tecnologia</li>
                <li>Contato</li>
              </ul>
            </article>

            <article className="estiloBackground">
              <img src={sol} alt="Claro" />
              <img src={lua} alt="Escuro" />
            </article>
          </nav>
          <section>

            <section >

              <article className="articleVideo">
                <span data-aos="fade-up" data-aos-delay="200">Olá! Sou o</span>
                <h1 className="nome" data-aos="fade-down" data-aos-delay="200">Rafael Moraes</h1>
            
                <article className="logos" data-aos="fade-down" data-aos-delay="200">
                  <a href="https://www.linkedin.com/in/rafael-moraes-13ba5b258/" target="_blank"><img src={LinkedinTop} alt="logo Linkedin" /></a>
                  <a href="tel:+5511916658824"><img src={Whatsapp} alt="logo telefone" /></a>
                  <a href="#"><img src={gitHubTop} alt="logo email" /></a>
                </article>
              
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  <p className='arrowDown'>  <img src={seta} alt="seta Para Baixo" /></p>
                </motion.div>
                

              </article>

            </section>
          </section>

          <section className='content'>
            <section className="sobreMim" id="sobreMim" >
              <div class="titleSobreMim" data-aos="fade-right" data-aos-delay="400">
                <h2>Quem <span>eu sou?</span> </h2>
                <p>Sou um Desenvolvedor Front-end e Full Stack, especializado na criação de interfaces web, desenvolvimento de sistemas e aplicações modernas. Trabalho com tecnologias como React.js, Laravel (PHP) e MySQL, sempre buscando construir soluções dinâmicas, escaláveis e de alta performance.
                </p>
              </div>
              <article className="contentSobre">

                <article className="listaSobre" data-aos="fade-right" data-aos-delay="400">
                  <div className='listaContent'>
                    <p>
                      Sou Desenvolvedor Full Stack com foco em criar soluções web modernas, escaláveis e de
                      alta performance. Trabalho com React.js no front-end e Laravel (PHP) com MySQL no
                      back-end, sempre buscando entregar interfaces bem construídas e sistemas eficientes.
                    </p>
                    <p>
                      Sou formado em Análise e Desenvolvimento de Sistemas pela Anhanguera e pós-graduando em
                      Inteligência Artificial e Ciência de Dados pela Anhembi Morumbi. Além disso,
                      mantenho o aprendizado constante por meio de cursos voltados ao desenvolvimento web.
                    </p>
                    <p>
                      Tenho como prioridade escrever código limpo, aplicar boas práticas e garantir a melhor
                      experiência para o usuário. Estou sempre em busca de evolução e de novos desafios que
                      me façam crescer como profissional e como pessoa.
                    </p>
                  </div>
                  <div className="btnSobreMim">
                    <button ><a href="#contato">Dowload CV</a></button>
                  </div>
                </article>
                <img src={completo} data-aos="fade-left" data-aos-delay="400" />
              </article>

            </section>
            <section className="sectionProjetos" id="sectionProjetos">
              {/* <div className="titleProjetos">
    <h2>Projetos</h2>
  <p>Uma seleção dos meus melhores trabalhos e projetos recentes</p>
  </div> */}
              <div className="titleProjetos" data-aos="fade-right" data-aos-delay="400" >
                <h2>Projetos</h2>
              </div>
              <div className="subtitle" data-aos="fade-left" data-aos-delay="400">
                <p>Uma seleção dos meus melhores trabalhos e projetos recentes</p>
              </div>
              <article className="contentProjetos">

                {/* Card Projeto */}
                <div className="card" data-aos="fade-right" data-aos-delay="200">
                  <article className="cardResponsivo">
                    <div className="imagensCard">
                      <img src={amg} className="imagem" alt="Notebook" />
                      <button><a href="https://dev-rafaael.github.io/VendasIPhone.github.io/" target="_blank">Ver Projeto</a></button>
  
                    </div>
                  </article>
                  <article className='projeto'>
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
            </div>

                {/* Card Projeto */}  
                <div className="card" data-aos="fade-left" data-aos-delay="200">
                  <article className="cardResponsivo">
                    <div className="imagensCard">
                      <img src={jaguar} className="imagem" alt="Notebook" />
                       <button><a href="https://dev-rafaael.github.io/PizzariaLaPizza.github.io/" target="_blank">Ver Projeto</a></button>
                    </div>
                  </article>
                  <article className='projeto'>
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
              </div>

                {/* Card Projeto */}
                <div className="card" data-aos="fade-right" data-aos-delay="200">
                  <article className="cardResponsivo">
                    <div className="imagensCard">
                      <img src={bronco} className="imagem" alt="Notebook" />
                      <button><a href="https://dev-rafaael.github.io/DecoreHome.github.io/" target="_blank">Ver Projeto</a></button>
    
                    </div>

                  </article>
                  <article className='projeto'>
                    <h5>DecoreHome</h5>
                    <p>I created a fullstack application using Next.js
                      with APi Routes, mongodb, firebase, built
                      a CMS from scratch and several advanced features.</p>
                    <ul className="tecUsadas">
                      <li><img src={html} alt="HTML" /></li>
                      <li><img src={css} alt="CSS" /></li>
                      <li><img src={javascript} alt="JavaScript" /></li>
                    </ul>
      
                  </article>

                </div>
                {/* Card Projeto */}
                <div className="card" data-aos="fade-left" data-aos-delay="200">
                  <article className="cardResponsivo">
                    <div className="imagensCard">
                      <img src={f1} className="imagem" alt="Notebook" />
                      <button><a href="https://dev-rafaael.github.io/DecoreHome.github.io/" target="_blank">Ver Projeto</a></button>

                    </div>

                  </article>
                  <article className='projeto'>
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
               
                </div>
                <div className="card" data-aos="fade-left" data-aos-delay="200">
                  <article className="cardResponsivo">
                    <div className="imagensCard">
                      <img src={mustang} className="imagem" alt="Notebook" />
                      <button><a href="https://dev-rafaael.github.io/PizzariaLaPizza.github.io/" target="_blank">Ver Projeto</a></button>
               
                    </div>
                  </article>
                  <article className='projeto'>
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
                 </div>
                <div className="card" data-aos="fade-left" data-aos-delay="200">
                  <article className="cardResponsivo">
                    <div className="imagensCard">
                      <img src={porsche} className="imagem" alt="Notebook" />
                      <button><a href="https://dev-rafaael.github.io/PizzariaLaPizza.github.io/" target="_blank">Ver Projeto</a></button>

                    </div>
                  </article>
                  <article className='projeto'>
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
                </div>
              </article>

            </section>

            <section class="habilidadesContent" >
              <div class="titleTecnologia" data-aos="fade-right" data-aos-delay="400">
                <h2> Tecnologias e <span>Ferramentas</span></h2>
              </div>
              <div className="subtitle" data-aos="fade-left" data-aos-delay="400">
                <p> Tecnologias e Ferramentas que domino e utilizo nos meus projetos</p>
              </div>
              <article className='articleHabilidades' data-aos="fade-down" data-aos-delay="400">
                <div className="listas">
                  <ul>

                    <li>  <img src={react} alt="React JS" /></li>
                    <li>  <img src={javascript} alt="javascript" /></li>
                    <li>  <img src={typescript} alt="Typescript" /></li>
                    <li>  <img src={html} alt="HTML" /></li>
                    <li>  <img src={css} alt="CSS" /></li>
                    <li>  <img src={node} alt="Node JS" /></li>
                  </ul>
                  {/* <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quisquam ad exercitationem facilis sit id, earum natus magnam iusto voluptates placeat fugiat voluptatum itaque doloremque totam amet molestias a assumenda.</span> */}
                </div>
                <div className="listas">
                  <ul>

                    <li>  <img src={express} alt="Express JS" /></li>

                    <li>  <img src={php} alt="PHP" /></li>
                    <li>  <img src={sql} alt="SQL" /></li>
                    <li>  <img src={git} alt="GIT" /></li>
                    <li>  <img src={figma} alt="Figma" /></li>

                  </ul>
                  {/* <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quisquam ad exercitationem facilis sit id, earum natus magnam iusto voluptates placeat fugiat voluptatum itaque doloremque totam amet molestias a assumenda.</span> */}

                </div>
              </article>
            </section>

            <section className='sectionContato'>
              <article className="titleContato">
                <h2>Vamos <span>Conversar?</span></h2>
                <p>Pronto para criar experiências digitais incríveis? Vamos discutir seu projeto e transformar suas ideias em realidade.</p>
              </article>
              <div className="contato">
                <article className='formularioContato'>
                  <div className="contentform">
                    <form >
                      <div className="titulosForm">
                     
                        <h2> 💡<span> Conecte-se Comigo</span></h2>
                        <p>Quanto mais detalhes, melhor posso ajudar você!</p>
                      </div>
                      <div className="campo">
                        <label htmlFor="">Como Posso te Chamar *</label>
                        <input type="text" placeholder='Digite Seu Nome' />
                      </div>
                      <div className="campo">
                        <label htmlFor=""> Seu Melhor Email *</label>
                        <input type="email" placeholder='Digite Seu Email' />
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
                  </div>
                </article>
                <section className='contentContato'>
                  <article className='meioContato'>
                    <div className="conteudoApresentacao">
                      <h2>🔗 <span>Outras Formas de Contato </span> </h2>
                    </div>
                    <ul>
                      <li className='whastsappIcon'><img src={zap} alt="zap" /> <a href="https://wa.me/5511916658824" target="_blank">
                        <p>Whastsapp</p>
                        <span> Para Contato Profissional</span>
                      </a>
                      </li>

                      <li className='linkedinIcon'><img src={linkedin} alt="zap" /> <a href="https://linkedin.com/in/rafael-moraes-13ba5b258/" target="_blank">
                        <p>linkedin</p>
                        <span>para Conexoes Profissionais</span>
                      </a>
                      </li>

                      <li className='gitHubIcon'><img src={github} alt="zap" /> <a href="https://github.com/Dev-Rafaael" target="_blank">
                        <p>Git Hub</p>
                        <span> Para Conhecimento Profissional</span>
                      </a>
                      </li>
                    </ul>
                  </article>
                </section>
              </div>
            </section>
          </section>
        </section>
      </main>
    </>
  )
}

export default App
