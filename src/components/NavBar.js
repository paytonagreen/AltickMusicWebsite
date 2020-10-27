import React, {useEffect } from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {

  useEffect(() => {
  const navbar = document.querySelector('header');
  let scrolled = false;
    
    window.onscroll = () => {
      if(window.pageYOffset > 100) {
        navbar.classList.add('scrolled');
        if (!scrolled) {
          navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(() => {
          navbar.style.transform = 'translateY(0px)';
          scrolled = true;
        }, 200)
      } else {
        navbar.classList.remove('scrolled');
        scrolled = false;
      }
    };
  });

  return (
    <div>
      <header>
        <div className="flex-container container">
            <Link className="home-link" to="/"><h3 className="logo"><span className="secondary-text">DL Altick</span> Restoration & Repair</h3></Link>
            <nav>
                {/* <button onClick={() => setHamburgerOpen(!hamburgerOpen)} id="hamburger-button"><div/><div/><div/></button> */}
                  <div className="navbar">
                      <ul>
                          <Link className="restoration-link" to="/restoration"><li>Restoration</li></Link>
                          <Link className="repair-link" to="/repair"><li>Repair</li></Link>
                          <Link className="store-link" to="/store-placeholder"><li>For Sale</li></Link>
                      </ul>
                  </div>
            </nav>
        </div>
      </header>
    </div>
  )
}

export default NavBar;