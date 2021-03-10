import React, { Component } from "react";
import profilepicture from "../../img/romero.png";

class ProfilePicture extends Component {
  render() {
    return (
      <div className="profilePicture">
        <div>
          <img src={profilepicture} alt="profilepicture" />
        </div>
        <div>
          <h1>Romero Lijkwan</h1>
          <p>09-12-1982</p>
        </div>
      </div>
    );
  }
}

export default ProfilePicture;
