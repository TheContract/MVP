import React, { useState } from 'react';
import ContractEditableTangibleRow from './ContractEditableTangibleRow.jsx';
import { v4 as uuidv4 } from 'uuid';

const ContractTangibles = (props) => {
  const [tangiblesErrorsMessage, setTangiblesErrorMessage] = useState('');

  const addTangibleHandler = () => {
    const tangiblesPlusOne = [
      ...props.tangibles,
      { id: uuidv4(), desc: '', count: 1, numberOfWeeks: 1 },
    ];
    props.pushContractChanges('tangibles', tangiblesPlusOne);
  };

  const updateTangibleHandler = (index, key, value) => {
    const copyOfTangibles = [...props.tangibles];
    copyOfTangibles[index][key] = value;
    props.pushContractChanges('tangibles', copyOfTangibles);
  };

  const deleteTangibleHandler = (tangiblesArrayId) => {
    const copyOfTangibles = props.tangibles.slice();
    copyOfTangibles.splice(tangiblesArrayId, 1);
    props.pushContractChanges('tangibles', copyOfTangibles);
  };

  const checkTangibleInputsBeforeNext = () => {};

  const tangibleRows = [];
  let i = 0;
  for (let i = 0; i < props.tangibles.length; i++) {
    tangibleRows.push(
      <ContractEditableTangibleRow
        id={i}
        tangible={props.tangibles[i]}
        key={props.tangibles[i]['id']}
        updateTangibleHandler={updateTangibleHandler}
        deleteTangibleHandler={deleteTangibleHandler}
      />
    );
  }
  return (
    <div>
      <div>
        Contract Tangibles
        <div id='listOfTangibles'>{tangibleRows}</div>
        <button
          className='contract-button-add'
          onClick={() => {
            addTangibleHandler();
          }}>
          Add A Tangible
        </button>
        <div id='tangiblesErrorMessageDisplay'>{props.errorMessage}</div>
        <div>
          <button
            className='contract-button-next'
            onClick={() => {
              props.inputsErrorHandler('tangibles');
            }}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractTangibles;
