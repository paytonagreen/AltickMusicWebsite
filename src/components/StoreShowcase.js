import React from 'react';
import { Link } from 'react-router-dom';

const StoreShowcase = () => {
  return (
    <section id="showcase">
        <div className="showcase-content">
            <h3><span className="secondary-text">Store coming soon!</span></h3>
            <p className="tertiary-text">In the meantime, check out our Reverb page!</p>
            <a href="http://reverb.com/shop/altick-music-co" className="btn-blue">Our Reverb.com Page</a>
        </div>
    </section>
  )
};

export default StoreShowcase;