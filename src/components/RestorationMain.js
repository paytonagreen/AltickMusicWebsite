import React from 'react';
import Wurli2 from '../img/wurli-2.jpg'

const RestorationMain = () => {

  const itemsToggle = () => {
    const seeMore = document.querySelector('.see-more');

      if (seeMore.textContent === 'See More') {
        seeMore.textContent = 'See Less';
      } else {
        seeMore.textContent = 'See More'
      }
      document.querySelector('#examples-flex-grid').classList.toggle('row--hidden');
  }

  return (
    <div>
    <section id="examples" className="section-padding flex-grid">
      <div className="section-header">
        <h2><span class="secondary-text">Back To Life</span></h2>
        <p>Here at DL Altick, we believe in doing our best to make old new again. We treasure the craftsmanship of vintage equipment, and work hard to use the best of vintage techniques in tandem with modern options.</p>
      </div>
      <button 
        onClick={itemsToggle}
        className="btn see-more"
        >
          See More
        </button>
      <div id="examples-flex-grid" class="row row--hidden">
          <div class="column">
            <img src={Wurli2} alt=""/>
            <img src={Wurli2} alt=""/>
          </div>
          <div class="column">
            <img src={Wurli2} alt=""/>
            <img src={Wurli2} alt=""/>
          </div>
          <div class="column">
            <img src={Wurli2} alt=""/>
            <img src={Wurli2} alt=""/>
          </div>
        </div>
    </section>
    </div>
  )
};

export default RestorationMain;