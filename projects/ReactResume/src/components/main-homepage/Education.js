import React from "react";
import { useTranslation } from "react-i18next";

function Education({ education, timeframe }) {
  const { t } = useTranslation();
  return (
    <div className="education__experience py-1">
      <div className="education__experience--big-child">
        <h3>{t("education")}</h3>
      </div>
      <div className="education__experience-small-child">
        <h3>{t("timeframe")}</h3>
      </div>
    </div>
  );
}

export default Education;
