import React from "react";
import { Footer } from "react-materialize";
import './style.css'

function Foot() {
  return (
    <Footer
      className="Footer blue-grey darken-3"
      copyrights="© 2019 Team Slo-pez"
      links={
        <ul>
            <li>
                <h6>
                    Developed and maintained by:
                </h6>
            </li>
          <li>
            <a className="grey-text text-lighten-3 person" href="https://github.com/danalittleskier" target="_blank" rel="noopener noreferrer">
            <i class=" material-icons">person</i>
               Dana Alexandrescu
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3 person" href="https://github.com/gmocore" target="_blank" rel="noopener noreferrer">
            <i class=" material-icons">person</i>
            Gerritt Black
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3 person" href="https://github.com/tr3vbr0w" target="_blank" rel="noopener noreferrer">
            <i class=" material-icons">person</i>
              Trevor Brown
            </a>
          </li>
        </ul>
      }
      moreLinks={
        <a className="grey-text text-lighten-4 right gh" href="https://github.com/danalittleskier/ProjectThree" target="_blank" rel="noopener noreferrer">
          <i class=" material-icons">code</i>
          <i class=" material-icons">computer</i>
          <i class=" material-icons">insert_link</i>
          <br />
          See the code!
        </a>
      }
    >
      <h5 className="white-text">SKIIMATIK</h5>
      <p className="grey-text text-lighten-4">Thanks for Vistiting!</p>
    </Footer>
  );
}

export default Foot;
