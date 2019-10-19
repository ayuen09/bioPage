import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title="Projects"
          subtitle="Past and Current Projects"
          centered={true}
          size={3}
        />
        <div className="FeaturesSection__box box">
          <Features
            columns={2}
            items={[
              {
                title: "Transportation Accessibility Model - Ongoing",
                body:
                  "Examining how the robustness of public transportation relate with auto-dependencies in Boston and Vancouver",
                image: "https://freetoursbyfoot.com/wp-content/uploads/2016/01/Boston-Subway-Map-1011x1024.jpg"
              },
              {
                title: "Decision Tree Model for Determining Poisonous Mushrooms",
                body:
                  "Created a decision tree model to determine if a mushroom is poisonous or edible.",
                image: "data:image/jpeg;base64,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"
              },
              {
                title: "Urban Attitude Lab: TwitterBot",
                body:
                  "Help webscraped text and image from the web to help develop and tweek the TwitterBot Responses. https://twitter.com/ChesapeakeFreak",
                image:
                  "https://miro.medium.com/max/1200/1*8mpWApzQD5gZZlnYYUkbcA.png"
              },
              {
                title: "Unblack Edges",
                body:
                  "Eliminates black pixels on the edge from poorly scanned documents",
                image:
                  "https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/54/2016/04/06144347/bad-scan-text-cut-off.png"
              }
              
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
