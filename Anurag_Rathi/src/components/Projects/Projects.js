import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import BAYAVA from "../../Assets/Projects/BAYAVA.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BAYAVA}
              isBlog={false}
              title="BAYAVA KAMDHENU"
              description="A socilized project in the field of the ayurvedic products made from the derived products of cow and nature."
              ghLink="https://github.com/Anuragrathi0001/bayava-kamdhenu"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BAYAVA-KAMDHENU"
              description="Server made from node js for the web application"
              ghLink="https://github.com/Anuragrathi0001/BAYAVA-server"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
