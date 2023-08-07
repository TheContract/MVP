import React, { useState } from 'react';

const ContractEditableGoal = (props) => {
  const [tangiblesErrorsMessage, setTangiblesErrorMessage] = useState('');

  const checkGoalBeforeNext = () => {};

  return (
    <div>
      <div>Gym Contract</div>
      <div>
        <label htmlFor='contract-goal'>What is your Goal?</label>
        <input
          id='contract-goal'
          name='contract-goal'
          type='text'
          onChange={(e) => {
            props.pushContractChanges('goal', e.target.value);
          }}
          value={props.goal}
        />
        <div id='tangiblesErrorMessageDisplay'>{props.errorMessage}</div>
        <div>
          <button
            className='contract-button-next'
            onClick={() => {
              props.inputsErrorHandler('goal');
            }}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractEditableGoal;
