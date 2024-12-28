import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cow from "../../Assets/Projects/cow.jpeg";
import projects from "../../Assets/Projects/react.jpeg";

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
              imgPath={cow}
              isBlog={false}
              title="Chatify"
              description="A website for cow protection,conservation and donation for a bigger cause. "
              ghLink="https://github.com/Anuragrathi0001/bayava-kamdhenu"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projects}
              isBlog={false}
              title="React projects"
              description="it contains react projects."
              ghLink="https://github.com/Anuragrathi0001/react-source-"
              demoLink="#"
            />
          </Col> 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
