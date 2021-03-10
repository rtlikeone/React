import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function NavLinks(props) {
  const { t, i18n } = useTranslation();

  const print = () => {
    window.print();
  };

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="wrapper__main__navLinks">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">{t("projects.heading")}</Link>
        </li>
        <li>
          <Link onClick={() => handleClick("nl")} to="#">
            <img src="img/nl.png" alt="NL flag" />
          </Link>
        </li>
        <li>
          <Link onClick={() => handleClick("en")} to="#">
            <img src="img/uk.png" alt="UK flag" />
          </Link>
        </li>
        <li>
          <Link onClick={print} to="#" className="pdf-download pdf"></Link>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
