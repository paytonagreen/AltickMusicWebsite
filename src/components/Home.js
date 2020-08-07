import React from 'react';
import HomeShowcase from './HomeShowcase';
import HomeAbout from './HomeAbout';
import HomeRestoration from './HomeRestoration';
import HomeRepair from './HomeRepair';
import HomeStore from './HomeStore';

const Home = () => {
  return (
    <div>
      <HomeShowcase/>
      <HomeAbout/>
      <HomeRestoration/>
      <HomeRepair/>
      <HomeStore/>
    </div>
  )
}

export default Home;