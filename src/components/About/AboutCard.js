import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">APURV KIRTI </span>
            from <span className="purple"> Ranchi, Jharkhand, India.</span>
            <br />I am a student pursuing BTECH in ELECTRONICS AND COMMUNICATION in BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Trading (Foreign-Exchange Market)
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing chess
            </li>
            <li className="about-activity">
              <ImPointRight /> sketching/potrait making
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "सर्वं सम्भाव्यते त्वयि।
            you can do anything "{" "}
          </p>
          <footer className="blockquote-footer">Mahabharatha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
