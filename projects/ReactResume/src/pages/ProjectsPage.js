import React from "react";
import ProjectsIntro from "../components/main-projects/ProjectsIntro";
import ListProjects from "../components/main-projects/ListProjects";
// import NavLinks from "../components/navigation/NavLinks";

export const Projects = (props) => {
  return (
    <React.Fragment>
      {/* {console.log("Projects page: ", props)} */}
      {/* <NavLinks /> */}
      <ProjectsIntro />
      <ListProjects />
    </React.Fragment>
  );
};
