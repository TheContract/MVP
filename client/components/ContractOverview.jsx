import React, { useState, useEffect } from 'react';
import ContractReadOnlyTangibleRow from './ContractReadOnlyTangibleRow.jsx';

const ContractOverview = (props) => {
  const contractDesc = props.theContract['desc'];
  const contractTangibles = props.theContract['tangibles'];
  const contractBuddies = props.theContract['buddies'];

  //Create layout for read-only rows for contract tangibles

  //Create layout for read-only rows for contract buddies

  return (
    <div>
      Contract Overview
      <div id='contract-desc'>{contractDesc}</div>
      <div id='contractTangibles'>
        {contractTangibles.map((tangible, index) => (
          <ContractReadOnlyTangibleRow
            id={index}
            tangible={tangible}
            key={tangible['id']}
          />
        ))}
      </div>
      <div id='overviewErrorMessageDisplay'>{props.errorMessage}</div>
      <button
        className='contract-button-next'
        onClick={() => {
          props.inputsErrorHandler('overview');
        }}>
        Sign In Blood
      </button>
    </div>
  );
};

export default ContractOverview;
