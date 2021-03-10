// Heading for the projects page

import React from "react";
import { useTranslation } from "react-i18next";
import { PageHeading } from "../Heading/PageHeading";

function ProjectsIntro() {
  const { t } = useTranslation();

  return (
    <div className="projects">
      <PageHeading
        heading={t("projects.heading")}
        content={t("projects.content")}
      />
    </div>
  );
}

export default ProjectsIntro;
