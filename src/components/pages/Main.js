import "../../styles/main.css";
import React from "react";

import Icons from "../pageutils/Icons";
import Asterisk from "../floatingicons/Asterisk";
import CaretDown from "../floatingicons/CaretDown";
import Circle from "../floatingicons/Circle";
import Curve from "../floatingicons/Curve";
import Line from "../floatingicons/Line";
import SemiCircle from "../floatingicons/SemiCircle";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      layers: [],
      height: 0,
      width: 0,
    };
  }

  parallax = (e) => {
    this.state.layers.forEach((layer) => {
      const speed = layer.getAttribute("data-speed");
      const rotate = layer.getAttribute("data-rotate");
      let x = (this.state.width - speed * e.pageX) / 100;
      //if (x < 0) x = -x;
      let y = (this.state.height - speed * e.pageY) / 100;
      //if (y < 0) y = -y;
      layer.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${rotate}deg)`;
    });
  };

  setLayers = () => {
    const newLayers = document.querySelectorAll(".layer");
    this.setState({
      layers: newLayers,
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  componentDidMount() {
    this.setLayers();
    window.addEventListener("mouseover", (e) => this.parallax(e));
    window.addEventListener("mousemove", (e) => this.parallax(e));
  }

  render() {
    return (
      <div className="main-container">
        <div className="grid">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="floating-icons">
          <Asterisk speed={-10} rowStart={6} rowEnd={7} color="#7140e8" />
          <Asterisk
            speed={-10}
            colStart={22}
            colEnd={23}
            rowStart={20}
            rowEnd={21}
            color="#069560"
          />
          <Circle
            speed={-15}
            rowStart={6}
            rowEnd={7}
            colStart={21}
            colEnd={22}
            color="orange"
          />
          <Curve
            speed={12}
            rowStart={22}
            rowEnd={23}
            colStart={16}
            colEnd={17}
            color="#0270d4"
          />
          <Line
            speed={-14}
            colStart={6}
            colEnd={7}
            color="#069560"
            rotate={-60}
          />
          <Line
            speed={14}
            rowStart={24}
            rowEnd={25}
            colStart={4}
            colEnd={5}
            color="yellow"
            rotate={-60}
          />
          <CaretDown
            speed={13}
            rowStart={7}
            rowEnd={8}
            colStart={8}
            colEnd={9}
            color="#656563"
          />
          <CaretDown
            speed={-10}
            rowStart={10}
            rowEnd={11}
            colStart={17}
            colEnd={18}
            rotate={-180}
            color="red"
          />
          <SemiCircle
            speed={-12}
            colStart={21}
            colEnd={22}
            rotate={-90}
            color="teal"
          />
          <SemiCircle
            speed={15}
            colStart={2}
            colEnd={3}
            rowStart={19}
            rowEnd={20}
            color="red"
            rotate={-225}
          />
        </div>
        <div className="main-subcontainer">
          <div className="main-text-container">
            <p className="main-title">Hi, I'm Mayank</p>
            <p className="main-subtitle">
              Currently pursuing Bachelor's degree in Computer Science and
              Engineering at{" "}
              <a href="https://vnit.ac.in/">
                Visveswaraya National Institute of Technology
              </a>{" "}
              .
            </p>
            <p className="main-activity">
              I like to code, make web-apps, take photos, play badminton and
              watch anime.
            </p>
          </div>
        </div>
        <div className="footer">
          <Icons
            iconContainer="main-icon-container"
            iconLink="main-icon-link"
            iconPath="main-path"
          />
        </div>
      </div>
    );
  }
}

export default Main;
