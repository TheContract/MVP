import React, { useState } from 'react';
import ContractEditableBuddyRow from './ContractEditableBuddyRow.jsx';

const ContractBuddies = (props) => {
  const [buddiesErrorsMessage, setBuddiesErrorMessage] = useState('');
  const addBuddyHandler = () => {
    const buddiesPlusOne = [
      ...props.buddies,
      {
        name: '',
        phoneNumber: '',
        pushNoteToPhone: false,
        email: '',
        pushNoteToEmail: false,
      },
    ];
    props.pushContractChanges('buddies', buddiesPlusOne);
  };

  const updateBuddyHandler = (index, key, value) => {
    const copyOfBuddies = [...props.buddies];
    copyOfBuddies[index][key] = value;
    props.pushContractChanges('buddies', copyOfBuddies);
  };

  const deleteBuddyHandler = (buddiesArrayId) => {
    const copyOfBuddies = [...props.buddies];
    copyOfBuddies.splice(buddiesArrayId, 1);
    props.pushContractChanges('buddies', copyOfBuddies);
  };

  const checkBuddyInputsBeforeNext = () => {};

  return (
    <div>
      <div>
        Contract Buddies
        {props.buddies.map((buddy, indexInArray) => (
          <ContractEditableBuddyRow
            id={indexInArray}
            buddy={buddy}
            key={buddy['id']}
            updateBuddyHandler={updateBuddyHandler}
            deleteBuddyHandler={deleteBuddyHandler}
          />
        ))}
        <button
          className='contract-button-add'
          onClick={() => {
            addBuddyHandler();
          }}>
          Add A Buddy
        </button>
        <div id='buddiesErrorMessageDisplay'>{props.errorMessage}</div>
        <div>
          <button
            className='contract-button-next'
            onClick={() => {
              inputsErrorHandler('buddies');
            }}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractBuddies;
