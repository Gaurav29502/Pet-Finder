import "./community.css";
import React, { Component } from 'react';
import { useState,useEffect } from "react";

import logo from "../../Assets/logo.png";
import { Carousel } from "react-responsive-carousel";
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'
import { IconContext } from "react-icons";
import axios from "axios";

export const Community = (props) => {
    var [comment, setComment] = useState("");
    const [commentList, setCommentList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCommentList((arr) => [{ comment }, ...arr]);
        setComment("");
        axios.get(`https://ap-south-1.aws.data.mongodb-api.com/app/cfg2022-zkswz/endpoint/addcomment?comments=${comment}`)
      };

      useEffect(() => {
        axios.get(`https://ap-south-1.aws.data.mongodb-api.com/app/cfg2022-zkswz/endpoint/getcomment`)
        .then((res) => {
            const commentData = res.data[0];
            var commentsArr = commentData.comments
            console.log(commentsArr)
            setCommentList(commentsArr)
            
        })
      },[])

    return (
        <div className="mainCommunity">
            <nav className="navbarHome">
                <div className="topLogo">
                    <img className="phLogoNav" src={logo}></img>
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
                    <a className="menuItem" href="/petcare">
                        PETCARE
                    </a>
                    <a className="menuItem" href="/community">
                        COMMUNITY
                    </a>
                </div>
            </nav>
            <div className="commentSectionWrapperComputer">
                <div className="csHeaderComputer">
                    <h1 className="commentHeader">Write a comment</h1>
                </div>

                <form className="commentFormComputers"  onSubmit={handleSubmit}>
                    <div className="commentBoxContainer">
                        <input
                            type="text"
                            className="commentBox"
                            value={comment}
                            onChange={(e) => {
                                setComment(e.target.value);
                            }}
                            placeholder="Type Here..."
                        />
                        <button
                            type="submit"
                            className="commentButton"
                            disabled={comment === ""}
                        >
                            send
                        </button>
                    </div>
                </form>

                <div className="commentResults">
                    {commentList.map((e, key) => {
                        return (
                            <div className="commentCard">
                                <li className="commentsName">
                                    Anonymous
                                    <span className="dateTextComment">&nbsp;&nbsp;27/07/2022</span>
                                </li>
                                <li className="commentsText">{e.comment}</li>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="footerDiv">
                <footer className="footerTeams">
                    <IconContext.Provider value={{ size: "3em" }}>
                        <div className="shareiconsTeams">
                            <a className="socialIconsTeams" href="https://m.facebook.com/">
                                <FaFacebook className="facebook" />
                            </a>
                            <a className="socialIcons" href="https://www.instagram.com//">
                                <FaInstagram className="insta" />
                            </a>
                            <a className="socialIcons" href="https://twitter.com/">
                                <FaTwitter className="twitter" />
                            </a>
                            <a className="socialIcons" href="https://www.linkedin.com/company/iete-">
                                <FaLinkedin className="linkedin" />
                            </a>
                            <a className="socialIcons" href="mailto: @gmail.com">
                                <FaMailBulk />
                            </a>
                        </div>
                    </IconContext.Provider>
                    <p className="footerText">Paws Hunger© 2022 All rights reserved.</p>
                </footer>
            </div>
        </div>
    )

}