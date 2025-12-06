
import './App.css'
import videoBackgroundWhite from './assets/videoBackgroundWhite.mp4';
import videoBackground from './assets/videoBackground.mp4';
import arrow from './assets/IMG/arrow.png';
import arrowBlack from './assets/IMG/arrowBlack.png';
import Whatsapp from './assets/IMG/whatsapp.png';
import Linkedin from './assets/IMG/linkedin.png';
import Github from './assets/IMG/github.png';
import css from './assets/IMG/css.png';
import express from './assets/IMG/express.png';
import figma from './assets/IMG/figma.png';
import git from './assets/IMG/git.png';
import html from './assets/IMG/html.png';
import javascript from './assets/IMG/javascript.png';
import node from './assets/IMG/node.png';
import php from './assets/IMG/php.png';
import react from './assets/IMG/react.png';
import sql from './assets/IMG/sql.png';
import sol from './assets/IMG/sol.png';
import lua from './assets/IMG/lua.png';
import typescript from './assets/IMG/typescript.png';
import jaguar from './assets/IMG/jaguar.jpg';
import mustang from './assets/IMG/mustang.jpg';
import f1 from './assets/IMG/f1.jpg';
import amg from './assets/IMG/amg.jpg';
import bronco from './assets/IMG/bronco.jpg';
import porsche from './assets/IMG/911.jpg';
import profile from './assets/IMG/RmBlueSea.png';
import completo from './assets/IMG/completo.png';
import iconPessoal from './assets/IconPessoal.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
function App() {
  const [modoEscuro, setModoEscuro]= useState(true);
  const videoRef = useRef(null); // <- Referência ao vídeo
  const darkMode = () => {
    setModoEscuro(true)
  }
 const WhiteMode = () => {
    setModoEscuro(false)
  }
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // <- Força o reload do vídeo ao trocar o tema
    }
  }, [modoEscuro]);

   const Home = () => {
    document.querySelector("#infoPessoal").scrollIntoView({ behavior: "smooth" });
  };

  const sobreMim = () => {
    document.querySelector("#sobreMim").scrollIntoView({ behavior: "smooth" });
  };

    const projetos = () => {
    document.querySelector("#projeto").scrollIntoView({ behavior: "smooth" });
  };
    const tecnologias = () => {
    document.querySelector("#tecnologia").scrollIntoView({ behavior: "smooth" });
  };
    const contato = () => {
    document.querySelector("#contato").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
        <main className={modoEscuro ? "videoSection" : "videoSectionWhite"}>

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="video-background"
        >
          <source src={modoEscuro ? videoBackground : videoBackgroundWhite} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>

        <div className={modoEscuro ? "overlayGradient" : "overlayGradientWhite"}></div>

        <section className={ modoEscuro ?'contentMain' :'contentMainWhite'}>
          <nav className={ modoEscuro ?'navbar' :'navbarWhite'}>
            <article className='logo'>
             <p> <img  src={profile} alt="minha Logo" />Rafael </p>
            </article>

            <article className={modoEscuro ? "barra" : "barraWhite"}>
              <ul className= {modoEscuro ? "listaBarra" : "listaBarraWhite"}>
                 <li onClick={Home}>Home</li>
                <li onClick={sobreMim}>Sobre Mim</li>
                <li onClick={projetos}>Projetos</li>
                <li onClick={tecnologias}>Tecnologia</li>
                <li onClick={contato}>Contato</li>
              </ul>
            </article>

            <article className= {modoEscuro ? "estiloBackground" : "estiloBackgroundWhite"}>
              <img
                className="icone-tema"
                onClick={modoEscuro ? WhiteMode : darkMode}
                src={modoEscuro ? sol : lua}
                alt={modoEscuro ? 'Claro' : 'Escuro'}
              />
            </article>
          </nav>
          <section>

            <section >

              <section className="articleVideo">
                <article className='infoPessoal' id='infoPessoal'>
                  <div className={modoEscuro ? 'dadosInfo' : 'dadosInfoWhite'}>
                 <h4>Construo experiências digitais que <span>encantam na interface </span>  e funcionam com solidez por trás dos bastidores.</h4>
          <p >
              <TypeAnimation
                sequence={[
                  "Do layout ao banco de dados, transformo ideias em aplicações modernas, rápidas e alinhadas com os objetivos do seu negócio.",
                  2000,
                  "",
                ]}
                wrapper="p"
                speed={50}
                style={{ fontSize: '1.1rem', display: 'inline-block' }}
                repeat={Infinity}
              />
            </p>

                </div>
                <div className="iconInfo">
                  <img src={iconPessoal} alt="" />
                </div>
                
             </article>
              
                  <p className='arrowDown' onClick={sobreMim}>  <img src={modoEscuro ?arrow : arrowBlack} alt="seta Para Baixo" /></p>
              </section>

            </section>
          </section>

          <section className={modoEscuro ? "content" : "contentWhite"}>
            <section className= {modoEscuro ? "sobreMim" : "sobreMimWhite"} id="sobreMim" >
              <div className={modoEscuro ? "titleSobreMim" : "titleSobreMimWhite"} data-aos="fade-right" data-aos-delay="400">
                <h2>Quem <span>eu sou?</span> </h2>
                <p>Sou o <span>Rafael</span> um Desenvolvedor Front-end e Full Stack, especializado na criação de interfaces web,
                   desenvolvimento de sistemas e aplicações modernas. Trabalho com tecnologias como React.js,
                    Laravel (PHP) e MySQL, sempre buscando construir soluções dinâmicas, escaláveis e de alta performance.
                </p>
              </div>
              <article className= {modoEscuro ? "contentSobre" : "contentSobreWhite"}> 

                <article className={modoEscuro ? "listaSobre" : "listaSobreWhite"} data-aos="fade-right" data-aos-delay="400">
                  <div className={modoEscuro ? "listaContent" : "listaContentWhite"}>
                    <p>
                      Me chamo <span> Rafael Moraes</span>, sou Desenvolvedor Full Stack com foco em criar soluções web modernas, escaláveis e de
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
                  <div className= {modoEscuro ? "btnSobreMim" : "btnSobreMimWhite"}>
                    <button ><a href="#contato">Dowload CV</a></button>
                  </div>
                </article>
                <img src={completo} data-aos="fade-left" data-aos-delay="400" />
              </article>

            </section>
            <section className={modoEscuro ? "sectionProjetos" : "sectionProjetosWhite"} id="projeto">
    
              <div className={modoEscuro ? "titleProjetos" : "titleProjetosWhite"} data-aos="fade-right" data-aos-delay="400" >
                <h2>Projetos</h2>
              </div>
              <div className={modoEscuro ? "subtitle" : "subtitleWhite"} data-aos="fade-left" data-aos-delay="400">
                <p>Uma seleção dos meus melhores trabalhos e projetos recentes</p>
              </div>
              <article className={modoEscuro ? "contentProjetos" : "contentProjetosWhite"}>

                {/* Card Projeto */}
                <div className={modoEscuro ? "card" : "cardWhite"} data-aos="fade-right" data-aos-delay="200">
                  <article className={modoEscuro ? "cardResponsivo" : "cardResponsivoWhite"}>
                    <div className={modoEscuro ? "imagensCard" : "imagensCardWhite"}>
                      <img src={amg} className="imagem" alt="Notebook" />
                      <button><a href="https://github.com/Dev-Rafaael/La-Pizza" target="_blank">Ver Projeto</a></button>
  
                    </div>
                  </article>
                  <article className= {modoEscuro ? "projeto" : "projetoWhite"}>
                    <h5>E-Commerce La Pizza</h5>
                    <p>I am the main frontend in this project, building
                      from scratch
                      the architecture of an ERP full of complex modules.</p>
                    <ul className={modoEscuro ? "tecUsadas" : "tecUsadasWhite"}>
                      <li><img src={html} alt="HTML" /></li>
                      <li><img src={css} alt="CSS" /></li>
                      <li><img src={javascript} alt="JavaScript" /></li>
                    </ul>
                  </article>
            </div>

                {/* Card Projeto */}  
                <div className={modoEscuro ? "card" : "cardWhite"}  data-aos="fade-left" data-aos-delay="200">
                  <article className={modoEscuro ? "cardResponsivo" : "cardResponsivoWhite"}>
                    <div className={modoEscuro ? "imagensCard" : "imagensCardWhite"}>
                      <img src={jaguar} className="imagem" alt="Notebook" />
                       <button><a href="https://dev-rafaael.github.io/PizzariaLaPizza.github.io/" target="_blank">Ver Projeto</a></button>
                    </div>
                  </article>
                  <article className= {modoEscuro ? "projeto" : "projetoWhite"}>
                    <h5>Npi Consultoria</h5>
                    <p>I am the main frontend in this project, building
                      from scratch the architecture of an ERP full of
                      complex modules</p>
                    <ul className={modoEscuro ? "tecUsadas" : "tecUsadasWhite"}>
                      <li><img src={html} alt="HTML" /></li>
                      <li><img src={css} alt="CSS" /></li>
                      <li><img src={javascript} alt="JavaScript" /></li>
                    </ul>
                  </article>
              </div>

                {/* Card Projeto */}
                <div className={modoEscuro ? "card" : "cardWhite"} data-aos="fade-right" data-aos-delay="200">
                  <article  className={modoEscuro ? "cardResponsivo" : "cardResponsivoWhite"}>
                    <div className={modoEscuro ? "imagensCard" : "imagensCardWhite"}>
                      <img src={bronco} className="imagem" alt="Notebook" />
                      <button><a href="https://dev-rafaael.github.io/DecoreHome.github.io/" target="_blank">Ver Projeto</a></button>
    
                    </div>

                  </article>
                  <article className= {modoEscuro ? "projeto" : "projetoWhite"}>
                    <h5>DecoreHome</h5>
                    <p>I created a fullstack application using Next.js
                      with APi Routes, mongodb, firebase, built
                      a CMS from scratch and several advanced features.</p>
                    <ul className={modoEscuro ? "tecUsadas" : "tecUsadasWhite"}>
                      <li><img src={html} alt="HTML" /></li>
                      <li><img src={css} alt="CSS" /></li>
                      <li><img src={javascript} alt="JavaScript" /></li>
                    </ul>
      
                  </article>

                </div>
                {/* Card Projeto */}
                <div className={modoEscuro ? "card" : "cardWhite"} data-aos="fade-left" data-aos-delay="200">
                  <article  className={modoEscuro ? "cardResponsivo" : "cardResponsivoWhite"}>
                    <div className={modoEscuro ? "imagensCard" : "imagensCardWhite"}>
                      <img src={f1} className="imagem" alt="Notebook" />
                      <button><a href="https://dev-rafaael.github.io/DecoreHome.github.io/" target="_blank">Ver Projeto</a></button>

                    </div>

                  </article>
                  <article className= {modoEscuro ? "projeto" : "projetoWhite"}>
                    <h5>DecoreHome</h5>
                    <p>I have worked on several features in
                      the netshoes core team, currently mostly in
                      performance engineering.</p>
                    <ul className={modoEscuro ? "tecUsadas" : "tecUsadasWhite"}>
                      <li><img src={html} alt="HTML" /></li>
                      <li><img src={css} alt="CSS" /></li>
                      <li><img src={javascript} alt="JavaScript" /></li>
                    </ul>
                  </article>
               
                </div>
                <div className={modoEscuro ? "card" : "cardWhite"} data-aos="fade-left" data-aos-delay="200">
                  <article className={modoEscuro ? "cardResponsivo" : "cardResponsivoWhite"}>
                    <div className={modoEscuro ? "imagensCard" : "imagensCardWhite"}>
                      <img src={mustang} className="imagem" alt="Notebook" />
                      <button><a href="https://dev-rafaael.github.io/PizzariaLaPizza.github.io/" target="_blank">Ver Projeto</a></button>
               
                    </div>
                  </article>
                  <article className= {modoEscuro ? "projeto" : "projetoWhite"}>
                    <h5>La Pizza</h5>
                    <p>I have worked on several features in
                      the netshoes core team, currently mostly in
                      performance engineering.</p>
               
                    <ul className={modoEscuro ? "tecUsadas" : "tecUsadasWhite"}>
                      <li><img src={html} alt="HTML" /></li>
                      <li><img src={css} alt="CSS" /></li>
                      <li><img src={javascript} alt="JavaScript" /></li>
                    </ul>
                  </article>
                 </div>
                <div className={modoEscuro ? "card" : "cardWhite"} data-aos="fade-left" data-aos-delay="200">
                  <article  className={modoEscuro ? "cardResponsivo" : "cardResponsivoWhite"}>
                    <div className={modoEscuro ? "imagensCard" : "imagensCardWhite"}>
                      <img src={porsche} className="imagem" alt="Notebook" />
                      <button><a href="https://dev-rafaael.github.io/PizzariaLaPizza.github.io/" target="_blank">Ver Projeto</a></button>

                    </div>
                  </article>
                  <article className= {modoEscuro ? "projeto" : "projetoWhite"}>
                    <h5>La Pizza</h5>
                    <p>I have worked on several features in
                      the netshoes core team, currently mostly in
                      performance engineering.</p>
                    <ul className={modoEscuro ? "tecUsadas" : "tecUsadasWhite"}>
                      <li><img src={html} alt="HTML" /></li>
                      <li><img src={css} alt="CSS" /></li>
                      <li><img src={javascript} alt="JavaScript" id='tecnologia' /></li>
                    </ul>
                  
                  </article>
                </div>
              </article>

            </section>

            <section className= {modoEscuro ? "habilidadesContent" : "habilidadesContentWhite"} >
              <div className={modoEscuro ? "titleTecnologia" : "titleTecnologiaWhite"} data-aos="fade-right" data-aos-delay="400">
                <h2> Tecnologias e <span>Ferramentas</span></h2>
              </div>
              <div className={modoEscuro ? "subtitle" : "subtitleWhite"} data-aos="fade-left" data-aos-delay="400">
                <p> Tecnologias e Ferramentas que domino e utilizo nos meus projetos</p>
              </div>
              <article className={modoEscuro ? "articleHabilidades" : "articleHabilidadesWhite"} data-aos="fade-down" data-aos-delay="400">
                <div className={modoEscuro ? "listas" : "listasWhite"}>
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
                <div className={modoEscuro ? "listas" : "listasWhite"}>
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

            <section className= {modoEscuro ? "sectionContato" : "sectionContatoWhite"} id='contato'>
              <article className={modoEscuro ? "titleContato" : "titleContatoWhite"}>
                <h2>Vamos <span>Conversar?</span></h2>
                <p>Pronto para criar experiências digitais incríveis? Vamos discutir seu projeto e transformar suas ideias em realidade.</p>
              </article>
              <div className={modoEscuro ? "contato" : "contatoWhite"}>
                <article className={modoEscuro ? "formularioContato" : "formularioContatoWhite"}>
                  <div className={modoEscuro ? "contentform" : "contentformWhite"}>
                    <form >
                      <div className= {modoEscuro ? "titulosForm" : "titulosFormWhite"}>
                     
                        <h2> 💡<span> Conecte-se Comigo</span></h2>
                        <p>Quanto mais detalhes, melhor posso ajudar você!</p>
                      </div>
                      <div className={modoEscuro ? "campo" : "campoWhite"}>
                        <label htmlFor="">Como Posso te Chamar *</label>
                        <input type="text" placeholder='Digite Seu Nome' />
                      </div>
                      <div className={modoEscuro ? "campo" : "campoWhite"}>
                        <label htmlFor=""> Seu Melhor Email *</label>
                        <input type="email" placeholder='Digite Seu Email' />
                      </div>
                     <div className={modoEscuro ? "campo" : "campoWhite"}>
                        <label htmlFor="">Motivo De contato </label>
                        <select name="motivo" id="motivo" required>
                        <option value="" disabled selected>Selecione um motivo</option>
                        <option value="freelance">Solicitar Projeto Freelance</option>
                        <option value="vaga">Oferta de Vaga de Emprego</option>
                        <option value="duvida">Tirar uma Dúvida Técnica</option>
                        <option value="parceria">Propor Parceria</option>
                        <option value="outro">Outro</option>
                      </select>
                      </div>
                      <div className={modoEscuro ? "campo" : "campoWhite"}>
                        <label htmlFor="Mensagem"> Conte Mais sobre o Motivo De Contato*</label>
                        <textarea name="Mensagem" id="Mensagem"></textarea>
                      </div>
                      <div className= {modoEscuro ? "buttonForm" : "buttonFormWhite"}>
                        <button>Enviar Mensagem</button>
                      </div>
                    </form>
                  </div>
                </article>
                <section className={modoEscuro ? "contentContato" : "contentContatoWhite"}>
                  <article className= {modoEscuro ? "meioContato" : "meioContatoWhite"}>
                    <div className={modoEscuro ? "conteudoApresentacao" : "conteudoApresentacaoWhite"}>
                      <h2>🔗 <span>Outras Formas de Contato </span> </h2>
                    </div>
                    <ul>
                      <li className='whastsappIcon'><img src={Whatsapp} alt="zap" /> <a href="https://wa.me/5511916658824" target="_blank">
                        <p>Whastsapp</p>
                        <span> Para Contato Profissional</span>
                      </a>
                      </li>

                      <li className='linkedinIcon'><img src={Linkedin} alt="zap" /> <a href="https://www.linkedin.com/in/rafaaelmoraes/" target="_blank">
                        <p>linkedin</p>
                        <span>para Conexoes Profissionais</span>
                      </a>
                      </li>

                      <li className='gitHubIcon'><img src={Github} alt="zap" /> <a href="https://github.com/Dev-Rafaael" target="_blank">
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
