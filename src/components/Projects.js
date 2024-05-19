import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import bootcamp from "../assets/img/bootcamp.png"
import java_poo from "../assets/img/java_poo.png";
import react_iniciantes from "../assets/img/react_iniciantes.png";
import micros from "../assets/img/micros.png";
import seguranca_informacao from "../assets/img/seguranca_informacao.png";
import semana_academica from "../assets/img/sem_academica.png";
import clutch from "../assets/img/4clutch_api.png";
import qrmail from "../assets/img/qrmail.png";
import radiator from "../assets/img/radiator.png";
import arabic_roman from "../assets/img/arabic_roman.png";
import beverage from "../assets/img/beverage.png";
import portfolio from "../assets/img/portfolio.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "4Clutch-API",
      description: "API para site de skins de CS2 utilizando Spring Boot",
      imgUrl: clutch,
      projectLink: "https://github.com/chruscinskiDiego/4Clutch-API",
    },
    {
      title: "QR-Mail",
      description: "Geração de QR Code versátil em Java",
      imgUrl: qrmail,
      projectLink: "https://github.com/chruscinskiDiego/QR-Mail",
    },
    {
      title: "Radiator Store",
      description: "Simulador de E-commerce com HTML, CSS e JS",
      imgUrl: radiator,
      projectLink: "https://github.com/chruscinskiDiego/UTFPR-radiator-store",
    },
    {
      title: "Arabic to Roman Converter",
      description: "Conversor Bidirecional entre números arábicos e romanos, em Java",
      imgUrl: arabic_roman,
      projectLink: "https://github.com/chruscinskiDiego/Arabic_Roman_Converter",
    },
    {
      title: "Beverage Distributor",
      description: "Simulador de um sistema desktop para distribuidoras de bebidas, em Java",
      imgUrl: beverage,
      projectLink: "https://github.com/chruscinskiDiego/UTFPR-beverage-distributor-desktop-project",
    },
    {
      title: "Este projeto",
      description: "Portfólio de um excelente profissional, desenvolvido com React xD",
      imgUrl: portfolio,

    },
  ];

  const certifications = [
    {
      title:"(Em andamento) Bootcamp Santander 2024 - Backend com Java",
      description: "Santander - DIO | 87 Horas",
      imgUrl: bootcamp,
    },
    {
      title: "Java Completo: Programação Orientada a Objetos + Projetos",
      description: "Nélio Alves - Udemy | 54,5 Horas",
      imgUrl: java_poo,
    },
    {
      title: "React para Iniciantes",
      description: "Linx Academy | 8 Horas",
      imgUrl: react_iniciantes,
    },
    {
      title: "Microserviços Java com Spring Boot e Spring Cloud",
      description: "Nélio Alves - Udemy | 8,5 Horas",
      imgUrl: micros,
    },
    {
      title: "Segurança da Informação",
      description: "Linx Academy | 30 Minutos",
      imgUrl: seguranca_informacao,
    },
    {
      title: "Semana Acadêmica da Eng. da Computação e ADS",
      description: "UTFPR - PB | 16 Horas",
      imgUrl: semana_academica,
    }
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Experiência</h2>
                <p>Abaixo estão alguns dos trabalhos que já realizei, como também cursos e aprendizados</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projetos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certificações</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Currículo</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <Row><a className="text-center seeMore" href="https://github.com/chruscinskiDiego?tab=repositories" target="_blank">Ver mais</a></Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          certifications.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row><a href="https://docs.google.com/document/d/1dobauz380eVtkAD7odUPMY4UHlty6jeb9yfVHBT5qRg/edit?usp=sharing" target="_blank" className="text-center seeMore">Clique aqui para acessar</a></Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}