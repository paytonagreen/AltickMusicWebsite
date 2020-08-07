import React from 'react';
import { BrowserRouter as Link} from 'react-router-dom';


const NavBar = () => {
  return (
    <div>
      <header>
        <div className="flex-container container">
            <Link className="home-link" to="/"><h3 className="logo"><span className="secondary-text">DL Altick</span> Restoration & Repair</h3></Link>
            <nav>
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