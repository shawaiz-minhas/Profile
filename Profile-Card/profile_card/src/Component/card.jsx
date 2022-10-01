import React from "react";
import pic from "./imges/profile.jpeg";
import SocialMedia from "./social_link";
import Hobbies from "./hobbies";
import About from "./about";
import Buttons from "./buttons";

function Card(){
    return(

<div className="card">
      <div className="top-section">
        <img src={pic} alt="profile" />
        <h3 className="name">Shawaiz Minhas </h3>
        <p className="bio">Frontend Developer</p>
        <p className="web">minhasproduction.000webhostapp.com</p>
        <Buttons />
        <div className="main">
          <About />
          <Hobbies />
        </div>
      </div>
      <SocialMedia />
    </div>

    )
}
export default Card