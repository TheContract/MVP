import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeDefault = (props) => {
  const nav = useNavigate();

  return (
    <div id='homeDefault'>
      <div id='buttonContainer'>
        <button
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
      <div id='currentContractsContainer'>
        <ul>
          <li>Contract 1</li>
          <li>Contract 2</li>
        </ul>
      </div>
      <div id='buttonLogoutContainer'>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default HomeDefault;
