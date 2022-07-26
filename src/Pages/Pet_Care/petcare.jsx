import React from "react";
import { useState } from "react";
import CardItem from './CardItem';
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'
import { IconContext } from "react-icons";
import './petcare.css'

export const PetCare = (props) => {
    return (
        <div className="main">
            <nav className="navbarPetcare">
        <div className="topLogo">
          <h1 className="pawshunger">Paws Hunger</h1>
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

            <div className='cards testy'>
                <h1 className= 'headerText'>Pet Blogs</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/img-9.jpg'
                                text='Potty Training your rescue dog'
                                label='Most viewed'
                                path='https://www.rescuedogs101.com/potty-training-rescue-dog/'
                            />
                            <CardItem
                                src='images/img-2.jpg'
                                text='Kelowna dog rescue selling blueberry bushes in fundraiser'
                                label='Most viewed'
                                path='https://globalnews.ca/news/8949419/kelowna-dog-rescue-selling-blueberry-bushes-in-fundraiser/'
                            />
        
                            <CardItem
                                src='images/img-3.jpg'
                                text='Maxi’s Owner Passed Away—Can You Love and Comfort Her?'
                                label='Recent'
                                path='https://www.peta.org/blog/maxi-dog-peta-adoptable-animals/'
                            />
                            <CardItem
                                src='images/img-4.jpg'
                                text='Meet the Dog Who Helped Inspire a National News Story: Lady, Finally Unchained'
                                label='Recent'
                                path='https://www.peta.org/blog/meet-the-dog-who-helped-inspire-a-national-news-story-lady-finally-unchained/'
                            />
                            <CardItem
                                src='images/img-8.jpg'
                                text='Top reasons to adopt pets'
                                label='Top'
                                path='https://www.humanesociety.org/resources/top-reasons-adopt-pets'
                            />
                        </ul>
                    </div>
                </div>
            </div>

            <div className='cards'>
            <h1 className='headerTextBlack'>Diet for pets</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items '>
                            <CardItem
                                src='images/img-9.jpg'
                                text='Potty Training your rescue dog'
                                label='Most viewed'
                                path='https://www.rescuedogs101.com/potty-training-rescue-dog/'
                            />
                            <CardItem
                                src='images/img-2.jpg'
                                text='Kelowna dog rescue selling blueberry bushes in fundraiser'
                                label='Most viewed'
                                path='https://globalnews.ca/news/8949419/kelowna-dog-rescue-selling-blueberry-bushes-in-fundraiser/'
                            />
        
                            <CardItem
                                src='images/img-3.jpg'
                                text='Maxi’s Owner Passed Away—Can You Love and Comfort Her?'
                                label='Recent'
                                path='https://www.peta.org/blog/maxi-dog-peta-adoptable-animals/'
                            />
                            <CardItem
                                src='images/img-4.jpg'
                                text='Meet the Dog Who Helped Inspire a National News Story: Lady, Finally Unchained'
                                label='Recent'
                                path='https://www.peta.org/blog/meet-the-dog-who-helped-inspire-a-national-news-story-lady-finally-unchained/'
                            />
                            <CardItem
                                src='images/img-8.jpg'
                                text='Top reasons to adopt pets'
                                label='Top'
                                path='https://www.humanesociety.org/resources/top-reasons-adopt-pets'
                            />
                        </ul>
                    </div>
                </div>
            </div>

            <div className='cards testy'>
            <h1 className='headerText'>Love for pets</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items demo'>
                            <CardItem
                                src='images/img-9.jpg'
                                text='Potty Training your rescue dog'
                                label='Most viewed'
                                path='https://www.rescuedogs101.com/potty-training-rescue-dog/'
                            />
                            <CardItem
                                src='images/img-2.jpg'
                                text='Kelowna dog rescue selling blueberry bushes in fundraiser'
                                label='Most viewed'
                                path='https://globalnews.ca/news/8949419/kelowna-dog-rescue-selling-blueberry-bushes-in-fundraiser/'
                            />
        
                            <CardItem
                                src='images/img-3.jpg'
                                text='Maxi’s Owner Passed Away—Can You Love and Comfort Her?'
                                label='Recent'
                                path='https://www.peta.org/blog/maxi-dog-peta-adoptable-animals/'
                            />
                            <CardItem
                                src='images/img-4.jpg'
                                text='Meet the Dog Who Helped Inspire a National News Story: Lady, Finally Unchained'
                                label='Recent'
                                path='https://www.peta.org/blog/meet-the-dog-who-helped-inspire-a-national-news-story-lady-finally-unchained/'
                            />
                            <CardItem
                                src='images/img-8.jpg'
                                text='Top reasons to adopt pets'
                                label='Top'
                                path='https://www.humanesociety.org/resources/top-reasons-adopt-pets'
                            />
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footerDiv" style={{ 'height': '10vh' }}>
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