import React from "react";
import Section from "./../Section";
import { Link } from "./../../util/router.js";
import "./styles.scss";

function Footer(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="FooterComponent__container container">
        <div className="columns">
          <div className="column is-5 is-4-widescreen">
            <Link className="brand" to="/">
              <div className="brand-icon">
                <i class="fa fa-home fa-3x" aria-hidden="true"></i>
              </div>
            </Link>
            <Link className="brand" to="www.linkedin.com/in/annayuentufts">
              <div className="brand-icon">
                <i class="fa fa-linkedin" aria-hidden="true" href="www.linkedin.com/in/annayuentufts"></i>
              </div>
            </Link>
              {/* <a href="www.linkedin.com/in/annayuentufts" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a> */}
            {props.description && null}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Footer;
