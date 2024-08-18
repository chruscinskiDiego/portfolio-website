import { Container, Row, Col } from "react-bootstrap";
import picture from "../assets/img/perfil_picture.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const AboutMe = () => {

  return (
    <section className="aboutMe" id="aboutMe">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={picture} alt="" />
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Carreira:</span>
                  
                  <ul class="timeline">
                  <li>
                    <span>Desenvolvedor de Software<h2 className="company">Linx</h2></span>
                      <span>2024 - o momento</span>
                    </li>
                    <li>
                    <span>Analista de Suporte PL na <h2 className="company">Linx Sponte</h2></span>
                      <span>2023 - 2024</span>
                    </li>
                    <li>
                      <span>Analista de Suporte JR na <h2 className="company">Hábil Software</h2></span>
                      <span>2022 - 2023</span>
                    </li>
                  </ul>

                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}