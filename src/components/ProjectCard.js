import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectLink }) => {

  if(projectLink){
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={projectLink} className="seeMore" target="_blank"><br/>Acessar</a>
        </div>
      </div>
    </Col>
  )}
  else{
    return(
      <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
    )
  }

}