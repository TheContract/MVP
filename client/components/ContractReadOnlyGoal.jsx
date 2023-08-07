import React from 'react';

const ContractReadOnlyGoal = (props) => {
  return (
    <div>
      <div id='contractTheme'>Gym Contract</div>
      <div id='contractReadOnlyGoal'>{props.goal}</div>
    </div>
  );
};

export default ContractReadOnlyGoal;
