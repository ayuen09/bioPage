import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import "./styles.scss";

function HeroSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container" >
        <img class="center"centered={true} src="https://media-exp1.licdn.com/dms/image/C4E03AQGsAiF5_LJk4A/profile-displayphoto-shrink_200_200/0?e=1576713600&v=beta&t=tTTJ4FGNFF3gLrC1OAzN8HvOppVcLkkeVjKq5rFm8Io" alt="profilePic"/>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={1}
        />
        <div className="brand-icon">
          <a href="https://github.com/ayuen09" class="fab fa-github fa-3x"></a>
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
