import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import stackoverflow from "../../Assets/Projects/stackoverflow.png"
import tictactoe from "../../Assets/Projects/tictactoe.png"
import blogger from "../../Assets/Projects/blogger.png"

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
              imgPath={stackoverflow}
              isBlog={false}
              title="Stackoverflow (clone)"
              description="Stackoverflow(clone) is a question and answer website for professional and enthusiast programmers. It features discussions on a wide range of topics in computer programming. A react based website along with firebase authentication with some basic features of original stackoverflow website"
              
              demoLink="https://codexchange.herokuapp.com/auth"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="TicTacToe"
              description="Made the famous two player game of tic-tac-toe web app using React components, Local Storage,
              Material UI. Used various other concepts like React hooks and others. Game history is also enlisted."
            
              demoLink="http://tictacgamebit.surge.sh/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogger}
              isBlog={false}
              title="Blogger's website"
              description=" A fullstack web application with tools to compose edit and save there blog posts. Some of the techs used were: NodeJs, EJS,MongoDB, Mongoose, HTML,CSS. My contribution were frontend part"
              ghLink=""
              demoLink="/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
