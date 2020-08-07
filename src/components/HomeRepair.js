import React from 'react'
import { Link } from 'react-router-dom';
import Strat1 from '../img/strat-1.jpg';

const HomeRepair = () => {
  return (
    <section id="repair">
        <div className="flex-columns">
            <div className="column-1">
                <img src={Strat1} alt=""/>
            </div>
            <div className="column-2 background-blue">
                <h2>Amplifier & Instrument Repair</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tenetur suscipit. Commodi perspiciatis iusto pariatur, architecto non, officiis quidem magnam sunt rem autem totam quisquam repudiandae consectetur quos repellat eius vitae cupiditate voluptates optio hic veritatis. Eaque vel et nemo.</p>
                <Link to="/repair" className="btn">See His Work</Link>
            </div>
        </div>
    </section>
  )
}

export default HomeRepair;