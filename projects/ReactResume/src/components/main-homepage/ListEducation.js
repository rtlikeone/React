import React from "react";
import { useTranslation } from "react-i18next";
// import { educationData } from "../../data/educationData";
// import Education from "./Education.js";

function ListEducation() {
  const { t } = useTranslation();
  return (
    <div className="education py-1">
      <h2>{t("education.heading")}</h2>
      <hr />

      {/* {educationData.map(({ education, timeframe, id }) => (
        <Education key={id} education={education} timeframe={timeframe} />
      ))} */}

      <div className="work__experience py-1">
        <div className="work__experience--big-child">
          <h3>{t("education.educationData.0.education")}</h3>
        </div>
        <div className="work__experience--small-child">
          <h3>{t("education.educationData.0.timeframe")}</h3>
        </div>
      </div>

      <div className="work__experience py-1">
        <div className="work__experience--big-child">
          <h3>{t("education.educationData.1.education")}</h3>
        </div>
        <div className="work__experience--small-child">
          <h3>{t("education.educationData.1.timeframe")}</h3>
        </div>
      </div>

      <div className="work__experience py-1">
        <div className="work__experience--big-child">
          <h3>{t("education.educationData.2.education")}</h3>
        </div>
        <div className="work__experience--small-child">
          <h3>{t("education.educationData.2.timeframe")}</h3>
        </div>
      </div>

      <div className="work__experience py-1">
        <div className="work__experience--big-child">
          <h3>{t("education.educationData.3.education")}</h3>
        </div>
        <div className="work__experience--small-child">
          <h3>{t("education.educationData.3.timeframe")}</h3>
        </div>
      </div>
    </div>
  );
}

export default ListEducation;
