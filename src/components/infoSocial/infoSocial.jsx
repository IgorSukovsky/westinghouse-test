import React from "react";
import style from "./infoSocial.module.css";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaTelegramPlane, FaBlog } from "react-icons/fa";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const infoSocial = () => {
  return (
    <div>
      <div>
        <h2 className={style.title}>ДП «НАЕК «Енергоатом»</h2>
        <ul className={style.socialTitle}>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://www.facebook.com/energoatomjunior"
              title="Share on Facebook"
            >
              <BsFacebook />
              <span className={style.text}>Facebook</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://www.facebook.com/atom.gov.ua"
              title="Share on Facebook"
            >
              <BsFacebook />
              <span className={style.text}>Facebook kids</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://t.me/energoatomNEWS "
              title="Share on FaTelegramPlane"
            >
              <FaTelegramPlane />
              <span className={style.text}>energoatom NEWS</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://instagram.com/nuclear_ua/ "
              title="Share on nuclear_ua"
            >
              <AiOutlineInstagram />
              <span className={style.text}>nuclear_ua</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://www.youtube.com/Energoatom2014 "
              title="Share Energoatom2014"
            >
              <AiFillYoutube />
              <span className={style.text}>Energoatom2014</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://twitter.com/energoatom_ua "
              title="Share energoatom_ua"
            >
              <AiFillTwitterCircle />
              <span className={style.text}>energoatom_ua</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className={style.title}>Онлайн школа НАЕК «Енергоатом»</h2>
        <ul className={style.socialTitle}>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://facebook.com/groups/energoatom.school"
              title="Share on Facebook"
            >
              <BsFacebook />
              <span className={style.text}>Facebook (група)</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://www.facebook.com/energoatom.school/"
              title="Share on Facebook"
            >
              <BsFacebook />
              <span className={style.text}>Facebook (сторінка)</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://t.me/schoolenergoatom "
              title="Share on FaTelegramPlane"
            >
              <FaTelegramPlane />
              <span className={style.text}>Telegram (канал) </span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://t.me/energoatomss2018 "
              title="Share on FaTelegramPlane"
            >
              <FaTelegramPlane />
              <span className={style.text}>Telegram (чат): </span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://www.instagram.com/energoatom.school/"
              title="Share Energoatom2014"
            >
              <BsInstagram />
              <span className={style.text}>Instagram</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className={style.title}>ВП «Запорізька АЕС»</h2>
        <ul className={style.socialTitle}>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://www.facebook.com/zapnpp"
              title="Share on Facebook"
            >
              <BsFacebook />
              <span className={style.text}>Facebook</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://t.me/zapnppofficial"
              title="Share on Facebook"
            >
              <FaTelegramPlane />
              <span className={style.text}>Telegram</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://www.instagram.com/znpp.atom/ "
              title="Share on FaTelegramPlane"
            >
              <BsInstagram />
              <span className={style.text}>Instagram </span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://www.youtube.com/user/atomzaes"
              title="Share on FaTelegramPlane"
            >
              <AiFillYoutube />
              <span className={style.text}>youtube</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="http://zapnpp.blogspot.com/"
              title=""
            >
              <FaBlog />
              <span className={style.text}>Blogspot</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className={style.title}>ВП «Южно-Українська АЕС»</h2>
        <ul className={style.socialTitle}>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://www.facebook.com/atomsunpp"
              title="Share on Facebook"
            >
              <BsFacebook />
              <span className={style.text}>Facebook</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://www.facebook.com/sunenergykids"
              title="Share on Facebook"
            >
              <BsFacebook />
              <span className={style.text}>Facebook kids</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://t.me/my_sunpp"
              title="Share on FaTelegramPlane"
            >
              <BsInstagram />
              <span className={style.text}>Instagram </span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://www.youtube.com/user/atomzaes"
              title="Share on FaTelegramPlane"
            >
              <FaTelegramPlane />
              <span className={style.text}>Telegram</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://www.youtube.com/user/sunpptv"
              title=""
            >
              <AiFillYoutube />
              <span className={style.text}>Youtube</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className={style.title}>ВП «Рівненська АЕС</h2>
        <ul className={style.socialTitle}>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://www.facebook.com/rnppofficial"
              title="Share on Facebook"
            >
              <BsFacebook />
              <span className={style.text}>Facebook</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://www.facebook.com/gazetarnpp"
              title="Share on Facebook"
            >
              <BsFacebook />
              <span className={style.text}>Facebook (газета)</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://t.me/rnppofficial"
              title="Share on FaTelegramPlane"
            >
              <FaTelegramPlane />
              <span className={style.text}>Telegram</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://www.instagram.com/rnppofficial/"
              title="Share on FaTelegramPlane"
            >
              <BsInstagram />
              <span className={style.text}>Instagram</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://www.youtube.com/channel/UCRrM8pysKmTiDqlfTPMzyCg/"
              title=""
            >
              <AiFillYoutube />
              <span className={style.text}>Youtube</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://twitter.com/rnppofficial"
              title=""
            >
              <AiFillTwitterCircle />
              <span className={style.text}>Twitter</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className={style.title}>ВП «Хмельницька АЕС»</h2>
        <ul className={style.socialTitle}>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://www.facebook.com/khnpp/"
              title="Share on Facebook"
            >
              <BsFacebook />
              <span className={style.text}>Facebook</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://www.facebook.com/perspektorgua"
              title="Share on Facebook"
            >
              <BsFacebook />
              <span className={style.text}>Facebook (газета)</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://t.me/khnpp"
              title="Share on FaTelegramPlane"
            >
              <FaTelegramPlane />
              <span className={style.text}>Telegram</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://www.instagram.com/khmelnytska_aec/"
              title="Share on FaTelegramPlane"
            >
              <BsInstagram />
              <span className={style.text}>Instagram</span>
            </a>
          </li>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://www.youtube.com/XAECTV"
              title=""
            >
              <AiFillYoutube />
              <span className={style.text}>Youtube</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className={style.title}>
          Атомпрофспілки, до складу яких входять працівники АЕС:
        </h2>
        <ul className={style.socialTitle}>
          <h3>Організація молоді ППО Дирекції ДП «НАЕК «Енергоатом»: </h3>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href="https://www.facebook.com/khnpp/"
              title="Share on Facebook"
            >
              <BsFacebook />

              <span className={style.text}>Facebook</span>
            </a>
          </li>
          <h3>Організація молоді ППО ВП ЗАЕС: </h3>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href=" https://www.facebook.com/omznpp/"
              title="Share on Facebook"
            >
              <BsFacebook />

              <span className={style.text}>Facebook</span>
            </a>
          </li>
          <h3>Організація молоді ВП ЮУАЕС: </h3>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href=" https://www.facebook.com/omsunpp/"
              title="Share on Facebook"
            >
              <BsFacebook />

              <span className={style.text}>Facebook</span>
            </a>
          </li>
          <h3>Організація молоді ППО ВП РАЕС: </h3>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href=" https://www.facebook.com/omrnpp"
              title="Share on Facebook"
            >
              <BsFacebook />

              <span className={style.text}>Facebook</span>
            </a>
          </li>
          <h3>Організація молоді ППО ВП ХАЕС: </h3>
          <li className={style.titlePad}>
            <a
              className={style.socialInfo}
              href=" https://www.facebook.com/omkhnpp"
              title="Share on Facebook"
            >
              <BsFacebook />

              <span className={style.text}>Facebook</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default infoSocial;
