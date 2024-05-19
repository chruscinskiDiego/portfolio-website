import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon mt-3">
              <a href="https://www.linkedin.com/in/diego-chruscinski/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/chruscinskiDiego/" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/diegochruscinski/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. Todos os direitos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}