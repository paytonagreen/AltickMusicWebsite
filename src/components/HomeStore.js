import React from 'react';
import { Link } from 'react-router-dom';
import Rhodes from '../img/rhodes-1.jpg';

const HomeStore = () => {
  return (
    <section id="for-sale">
        <div className="flex-columns column-reverse">
            <div className="column-1">
                <img src={Rhodes} alt=""/>
            </div>
            <div className="column-2 background-coral">
                <h2>For Sale</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tenetur suscipit. Commodi perspiciatis iusto pariatur, architecto non, officiis quidem magnam sunt rem autem totam quisquam repudiandae consectetur quos repellat eius vitae cupiditate voluptates optio hic veritatis. Eaque vel et nemo.</p>
                <Link to="/store-placeholder" className="btn-blue">See His Work</Link>
            </div>
        </div>
    </section>
  )
};

export default HomeStore;