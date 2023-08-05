import React, { useState, useEffect } from 'react';
import HomeDefault from '../components/HomeDefault.jsx';

/*
Handlers:
createContractFormHandler
logoutHandler

States:
currentView [Home default, Contract Form Name and Description,
 Contract Form Quantifiable, Contract Form Accountability Partners]

useEffects:
fetch current contracts


*/
const Home = () => {
  const possibleViews = [
    'Home',
    'Contract Form Name and Description',
    'Contract Form Quantifiable',
    'Contract Form Accountability Partners',
    'Form Composed Overview',
  ];
  const [currentView, setCurrentView] = useState('Home');

  const currentViewHandler = (e, viewSwap) => {
    setCurrentView(viewSwap);
  };

  return (
    <div id='home'>
      <div id='currentView'>
        {currentView === 'Home' && (
          <HomeDefault currentViewHandler={currentViewHandler} />
        )}
      </div>
    </div>
  );
};

export default Home;
