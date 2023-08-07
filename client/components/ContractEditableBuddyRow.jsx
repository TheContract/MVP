import React, { useState } from 'react';

const ContractEditableBuddyRow = (props) => {
  return (
    <div
      key={props.buddy['id']}
      id={props.buddy['id']}
      className='contractEditableBuddyRow'>
      <div className='buddysNameContainer'>
        <label htmlFor={`buddyName${props.id}`}>Name:</label>
        <input
          id={`buddyName${props.id}`}
          className='buddysName'
          value={props.buddy['name']}
          onChange={(e) => {
            props.updateBuddyHandler(props.id, 'name', e.target.value);
          }}
        />
      </div>{' '}
      <div className='buddysPhoneNumberContainer'>
        <label htmlFor={`buddyPhoneNumber${props.id}`}>Phone Number:</label>
        <input
          id={`buddyPhoneNumber${props.id}`}
          className='buddysPhoneNumber'
          value={props.buddy['phoneNumber']}
          onChange={(e) => {
            props.updateBuddyHandler(props.id, 'phoneNumber', e.target.value);
          }}
        />
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

export default ContractEditableBuddyRow;
