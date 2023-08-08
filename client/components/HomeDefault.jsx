import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Contract from './Contract.jsx';

const HomeDefault = (props) => {
  const nav = useNavigate();

  return (
    <div id='homeDefault' className="flex h-screen items-center justify-center flex-col" style = {{
      background: 'rgb(221,236,235)',
      background: 'linear-gradient(90deg, rgba(221,236,235,1) 0%, rgba(91,178,215,1) 98%)',
    }}>
    
      <div id='buttonContainer'>
        <button class = 'btn'
          onClick={(e) => {
            nav('/contractform');
            /*props.createContractFormHandle(
              e,
              'Contract Form Name and Description'
            );*/
          }}>
          Create
        </button>
      </div>
      <div>
      <h2 style = {{
        fontSize: '32px'
        
      }}>Your contract(s)</h2>
        <Contract></Contract>
      </div>
      <div id='currentContractsContainer'>
      </div>
      <div id='buttonLogoutContainer'>
        <button class = 'btn'>Logout</button>
      </div>
    </div>
  );
};

export default HomeDefault;
