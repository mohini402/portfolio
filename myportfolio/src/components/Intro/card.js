import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Image } from "react-bootstrap";
import bg from "./mohini.jpg";
import linkedin from "./linkedin.png";
import instagram from "./instagram.png";
import facebook from "./facebook.png";

const CustomCard = () => {
  return (
    <Container>
      <div className="forMedia">
        <Card className="cardclass">
          <Card.Body>
            <Image src={bg} className="myImage" />
            <Card.Title className="cardTitle">Mohini Agarwal</Card.Title>

            <Card.Text className="cardText">Follow Me</Card.Text>
            <a href="https://www.linkedin.com/in/mohini-agarwal148/">
              <button className="btn linkedinbtn">
                <img src={linkedin} alt="linkedin" className="btnImg"></img>
              </button>
            </a>

            <a href="https://www.facebook.com/mohini.agarwal.7146?mibextid=ZbWKwL">
              <button className="btn facebtn">
                <img src={facebook} alt="instagram" className="btnImg"></img>
              </button>
            </a>

            <a href="https://www.instagram.com/mohiniagarwall/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3F__coig_login%3D1">
              <button className="btn instabtn">
                <img src={instagram} alt="instagram" className="btnImg"></img>
              </button>
            </a>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default CustomCard;
