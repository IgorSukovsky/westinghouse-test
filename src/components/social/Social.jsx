import React from "react";
import { AiFillYoutube, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import style from "./Social.module.css";
const Social = () => {
  return (
    <div>
      <ul className={style.title}>
        <li>
          <a
            className={style.flexCenter}
            href="https://www.youtube.com/user/Energoatom2014"
            target=""
          >
            <AiFillYoutube />
          </a>
        </li>
        <li>
          <a
            className={style.flexCenter}
            href="https://t.me/energoatomNEWS"
            target=""
          >
            <BsTelegram />
          </a>
        </li>
        <li>
          <a
            className={style.flexCenter}
            href="https://www.facebook.com/atom.gov.ua"
            target=""
          >
            <AiFillFacebook />
          </a>
        </li>
        <li>
          <a
            className={style.flexCenter}
            href="https://www.instagram.com/nuclear_ua/"
            target=""
          >
            <AiFillInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
