import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anurag Rathi </span>
            from <span className="purple"> Muzaffarnagar ,India</span>
            <br />
            I am currently studying in G.L bajaj Greater noida .
            <br />
           I am completing by btech and completed my 12th from D.A.V public school mansurpur,muzaffarnagar.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Anurag Rathi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
