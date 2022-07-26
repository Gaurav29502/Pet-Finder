import React from "react";
import { useState } from "react";
import './community.css'

export const Community = (props) => {
    return(
        <div className="main">
      <nav className="navbarHome">
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
          <a className="menuItem" href="/community">
            COMMUNITY
          </a>
        </div>
      </nav>
      </div>
    )

}