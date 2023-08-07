import React from 'react';
import ContractEditableTangibleRow from './ContractEditableTangibleRow.jsx';
import { v4 as uuidv4 } from 'uuid';

const ContractTangibles = (props) => {
  const addTangibleHandler = () => {
    const copyOfTangibles = [
      ...props.tangibles,
      { id: uuidv4(), desc: '', count: 0, numberOfWeeks: 0 },
    ];
    props.pushContractChanges('tangibles', copyOfTangibles);
  };

  const updateTangibleHandler = (index, key, value) => {
    const copyOfTangibles = [...props.tangibles];
    copyOfTangibles[index][key] = value;
    props.pushContractChanges('tangibles', copyOfTangibles);
  };

  const deleteTangibleHandler = (tangiblesId) => {
    const copyOfTangibles = props.tangibles.slice();
    copyOfTangibles.splice(tangiblesId, 1);
    props.pushContractChanges('tangibles', copyOfTangibles);
  };

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
          Next
        </button>
        <button
          className='contract-button-next'
          onClick={() => {
            props.nextViewHandler('Contract Partners');
          }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ContractTangibles;
