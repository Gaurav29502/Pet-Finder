import "./donations.css";
import { useState } from "react";
import logo from "../../Assets/logo.png";
import TextScroller from "./TextScroller";
import upi from '../../Assets/upi.jpeg'
import ty from '../../Assets/ty.gif'
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'
import { IconContext } from "react-icons";

export const Donations = (props) => {

    const [product, setProduct] = useState('')
    const [quantity, setQuantity] = useState('')
    const [centerDivDonations, setCenterDivDonations] = useState('centerDivDonations')
    const [tyPage, setTyPage] = useState('invisible')

    const handleClick = (e) => {
        console.log(quantity)
        console.log(product)
        axios.get(`https://ap-south-1.aws.data.mongodb-api.com/app/cfg2022-zkswz/endpoint/addproduct?ID="62deee8151f778802aeda822"&product=${product}&quantity=${quantity}`)

        setCenterDivDonations('invisible')
        setTyPage('tyPage')
        setTimeout(function () { window.location = window.location; }, 5000);
    }


    return (
        <div className="donations">
            <nav className="navbarHome">
                <div className="topLogo">
                    <img className="phLogoNav" src={logo}></img>
                </div>
                <div className="menu">
                    <a className="menuItem" href="/">
                        HOME
                    </a>
                    <a className="menuItem" href="#">
                        TRACK
                    </a>
                    <a className="menuItem" href="/donations">
                        DONATIONS
                    </a>
                    <a className="menuItem" href="#">
                        VETS
                    </a>
                    <a className="menuItem" href="/petcare">
                        PETCARE
                    </a>
                    <a className="menuItem" href="/Comments">
                        COMMUNITY
                    </a>
                </div>
            </nav>
            <div className="donationsDiv">
                <div className="scrollingDiv">
                    <TextScroller text="Give for a better life today. Your donation helps us make effective and sustainable change in how animals are cared for in shelters, zoos, sanctuaries, and healthcare organizations." />

                </div>
                <div className="centerDivWrapper">
                    <div className={centerDivDonations}>
                        <div className="donationsLeft">
                            <div className="leftWrapper">
                                <div className="productCategory">
                                    <div className="labelDiv">
                                        <label>Product Category</label>
                                    </div>
                                    <input list="categories" className="category" id="productCategory" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please select a category" onChange={(e) => {
                                        setProduct(e.target.value);
                                    }} required />
                                    <datalist id="categories">
                                        <option value="oil diffusers" />
                                        <option value="books" />
                                        <option value="yoga mats" />
                                        <option value="Candles" />
                                    </datalist>
                                </div>
                                <div className="productName">
                                    <div className="labelDiv">
                                        <label>Product Name</label>
                                    </div>
                                    <input className="name" placeholder="Please enter the product name"></input>
                                </div>
                                <div className="productQuantity">
                                    <div className="labelDiv">
                                        <label>Quantity</label>
                                    </div>
                                    <input value={quantity} onChange={(e) => {setQuantity(e.target.value);}} className="name" placeholder="Please enter the product quantity"></input>
                                </div>
                                <div className="donateButtonDiv">
                                    <button onClick={handleClick} className="donateButton">Donate Now!</button>
                                </div>
                            </div>
                        </div>
                        <div className="donationsRight">
                            <div className="upiHeader">
                                <h1 className="upiHeaderText">Or Donate Via UPI</h1>
                            </div>
                            <div className="upiCode">
                                <img className="qrCode" src={upi}></img>
                            </div>
                        </div>
                    </div>
                    <div className={tyPage}>
                        <div className="tyLeft">
                            <img src={ty}></img>
                        </div>
                        <div className="tyRight">
                        </div>
                    </div>
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