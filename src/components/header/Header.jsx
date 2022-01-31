import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <span className={style.conHeader}>
        <a href="http://www.atom.gov.ua/ua/">
          <img
            className={style.header}
            src="http://www.atom.gov.ua/bundles/site/img/logo-atom.svg"
            alt=""
          ></img>
        </a>
      </span>
    </div>
  );
};

export default Header;
