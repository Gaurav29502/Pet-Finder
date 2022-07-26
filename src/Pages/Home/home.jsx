import "./home.css";
import { useState } from "react";
import logo from "../../Assets/logo.png";
import introvideo from "../../Assets/introvideo.mp4";
import { Carousel } from "react-responsive-carousel";
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'
import { IconContext } from "react-icons";
import KommunicateChat from '../../chat';




export const HomePage = (props) => {
  return (
    <div className="main">
      <nav className="navbarHome">
        <div className="topLogo">
          <h1 className="pawshunger">Paws Hunger</h1>
        </div>
        <div className="menu">
          <a className="menuItem" href="/">
            HOME
          </a>
          <a className="menuItem" href="/track">
            TRACK
          </a>
          <a className="menuItem" href="/donations">
            DONATIONS
          </a>
          <a className="menuItem" href="#">
            VETS
          </a>
          <a className="menuItem" href="#">
            PETCARE
          </a>
          <a className="menuItem" href="#">
            COMMUNITY
          </a>
        </div>
      </nav>
      <div className="introText">
        <div className="centerDivText">
          <div className="header">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img className="phLogo" src={logo} />
                </div>
                <div class="flip-card-back">
                  <h1>Paws Hunger</h1>
                  <p className="about">We are a youth-driven organization founded in July 2020. We started off as a platform for stray animal feeders across India, while also motivating others to start feeding strays in their neighborhood with incentives such as certificates. In just a few months, the Paws Hunger family grew to 500+ feeders across 10 cities in India. Realising our potential, we started collaborating with Rotaracts and other college clubs, giving webinars about stray animal welfare in India and also working with prominent NGOs such as Zomato Feeding India and Awaaz. We started holding monthly food drives to help out our stray animals. while also helping in all other aspects of stray animal welfare.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="scoms">
            <div className="scomsHeader">
              <h1 className="scomsHeaderText"> Header</h1>
            </div>
            <div className="carouselWrapper">
              <Carousel infiniteLoop useKeyboardArrows autoPlay interval="5000" showThumbs={false} showStatus={false} showIndicators={false} stopOnHover>
                <div>
                  <img className="scomPhotos" src={logo} />
                </div>
                <div>
                </div>

              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="introVideo">
        <div className="introVideoHeader">
          <h1 className="videoHeaderText">
            A glimpse of what we do as an organization.
          </h1>
        </div>
        <div className="centerDivVideo">
          <video autoPlay loop muted>
            <source src={introvideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="lastSection">
        <div className="centerDivLast">
          <div className="leftSide">
            <div className="sponsorContent">
              <h1 className="sponsorHeaderText">Insert Header Here</h1>
              <p className="sponsorText">
                Insert Text Here
              </p>
            </div>
          </div>
          <div className="rightSide">
            <div className="sponsorContainer">

            </div>
          </div>
        </div>
        <div className="footerDivHome">
          <footer className="footerHome">
            <IconContext.Provider value={{ size: "3em" }}>
              <div className="shareicons">
                <a className="socialIcons" href="#">
                  <FaFacebook className="facebook" />
                </a>
                <a className="socialIcons"  href="#">
                  <FaInstagram className="insta" />
                </a>
                <a className="socialIcons"  href="#">
                  <FaTwitter className="twitter" />
                </a>
                <a className="socialIcons" href="#">
                  <FaLinkedin className="linkedin" />
                </a>
                <a className="socialIcons"  href="#">
                  <FaMailBulk />
                </a>
              </div>
            </IconContext.Provider>
            <p className="footerText">Paws Hunger© 2022 All rights reserved.</p>
          </footer>
          <KommunicateChat/>
        </div>
      </div>

    </div>
  );
};


