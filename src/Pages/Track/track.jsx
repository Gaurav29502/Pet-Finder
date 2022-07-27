import "./track.css";
import { useState, useEffect } from "react";
import logo from "../../Assets/logo.png";
import dog from '../../Assets/dog.jpg';
import cat from '../../Assets/cat.jpg';
import doggy from '../../Assets/doggy.jfif';
import { useRef } from "react";
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'
import { IconContext } from "react-icons";
import axios from "axios";



export const Track = (props) => {
    const inputHandler = useRef(null);

    const [address, setAddress] = useState([]);
    var [addressArr, setAddressArr] = useState("")
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [profile, setProfile] = useState([])
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    const handleSubmit = (e) => {
        console.log(description)
        console.log(date)
        axios.get(`http://api.positionstack.com/v1/reverse?access_key=46d11b9e3e0e7bc6e04c0266bb8d4b8b&query=19.143591,72.824629`)
            .then((res) => {
                const resdata = res.data.data
                resdata.forEach((e) => {
                    const data = address;
                    data.push(` ${e.label}`)
                    var dataArr = data.slice(0,6)
                    console.log(dataArr)
                    setAddressArr(dataArr)
                    console.log(addressArr)
                })
            })
        axios.get(`https://ap-south-1.aws.data.mongodb-api.com/app/cfg2022-zkswz/endpoint/addprofile?description=${description}&date=${date}&location=${addressArr}`)
        
    }


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", setLatitude(position.coords.latitude));
            console.log("Longitude is :", setLongitude(position.coords.longitude));
            console.log(latitude)
        });
        axios.get(`https://ap-south-1.aws.data.mongodb-api.com/app/cfg2022-zkswz/endpoint/getprofile`)
            .then((pro) => {
                const profileData = pro.data[0]
                const profileArr = profileData.profiles
                setProfile(profileArr)
                console.log(profile)
            })

        axios.get(`http://api.positionstack.com/v1/reverse?access_key=46d11b9e3e0e7bc6e04c0266bb8d4b8b&query=19.143591,72.824629`)
            .then((res) => {
                const resdata = res.data.data
                resdata.forEach((e) => {
                    const data = address;
                    data.push(` ${e.label}`)
                    var dataArr = data.slice(0,6)
                    console.log(dataArr)
                    setAddressArr(dataArr)
                })
            })

    }, [setAddressArr,setProfile]);
    //     
    // });

    return (
        <div className="mainTrack">
            <nav className="navbarTrack">
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
            <div className="upload">
                <div className="uploadWrapper">
                    <div className="petDescriptionInput">
                        <label className="descLabel">Please enter a description</label>
                        <input value={description} className="descInput" onChange={(e) => { setDescription(e.target.value); }} ></input>
                    </div>
                    <div className="middleUpload">
                        <div className="dateInput">
                            <label className="descLabel">Last Seen</label>
                            <input value={date} className="dateBox" type="date" onChange={(e) => { setDate(e.target.value); }} ></input>
                        </div>
                        <div className="uploadPhoto">
                        <label className="descLabel">Photo</label>
                        <input className="photoBox" ref={inputHandler} type="file" title = "Choose a video please"></input>
                        <button className="selectButton" onClick={() => {inputHandler.current.click()}} >SELECT</button>
                        </div>
                    </div>

                    <div className="uploadProfile">
                        <button onClick={handleSubmit} className="uploadButton">Upload</button>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="contentWrapper">
                <div className="profileCardWrapper">
                                <div className="profileCard">
                                    <div className="profilePhotoDiv">
                                        <img className="pfp" src={cat}></img>
                                    </div>
                                    <div className="descriptionDiv">
                                        <div className="description">
                                            <p className="petDescription">Harvey is a one of the really hyper and energetic ones. She loves playing with you and knows a few tricks herself. Fetch and run are the two commands she knows how to respond to. You would have one hell of a time playing with her!</p>
                                        </div>
                                        <div className="date">
                                            <h1 className="dateText">2022-6-12</h1>
                                        </div>
                                    </div>
                                    <div className="locationDiv">
                                        <div className="locationHeaderDiv">
                                            <h1 className="locHeaderText">Possible Locations</h1>
                                        </div>
                                        <div className="locations">
                                    
                                            <ul>
                                               <li>Dindoshi, Mumbai, MH, India</li>
                                               <li>Yashodham, Mumbai, MH, India</li>
                                               <li>Gokuldham, Mumbai, MH, India</li>
                                               <li>Goregaon, Mumbai, MH, India</li>
                                               <li>Suchidham, Mumbai, MH, India</li>
                                               <li>Oberoi, Mumbai, MH, India</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="profileCardWrapper">
                                <div className="profileCard">
                                    <div className="profilePhotoDiv">
                                        <img className="pfp" src={doggy}></img>
                                    </div>
                                    <div className="descriptionDiv">
                                        <div className="description">
                                            <p className="petDescription">Beau is the most beautiful dog I have ever seen. Her eyes are a beautiful shade of brown and her intelligence is shocking to say the least. Despite being on the roads, she is one of the most well trained dogs I have seen and would love for her to find an amazing home.</p>
                                        </div>
                                        <div className="date">
                                            <h1 className="dateText">2022-05-21</h1>
                                        </div>
                                    </div>
                                    <div className="locationDiv">
                                        <div className="locationHeaderDiv">
                                            <h1 className="locHeaderText">Possible Locations</h1>
                                        </div>
                                        <div className="locations">
                                    
                                            <ul>
                                                <li>Andheri, Mumbai, MH, India</li>
                                               <li>JP Nagar, Mumbai, MH, India</li>
                                               <li>Juhu, Mumbai, MH, India</li>
                                               <li>Versova, Mumbai, MH, India</li>
                                               <li>Amboli, Mumbai, MH, India</li>
                                               <li>Oberoi, Mumbai, MH, India</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    {profile.map((e, key) => {
                        return (
                            <div className="profileCardWrapper">
                                <div className="profileCard">
                                    <div className="profilePhotoDiv">
                                        <img className="pfp" src={dog}></img>
                                    </div>
                                    <div className="descriptionDiv">
                                        <div className="description">
                                            <p className="petDescription">{e.description}</p>
                                        </div>
                                        <div className="date">
                                            <h1 className="dateText">{e.date}</h1>
                                        </div>
                                    </div>
                                    <div className="locationDiv">
                                        <div className="locationHeaderDiv">
                                            <h1 className="locHeaderText">Possible Locations</h1>
                                        </div>
                                        <div className="locations">
                                    
                                            <ul>
                                                {e.location.map((a) => {
                                                    return (
                                                        <li>{a}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
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