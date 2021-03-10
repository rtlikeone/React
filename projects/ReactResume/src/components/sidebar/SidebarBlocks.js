import React from "react";
import { useTranslation } from "react-i18next";

function SidebarBlocks() {
  const { t } = useTranslation();

  return (
    <div className="sidebarBlocks">
      <div className="sidebarBlocks__block">
        <h4>Contact</h4>
        <div className="sidebarBlocks__block__content">
          <p>
            -{" "}
            <a href="mailto:romerolijkwan@gmail.com">romerolijkwan@gmail.com</a>
          </p>
          <p>
            - <a href="tel:+31613497113">+31 613 49 7113</a>
          </p>
        </div>
      </div>

      <div className="sidebarBlocks__block">
        <h4>Profiles</h4>
        <div className="sidebarBlocks__block__content">
          <p className="github">
            -{" "}
            <a
              href="https://github.com/romson"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <span>Github.com</span>
            </a>
          </p>
          <p className="salesforce">
            -{" "}
            <a
              href="https://trailblazer.me/id/romson"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <span>Salesforce.com</span>
            </a>
          </p>
          <p className="linkedin">
            -{" "}
            <a
              href="https://linkedin.com/in/romerolijkwan"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <span>LinkedIn.com</span>
            </a>
          </p>
        </div>
      </div>

      <div className="sidebarBlocks__block">
        <h4>{t("languages.heading")}</h4>
        <div className="sidebarBlocks__block__content">
          <p>- {t("languages.dutch")}</p>
          <p>- {t("languages.english")}</p>
        </div>
      </div>

      <div className="sidebarBlocks__block">
        <h4>{t("proudOf.heading")}</h4>
        <div className="sidebarBlocks__block__content">
          <p>{t("proudOf.content")}</p>
          <p className="aoa-autoverzekeringen">
            <span>AOA autoverzekeringen</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SidebarBlocks;
