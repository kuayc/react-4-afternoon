import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import History from "../History/History";
import Contact from "../Contact/Contact";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="subnav">
          <Link to="/about" className="subnav_links">
            <h3>About</h3>
          </Link>
          <Link to="/about/history" className="subnav_links">
            <h3>History</h3>
          </Link>
          <Link to="/about/contact" className="subnav_links">
            <h3>Contact</h3>
          </Link>
        </div>
        <div className="box">
          <Switch>
            <Route path="/about/history" component={History} />
            <Route path="/about/contact" component={Contact} />
            <Route
              path="/about"
              render={() => (
                <div>
                  <h1>About the University</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent varius lobortis blandit. Nulla sollicitudin ante
                    orci, nec placerat dolor hendrerit vel. Vivamus justo
                    ligula, egestas et mauris nec, posuere finibus orci. Quisque
                    nec velit purus. Nunc sit amet risus et purus rhoncus
                    aliquet ac at tellus. Fusce pretium elit ut odio lobortis
                    pharetra. Vivamus gravida lacus ut erat accumsan, nec
                    hendrerit tortor fringilla.
                  </p>
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
