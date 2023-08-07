import React from 'react';

const ContractDesc = (props) => {
  const checkDescInput = (e) => {};

  return (
    <div>
      <div>Gym Contract</div>
      <div>
        <input
          id='contract-desc'
          name='contract-desc'
          type='text'
          onChange={(e) => {
            props.pushContractChanges('whyDesc', e.target.value);
          }}
          value={props.whyDesc}
        />
        <button
          className='contract-button-next'
          onClick={() => {
            props.nextViewHandler('Contract Tangibles');
          }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ContractDesc;
