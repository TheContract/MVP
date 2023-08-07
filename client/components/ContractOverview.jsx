import React, { useState, useEffect } from 'react';
import ContractReadOnlyTangibleRow from './ContractReadOnlyTangibleRow.jsx';

const ContractOverview = (props) => {
  const contractDesc = props.theContract['desc'];
  const contractTangibles = props.theContract['tangibles'];
  const contractBuddies = props.theContract['buddies'];

  //Create layout for read-only rows for contract tangibles

  //Create layout for read-only rows for contract buddies

  const checkContractsCompleteness = () => {
    const incompleteRequiredFieldFound = false;
    if (!props.theContract['goal']) {
      incompleteRequiredFieldFound = true;
      setErrorMessageForOverview(
        `Your goal needs to be defined. What are you trying to achieve?`
      );
    } else {
      for (let i = 0; i > theContract['tangibles'].length; i++) {
        if (!theContract['tangibles'][i]) {
          break;
        }
      }
    }
    if (!incompleteRequiredFieldFound) {
      fetch('', {
        method: POST,
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: props.theContract,
      });
    }
  };

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
        class='contract-button-next'
        onClick={() => {
          inputsErrorHandler('overview');
        }}>
        Sign In Blood
      </button>
    </div>
  );
};

export default ContractOverview;
