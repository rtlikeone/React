import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavLinks from "../components/navigation/NavLinks.js";
import ProfilePicture from "../components/sidebar/ProfilePicture.js";
import SidebarBlocks from "../components/sidebar/SidebarBlocks.js";
import { Banner } from "../components/sidebar/Banner";
// import Adsense from "../components/sidebar/Adsense";
// import ProfileContent from "../components/ProfileContent.js";
// import AdSense from "react-adsense";
// import { SkillsData } from "../data/skillsData.js";
// import ListSkills from "../components/ListSkills.js";
// import WorkExperience from "../components/WorkExperience.js";
// import ListEducation from "../components/ListEducation.js";
import { Homepage } from "../pages/Homepage";
import { Projects } from "../pages/ProjectsPage";

class Wrapper extends Component {
  render() {
    return (
      <section className="wrapper">
        <div className="wrapper__sidebar">
          <ProfilePicture />
          <SidebarBlocks />
          <Banner />
          {/* <div className="Adsense"> */}
          {/* <Adsense /> */}
          {/* <AdSense.Google
              client="ca-pub-6342867299408951"
              slot="1127934281"
              style={{ width: 320, height: 600 }}
              format=""
            /> */}
          {/* </div> */}
        </div>

        <div className="wrapper__main">
          <NavLinks />
          <div className="wrapper__main__content">
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </div>
        </div>
      </section>
    );
  }
}

export default Wrapper;
