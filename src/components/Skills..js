import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import java from "../assets/img/java.svg";
import spring from "../assets/img/spring.svg";
import sql from "../assets/img/sql.svg";
import react from "../assets/img/react.svg";
import html_css from "../assets/img/html_css.svg";
import api from "../assets/img/api.svg";
import node from "../assets/img/node.svg";
import git from "../assets/img/git.svg";
import scrum from "../assets/img/scrum.svg";
import kanban from "../assets/img/kanban.svg";
import mongo from "../assets/img/mongo.svg";
import c from "../assets/img/c.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                        <p>Conhecimentos adquiridos através de estudos pessoais e profissionais:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={java} alt="" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={spring} alt="" />
                                <h5>Spring Boot</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="" />
                                <h5>Node.JS</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={html_css} alt="" />
                                <h5>HTML e CSS</h5>
                            </div>
                            <div className="item">
                                <img src={api} alt="" />
                                <h5>Restful API</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="" />
                                <h5>GIT</h5>
                            </div>
                            <div className="item">
                                <img src={mongo} alt="" />
                                <h5>Mongo DB</h5>
                            </div>
                            <div className="item">
                                <img src={c} alt="" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={scrum} alt="" />
                                <h5>Scrum</h5>
                            </div>
                            <div className="item">
                                <img src={kanban} alt="" />
                                <h5>Kanban</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}