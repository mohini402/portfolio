import React from "react";
import "./project.css";
import bank from "./bank.png";
import vote from "./Voting-system.jpg";
import portfolio from "./about.png";
import whiteboard from "./whiteboard.png";

const Practice = () => {
  return (
    <div className="animation">
      <h1
        style={{
          marginTop: "8rem",
          paddingLeft: "1rem",
          textAlign: "center",
          fontSize: "30px",
          fontFamily:'sans-serif'
        }}
      >
        PROJECTS
      </h1>
      <section>
        <div id="project4div">
          <div className="paragraph">
            <h2 className="pName">Whiteboard</h2>
            <div className="paracontainer4">
              <p className="p4description">
                The purpose of a whiteboard is to visualize thoughts, concepts,
                write down ideas, explain and teach.We have some authentication
                check only those who are already registered in our system can
                enter into the whiteboard and if they are not then they need to
                sign up.{" "}
              </p>
              <p style={{ marginTop: "0.3rem" }}>
                Our whiteboard consists of many features like shapes, line,
                upload images from the web, pen, sticky notes, different color,
                undo and redo option, save document.
              </p>
            </div>
            <br />
            <div className="requirement4">
              <h4>Required knowledge of:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Mongo DB</li>
                <li>Express</li>
                <li>Node JS</li>
              </ul>
            </div>
            <img className="img4" src={whiteboard} alt="whiteboard"></img>
          </div>
        </div>

        <div id="project2div">
          <div className="paragraph">
            <h2 className="pName">Digi Vote</h2>
            <div className="paracontainer2">
              <p className="p2description">
                This project provides a Graphical User Interface where we can
                vote for our favorite candidate securely.
              </p>
            </div>
            <br />

            <div className="requirement2">
              <h4>Required knowledge of:</h4>
              <ul>
                <li>Java</li>
                <li>MYSQL Database</li>
                <li>Swing</li>
              </ul>
            </div>
          </div>
          <img src={vote} alt="vote" className="img2"></img>
        </div>

        <div id="project1div">
          <div className="paragraph">
            <h2 className="pName">Bank Management System</h2>
            <div className="paracontainer1">
              <p className="p1description">
                Used to establish a new account, change existing account
                information, see and manage transactions, verify the details of
                an existing account, delete an existing account, and browse a
                list of customers. A console program without graphics is a part
                of the bank management mini project in C Language.
              </p>
            </div>
            <br />

            <div className="requirement1">
              <h4>Required knowledge of:</h4>
              <ul>
                <li>File handling</li>
              </ul>
            </div>
          </div>
          <img src={bank} alt="bank" className="img"></img>
        </div>

        <div id="project3div">
          <div className="paragraph">
            <h2 className="pName">Portfolio</h2>
            <div className="paracontainer3">
              <p className="p3description">
                Portfolio is an essential tool for professionals looking to
                advance their careers. It serves as a visual representation of
                their skills, expertise, and achievements, helping them stand
                out in a competitive market.
              </p>
            </div>
            <br />
            <div className="requirement3">
              <h4>Required knowledge of:</h4>
              <ul>
                <li>CSS</li>
                <li>React</li>
                <li>Node JS</li>
              </ul>
            </div>
            <img className="img3" src={portfolio} alt="portfolio"></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Practice;
