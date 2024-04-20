import React from "react";
import CustomCard from "./card";
import "./intro.css";

const Intro = () => {
  return (
    <section id="intro" className="animation">
      <CustomCard />
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">Here's who I am & what I do</span>
        <p className="introPara">
         I am a passionate Web Developer
        </p>
      </div>
    </section>
  );
};

export default Intro;
