import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import StorePlaceholder from './StorePlaceholder';
import Restoration from './Restoration';
import Repair from './Repair';


const App = () => {
  useState(() => {
    return (
      
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" children={<Home/>}/>
          <Route path="/store-placeholder" children={<StorePlaceholder/>}/>
          <Route path="/restoration" children={<Restoration/>}/>
          <Route path="/repair" children={<Repair/>}/>
        </Switch>
      </Router>

  ) 
  }, [window.location.pathname])
  
  return (
      
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" children={<Home/>}/>
          <Route path="/store-placeholder" children={<StorePlaceholder/>}/>
          <Route path="/restoration" children={<Restoration/>}/>
          <Route path="/repair" children={<Repair/>}/>
        </Switch>
      </Router>

  ) 
}

export default App;