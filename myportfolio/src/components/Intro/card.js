import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Image } from "react-bootstrap";
import bg from "./mohini.jpg";
//import { Link } from "react-scroll";
import linkedin from "./linkedin.png";
import instagram from "./instagram.png";
import facebook from "./facebook.png";

const CustomCard = () => {
  return (
    <Container>
      <div className="forMedia" style={{ marginLeft: "2rem" , position:'relative', left:'150px'}}>
        <Card className="cardclass"
          style={{
            width: "350px",
            height: "500px",
            margin: "6rem",
            border: "0.5px solid #ced4da",
            background: " linear-gradient(to bottom,#f7a570 90%, white 10%)",
            display: "flex",
            justifyContent: "center",
            boxShadow:'1px 1px 4px 1px #f7a570',
          }}
        >
          <Card.Body>
            <Image
              style={{
                width: "200px",
                height: "200px",
                margin: "2rem",
                borderRadius: "100px",
              }}
              src={bg}
              className="myImage"
            />
            <Card.Title
              style={{
                color: "black",
                textAlign: "center",
                fontSize: "25px",
                fontWeight: "bolder",
              }}
            >
              Mohini Agarwal
            </Card.Title>
            
            <Card.Text
              style={{
                textAlign: "center",
                margin: "3.5rem",
                fontSize: "25px",
              }}
            >
              Follow Me
            </Card.Text>
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
