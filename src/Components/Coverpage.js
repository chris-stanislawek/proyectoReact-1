import React from "react";
import "../assets/styles/Components/Coverpage.scss";
import cover from "../assets/styles/img/person.png";
import { Container } from "react-bootstrap";

const Coverpage = () => {
  return (
    <Container>
      <div className="cover">
        <div className="text">
          <p className="mainText">FIND A REMOTE</p>
          <p className="mainText">DEV JOB IN TOP</p>
          <p className="mainText">TECH STARTUPS</p>
          <p>
            We make it easy to apply to top tech companies and{" "}
            <strong>you will always get feedback </strong>for your applications
          </p>
          <div className="buttonCenter">
            <button href="#" className="coverButton">
              Find a Job!
            </button>
          </div>
        </div>

        <img className="cover__img" src={cover} />
      </div>
    </Container>
  );
};

export default Coverpage;
