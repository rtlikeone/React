import React from "react";
import { useTranslation } from "react-i18next";
// import i18n from "../i18next";
// import { workData } from "../data/workData";
// import Work from "./Work";

function WorkExperience() {
  const { t } = useTranslation();

  return (
    <div className="work py-1">
      <h2>{t("listWork.heading")}</h2>
      <hr />

      {/* {workData.map(({ id, position, timeframe, bulletpoints }) => (
        <Work
          key={id}
          position={t("listWork.workData.7.position")}
          timeframe={timeframe}
          bulletpoints={bulletpoints.map((bulletpoint) => (
            <li key={bulletpoint}>{bulletpoint}</li>
          ))}
        />
      ))} */}

      <div className="work__experience py-1">
        <div className="work__experience--big-child">
          <h3>{t("listWork.workData.0.position")}</h3>
        </div>
        <div className="work__experience--small-child">
          <h3>{t("listWork.workData.0.timeframe")}</h3>
        </div>
      </div>
      <div className="work__experience--list-items">
        <ul>
          <li>{t("listWork.workData.0.bulletpoints.0")}</li>
          <li>{t("listWork.workData.0.bulletpoints.1")}</li>
          <li>{t("listWork.workData.0.bulletpoints.2")}</li>
        </ul>
      </div>

      <div className="work__experience py-1">
        <div className="work__experience--big-child">
          <h3>{t("listWork.workData.1.position")}</h3>
        </div>
        <div className="work__experience--small-child">
          <h3>{t("listWork.workData.1.timeframe")}</h3>
        </div>
      </div>
      <div className="work__experience--list-items">
        <ul>
          <li>{t("listWork.workData.1.bulletpoints.0")}</li>
          <li>{t("listWork.workData.1.bulletpoints.1")}</li>
        </ul>
      </div>

      <div className="work__experience py-1">
        <div className="work__experience--big-child">
          <h3>{t("listWork.workData.2.position")}</h3>
        </div>
        <div className="work__experience--small-child">
          <h3>{t("listWork.workData.2.timeframe")}</h3>
        </div>
      </div>
      <div className="work__experience--list-items">
        <ul>
          <li>{t("listWork.workData.2.bulletpoints.0")}</li>
          <li>{t("listWork.workData.2.bulletpoints.1")}</li>
        </ul>
      </div>

      <div className="work__experience py-1">
        <div className="work__experience--big-child">
          <h3>{t("listWork.workData.3.position")}</h3>
        </div>
        <div className="work__experience--small-child">
          <h3>{t("listWork.workData.3.timeframe")}</h3>
        </div>
      </div>
      <div className="work__experience--list-items">
        <ul>
          <li>{t("listWork.workData.3.bulletpoints.0")}</li>
          <li>{t("listWork.workData.3.bulletpoints.1")}</li>
        </ul>
      </div>

      <div className="work__experience py-1">
        <div className="work__experience--big-child">
          <h3>{t("listWork.workData.4.position")}</h3>
        </div>
        <div className="work__experience--small-child">
          <h3>{t("listWork.workData.4.timeframe")}</h3>
        </div>
      </div>
      <div className="work__experience--list-items">
        <ul>
          <li>{t("listWork.workData.4.bulletpoints.0")}</li>
          <li>{t("listWork.workData.4.bulletpoints.1")}</li>
          <li>{t("listWork.workData.4.bulletpoints.2")}</li>
        </ul>
      </div>

      <div className="work__experience py-1">
        <div className="work__experience--big-child">
          <h3>{t("listWork.workData.5.position")}</h3>
        </div>
        <div className="work__experience--small-child">
          <h3>{t("listWork.workData.5.timeframe")}</h3>
        </div>
      </div>
      <div className="work__experience--list-items">
        <ul>
          <li>{t("listWork.workData.5.bulletpoints.0")}</li>
          <li>{t("listWork.workData.5.bulletpoints.1")}</li>
          <li>{t("listWork.workData.5.bulletpoints.2")}</li>
          <li>{t("listWork.workData.5.bulletpoints.3")}</li>
        </ul>
      </div>

      <div className="work__experience py-1">
        <div className="work__experience--big-child">
          <h3>{t("listWork.workData.6.position")}</h3>
        </div>
        <div className="work__experience--small-child">
          <h3>{t("listWork.workData.6.timeframe")}</h3>
        </div>
      </div>
      <div className="work__experience--list-items">
        <ul>
          <li>{t("listWork.workData.6.bulletpoints.0")}</li>
          <li>{t("listWork.workData.6.bulletpoints.1")}</li>
          <li>{t("listWork.workData.6.bulletpoints.2")}</li>
        </ul>
      </div>

      <div className="work__experience py-1">
        <div className="work__experience--big-child">
          <h3>{t("listWork.workData.7.position")}</h3>
        </div>
        <div className="work__experience--small-child">
          <h3>{t("listWork.workData.7.timeframe")}</h3>
        </div>
      </div>
      <div className="work__experience--list-items">
        <ul>
          <li>{t("listWork.workData.7.bulletpoints.0")}</li>
          <li>{t("listWork.workData.7.bulletpoints.1")}</li>
        </ul>
      </div>

      <div className="work__experience py-1">
        <div className="work__experience--big-child">
          <h3>{t("listWork.workData.8.position")}</h3>
        </div>
        <div className="work__experience--small-child">
          <h3>{t("listWork.workData.8.timeframe")}</h3>
        </div>
      </div>
      <div className="work__experience--list-items">
        <ul>
          <li>{t("listWork.workData.8.bulletpoints.0")}</li>
          <li>{t("listWork.workData.8.bulletpoints.1")}</li>
          <li>{t("listWork.workData.8.bulletpoints.2")}</li>
        </ul>
      </div>

      <div className="work__experience py-1">
        <div className="work__experience--big-child">
          <h3>{t("listWork.workData.9.position")}</h3>
        </div>
        <div className="work__experience--small-child">
          <h3>{t("listWork.workData.9.timeframe")}</h3>
        </div>
      </div>
      <div className="work__experience--list-items">
        <ul>
          <li>{t("listWork.workData.9.bulletpoints.0")}</li>
          <li>{t("listWork.workData.9.bulletpoints.1")}</li>
          <li>{t("listWork.workData.9.bulletpoints.2")}</li>
          <li>{t("listWork.workData.9.bulletpoints.3")}</li>
        </ul>
      </div>
    </div>
  );
}

export default WorkExperience;
