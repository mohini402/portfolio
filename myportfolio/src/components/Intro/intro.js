import React from "react";
import CustomCard from "./card";
import "./intro.css";

const Intro = () => {
  return (
    <section id="intro" className="animation">
      <CustomCard />
      <div className="introContent">
        <h1 className="hello">Hello</h1>
        <h3 className="introText">Here's who I am & what I do</h3>
        <p className="introPara">
          I have a passion for technology and a drive to learn, I am eager to
          embark on a career as a full-stack developer where I can apply my
          knowledge to create dynamic web applications and gain hands-on
          experience across both front-end and back-end technologies.
        </p>
      </div>
    </section>
  );
};

export default Intro;
