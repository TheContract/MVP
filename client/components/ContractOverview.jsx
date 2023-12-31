import React, { useState, useEffect } from 'react';
import ContractReadOnlyTangibleRow from './ContractReadOnlyTangibleRow.jsx';
import ContractReadOnlyBuddyRow from './ContractReadOnlyBuddyRow.jsx';
import { v4 as uuidv4 } from 'uuid';

const ContractOverview = (props) => {
  const contractGoal = props.theContract['goal'];
  const contractTangibles = props.theContract['tangibles'];
  const contractBuddies = props.theContract['buddies'];

  //Create layout for read-only rows for contract tangibles

  //Create layout for read-only rows for contract buddies

  return (
    <div>
      Contract Overview
      <div class="contract-overview-container">
        <div className="title">Contract Goal</div>
        <div id='contract-goal'>Goal:{contractGoal}</div>
      </div>


      <div class="contract-overview-container">
        <div className="title">Contract Tangibles</div>
        <div id='contractTangibles'>
          {contractTangibles.map((tangible, index) => (
            <ContractReadOnlyTangibleRow
              id={index}
              tangible={tangible}
              key={uuidv4()}
            />
          ))}
        </div>
      </div>

      <div class="contract-overview-container">
        <div className="title">Contract Buddies</div>

        <div id='contractBuddies'>
          {contractBuddies.map((buddy, index) => (
            <ContractReadOnlyBuddyRow id={index} buddy={buddy} key={uuidv4()} />
          ))}
        </div>
      </div>
      <div id='overviewErrorMessageDisplay'>{props.errorMessage}</div>
      <button
        className='contract-button-next btn'
        onClick={() => {
          props.inputsErrorHandler('overview');
        }}>
        Sign In Blood
      </button>
    </div>
  );
};

export default ContractOverview;
