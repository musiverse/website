import { useState } from "react";
import Wedding from "../assets/Wedding.jpg";
import surprise from "../assets/surprise.jpg";
import jagran from "../assets/jagran.jpg";
// import fests from "../assets/fests.jpg";
import College from "../assets/College.jpg";
import clubs from "../assets/clubs.jpg";
import cafes from "../assets/cafes.webp";
import birthday from "../assets/birthday.jpg";
import Restraunt from "../assets/Restraunt.jpg";

const Circles = () => {
  const [activeContent, setActiveContent] = useState("content1");

  const handleMouseOver = (id) => {
    setActiveContent(id);
  };

  return (
    <div className="container flex justify-center items-center">
      <div className="icon">
        <div
          className={`imgBx ${activeContent === "content1" && "active"}`}
          style={{ "--i": 1 }}
          onMouseOver={() => handleMouseOver("content1")}
          data-id="content1"
        >
          <img src={Wedding} alt="" />
        </div>
        <div
          className={`imgBx ${activeContent === "content2" && "active"}`}
          style={{ "--i": 2 }}
          onMouseOver={() => handleMouseOver("content2")}
          data-id="content2"
        >
          <img src={cafes} alt="" />
        </div>
        <div
          className={`imgBx ${activeContent === "content3" && "active"}`}
          style={{ "--i": 3 }}
          onMouseOver={() => handleMouseOver("content3")}
          data-id="content3"
        >
          <img src={clubs} alt="" />
        </div>
        <div
          className={`imgBx ${activeContent === "content4" && "active"}`}
          style={{ "--i": 4 }}
          onMouseOver={() => handleMouseOver("content4")}
          data-id="content4"
        >
          <img src={birthday} alt="" />
        </div>
        <div
          className={`imgBx ${activeContent === "content5" && "active"}`}
          style={{ "--i": 5 }}
          onMouseOver={() => handleMouseOver("content5")}
          data-id="content5"
        >
          <img src={Restraunt} alt="" />
        </div>
        <div
          className={`imgBx ${activeContent === "content6" && "active"}`}
          style={{ "--i": 6 }}
          onMouseOver={() => handleMouseOver("content6")}
          data-id="content6"
        >
          <img src={College} alt="" />
        </div>
        <div
          className={`imgBx ${activeContent === "content7" && "active"}`}
          style={{ "--i": 7 }}
          onMouseOver={() => handleMouseOver("content7")}
          data-id="content7"
        >
          <img src={jagran} alt="" />
        </div>
        <div
          className={`imgBx ${activeContent === "content8" && "active"}`}
          style={{ "--i": 8 }}
          onMouseOver={() => handleMouseOver("content8")}
          data-id="content8"
        >
          <img src={surprise} alt="" />
        </div>
      </div>
      <div className="content">
        <div
          className={`contentBx ${activeContent === "content1" && "active"}`}
          id="content1"
        >
          <div className="card">
            <div className="imgBx">
              <img src={Wedding} alt="" />
            </div>
            <div className="textBx">
              <h2>
                Wedding
                <br />
                <span>Functions</span>
              </h2>
              {/* <ul className="sci">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-telegram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        <div
          className={`contentBx ${activeContent === "content2" && "active"}`}
          id="content2"
        >
          <div className="card">
            <div className="imgBx">
              <img src={cafes} alt="" />
            </div>
            <div className="textBx">
              <h2>
                Cafes
                <br />
                <span>Stagesplash</span>
              </h2>
              {/* <ul className="sci">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-telegram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        <div
          className={`contentBx ${activeContent === "content3" && "active"}`}
          id="content3"
        >
          <div className="card">
            <div className="imgBx">
              <img src={clubs} alt="" />
            </div>
            <div className="textBx">
              <h2>
                Clubs
                <br />
                <span>Stagesplash</span>
              </h2>
              {/* <ul className="sci">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-telegram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        <div
          className={`contentBx ${activeContent === "content4" && "active"}`}
          id="content4"
        >
          <div className="card">
            <div className="imgBx">
              <img src={birthday} alt="" />
            </div>
            <div className="textBx">
              <h2>
                Birthdays
                <br />
                <span>Stagesplash</span>
              </h2>
              {/* <ul className="sci">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-telegram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        <div
          className={`contentBx ${activeContent === "content5" && "active"}`}
          id="content5"
        >
          <div className="card">
            <div className="imgBx">
              <img src={Restraunt} alt="" />
            </div>
            <div className="textBx">
              <h2>
                Restraunt & Bar
                <br />
                <span>Stagesplash</span>
              </h2>
              {/* <ul className="sci">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-telegram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        <div
          className={`contentBx ${activeContent === "content6" && "active"}`}
          id="content6"
        >
          <div className="card">
            <div className="imgBx">
              <img src={College} alt="" />
            </div>
            <div className="textBx">
              <h2>
                College & Schools
                <br />
                <span>Fests</span>
              </h2>
              {/* <ul className="sci">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-telegram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        <div
          className={`contentBx ${activeContent === "content7" && "active"}`}
          id="content7"
        >
          <div className="card">
            <div className="imgBx">
              <img src={jagran} alt="" />
            </div>
            <div className="textBx">
              <h2>
                Jagran
                <br />
                <span>Stagesplash</span>
              </h2>
              {/* <ul className="sci">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-telegram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        <div
          className={`contentBx ${activeContent === "content8" && "active"}`}
          id="content8"
        >
          <div className="card">
            <div className="imgBx">
              <img src={surprise} alt="" />
            </div>
            <div className="textBx">
              <h2>
                Surprise
                <br />
                <span>Stagesplash</span>
              </h2>
              {/* <ul className="sci">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-telegram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        <div
          className={`contentBx ${activeContent === "content9" && "active"}`}
          id="content9"
        >
          <div className="card">
            <div className="imgBx">
              <img src={jagran} alt="" />
            </div>
            <div className="textBx">
              <h2>
                Jagran
                <br />
                <span>Stagesplash</span>
              </h2>
              {/* <ul className="sci">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-telegram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        {/* Add similar code for other team members */}
      </div>
    </div>
  );
};

export default Circles;
