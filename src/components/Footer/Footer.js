import React, { Component } from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.Footer}>
        {/* <div className={styles.Copyright}>
         <p>.</p>
          
        </div> */}
        <div className={styles.Favicon}>
          <NavLink to="/contact">
            <i className ="far fa-envelope"></i>
          </NavLink>
          <NavLink to="/contact">
          <i className="fas fa-map-marker-alt"></i>
          </NavLink>
        </div>
        <div className={styles.Copyright1}>
        <h6>Copyright © 2021 Alle Rechte vorbehalten</h6>
        </div>
      </div>
    );
  }
}

export default Footer;
