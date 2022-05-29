import React from "react";
import Links from "./Links";
import user from "../data/user";

function About(props) {
  /* If props.bio is passed in display <p>. */
  if (props.bio) {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{props.bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        {/* add your <Links /> component here */}
        <Links github = {user.links.github} 
               linkedin = {user.links.linkedin}
        />
      </div>
    );
  }

  /* If props.bio is not passed or is an empty string in do not display <p>. */
  if (!props.bio || props.bio === "") {
    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        {/* add your <Links /> component here */}
        <Links />
      </div>
    );
  }
  
}

export default About;
