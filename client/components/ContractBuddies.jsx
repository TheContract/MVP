import React from 'react';

const ContractBuddies = (props) => {
  return (
    <div>
      <div>
        Contract Buddies
        <button
          class='contract-button-next'
          onClick={() => {
            props.nextViewHandler('Contract Composed Overview');
          }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ContractBuddies;
