import "./track.css";
import { useState, useEffect } from "react";
import logo from "../../Assets/logo.png";
import dog from '../../Assets/dog.jpg';
import { useRef } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'
import { IconContext } from "react-icons";
import { Wrapper } from "@googlemaps/react-wrapper";
import axios from "axios";



export const Track = (props) => {
    const inputHandler = useRef(null);

    const [address, setAddress] = useState([]);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [profile, setProfile] = useState([])
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    const handleSubmit = (e) => {
        console.log(description)
        console.log(date)
        axios.get(`http://api.positionstack.com/v1/reverse?access_key=46d11b9e3e0e7bc6e04c0266bb8d4b8b&query=${`${latitude},${longitude}`}`)
            .then((res) => {
                const resdata = res.data.data
                resdata.forEach((e) => {
                    const data = address;
                    data.push(`${e.neighbourhood}, ${e.label}`)
                    setAddress(data)
                    console.log(address)
                })
            })
        axios.get(`https://ap-south-1.aws.data.mongodb-api.com/app/cfg2022-zkswz/endpoint/addprofile?description=${description}&date=${date}`)
        
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

        axios.get(`http://api.positionstack.com/v1/reverse?access_key=46d11b9e3e0e7bc6e04c0266bb8d4b8b&query=${`${latitude},${longitude}`}`)
            .then((res) => {
                const resdata = res.data.data
                resdata.forEach((e) => {
                    const data = address;
                    data.push(`${e.neighbourhood}, ${e.label}`)
                    setAddress(data)
                    console.log(address)
                })
            })

    }, []);
    //     
    // });

    return (
        <div className="mainTrack">
            <nav className="navbarTrack">
                <div className="topLogo">
                    <img className="phLogoNav" src={logo}></img>
                </div>
                <div className="menu">
                    <a className="menuItemTrack" href="/">
                        HOME
                    </a>
                    <a className="menuItemTrack" href="#">
                        TRACK
                    </a>
                    <a className="menuItemTrack" href="/donations">
                        DONATIONS
                    </a>
                    <a className="menuItemTrack" href="#">
                        VETS
                    </a>
                    <a className="menuItemTrack" href="#">
                        PETCARE
                    </a>
                    <a className="menuItemTrack" href="#">
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
                                                <li>Bandra F, MMK College, Mumbai, MH, India</li>
                                                <li>Bandra F, R D National College Of Arts & Commerce, Mumbai, MH, India</li>
                                                <li>Bandra F, Shree Prasad House, Mumbai, MH, India</li>
                                                <li>Bandra F, TSEC College, Mumbai, MH, India</li>
                                                <li>Bandra F, National College, Mumbai, MH, India</li>
                                                <li>Bandra F, Kohinoor Hospital, Mumbai, MH, India</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}