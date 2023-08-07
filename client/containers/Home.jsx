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
  return (
    <div id='home'>
      <HomeDefault />
    </div>
  );
};
/*
<div id='currentView'>
        {currentView === 'Home' && ( <HomeDefault currentViewHandler={currentViewHandler} />)}
      </div>
*/
export default Home;
