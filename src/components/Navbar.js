import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-light bg-dark ">
            <div className="container">
              <div className="navbar-header">
              <FontAwesomeIcon icon={faCodeBranch} size="2x" style={{color:"white", marginRight:"10"}}></FontAwesomeIcon>
                <h2 className="navbar-brand text-white text-lg brand-text ">
                  GIT Repo Fetcher
                </h2>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
