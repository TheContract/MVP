import React from 'react';

const ContractReadOnlyBuddyRow = (props) => {
  return (
    <div
      key={props.buddy['id']}
      id={props.buddy['id']}
      className='contractReadBuddyRow'>
      <div className='buddysNameContainer'>Name:{props.buddy['name']}</div>{' '}
      <div className='buddysPhoneNumberContainer'>
        Phone Number:{props.buddy['phoneNumber']}
      </div>
      <button
        className='button-delete'
        onClick={(e) => {
          props.deleteBuddyHandler(props.id);
        }}>
        Delete
      </button>
    </div>
  );
};

export default ContractReadOnlyBuddyRow;
