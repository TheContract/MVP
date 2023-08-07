import React from 'react';

const ContractReadOnlyTangibleRow = (props) => {
  return (
    <div key={props.tangible['id']} className='tangibleRow'>
      {`I will ${props.tangible['desc']} for ${props.tangible['count']} times a week, for ${props.tangible['numberOfWeeks']} weeks.`}
      <button
        className='button-delete'
        onClick={(e) => {
          props.deleteTangibleHandler(props.id);
        }}>
        Delete
      </button>
    </div>
  );
};

export default ContractReadOnlyTangibleRow;
