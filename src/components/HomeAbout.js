import React from 'react';
import { Link } from 'react-router-dom';
import Dustin1 from '../img/Dustin1.png'

const HomeAbout = () => {
  return (
    <div>
    <section id="about">
        <div className="flex-columns background-blue">
            <div className="column-1">
                <img src={Dustin1} alt="" />
            </div>
            <div className="column-2">
                <h2>About Dustin</h2>
                <p>Dustin Altick is a lover and caretaker of musical instruments of all kinds. His first love was of guitars, but his focus now is primarily on restoring and repairing vintage electric pianos, with a focus on Wurlitzer and Fender Rhodes.</p>
                <Link to="/restoration" className="btn">See Our Work</Link>
            </div>
        </div>
    </section>
    </div>
  )
};

export default HomeAbout;