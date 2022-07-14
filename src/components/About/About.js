import React from "react";
import { stackList } from "../../data/ProjectData";
import avatar from "/Users/idanz/portfolio-react/src/Assets/avataaars.png"
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={avatar}
            alt="man-svgrepo"
          />
          <div className="AboutBio">
          Hey! , my name is <strong> Idan Zehavi </strong>I'm a Fullstack developer as well as recruited to the IDF as a Devops developer for the inteligence department , Im highly passionate about programming  , Even as a young kid i've always taken interset in Computer Science , as you will see I've developed some impressive projects both for my CS/soft.Eng studies as well as projects for my personal Interest;
          </div>
          <div className="AboutBio tagline2">
            I have hands on expiriance using these technolegies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
