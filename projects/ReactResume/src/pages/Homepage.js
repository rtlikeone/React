import React from "react";
import ProfileIntro from "../components/main-homepage/ProfileIntro";
import ListSkills from "../components/main-homepage/ListSkills";
import WorkExperience from "../components/main-homepage/WorkExperience";
import ListEducation from "../components/main-homepage/ListEducation";
// import NavLinks from "../components/navigation/NavLinks";

export const Homepage = (props) => (
  <React.Fragment>
    {/* {console.log("Home page: ", props)}
    {console.log("Home page: ", props.match.url)} */}
    {/* <NavLinks /> */}
    <ProfileIntro />
    <ListSkills />
    <WorkExperience />
    <ListEducation />
  </React.Fragment>
);
