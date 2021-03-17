import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

const eyeColorMapper = {
  "blue": BlueBaby,
  "sun": SunBaby,
  "glowing": GlowingBaby
}
// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({ name, id, hobby, eyecolor}) {
  const [weight, setWeight] = useState(0)
  const height = weight + 200
  
  function handleChangeWeight(e) {
    e.target.name === "+" ? setWeight(weight + 1) : setWeight(weight - 1)
  }

  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight: {weight}</h3>
      <h3>Hobby: {hobby}</h3>
      <h4>Eye Color: {eyecolor}</h4>

      <button onClick={handleChangeWeight} name="+">Increase Weight</button>
      <button onClick={handleChangeWeight} name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorMapper[eyecolor]}
          style={{ height: height}}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
