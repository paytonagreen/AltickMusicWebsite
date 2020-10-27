import React from 'react';
import Wurli2 from '../img/wurli-2.jpg'

const RestorationMain = () => {

  return (
    <div>
    <section id="examples" className="section-padding flex-grid">
      <div className="section-header">
        <h2><span class="secondary-text">Back To Life</span></h2>
        <p>Here at DL Altick, we believe in doing our best to make old new again. We treasure the craftsmanship of vintage equipment, and work hard to use the best of vintage techniques in tandem with modern options.</p>
      </div>
      <div id="examples-flex-grid" class="row">
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