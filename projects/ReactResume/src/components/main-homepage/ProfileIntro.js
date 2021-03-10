import React from "react";
import { useTranslation } from "react-i18next";
import { PageHeading } from "../Heading/PageHeading";

function ProfileIntro() {
  const { t } = useTranslation();

  return (
    <div className="profile">
      <PageHeading
        heading={t("profile.heading")}
        content={t("profile.content")}
      />
    </div>
  );
}

export default ProfileIntro;
