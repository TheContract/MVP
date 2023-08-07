import React from 'react';

const ContractEditableTangibleRow = (props) => {
  return (
    <div key={props.tangible['id']} className='tangibleRow'>
      I will{' '}
      <input
        className='tangibles-desc'
        value={props.tangible['desc']}
        onChange={(e) => {
          props.updateTangibleHandler(props.id, 'desc', e.target.value);
        }}
      />{' '}
      for{' '}
      <input
        type='number'
        min='1'
        className='tangibles-count'
        value={props.tangible['count']}
        onChange={(e) => {
          props.updateTangibleHandler(props.id, 'count', e.target.value);
        }}
      />{' '}
      times a week, for{' '}
      <input
        type='number'
        min='1'
        className='tangibles-numberOfWeeks'
        value={props.tangible['numberOfWeeks']}
        onChange={(e) => {
          props.updateTangibleHandler(
            props.id,
            'numberOfWeeks',
            e.target.value
          );
        }}
      />{' '}
      weeks.{' '}
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

export default ContractEditableTangibleRow;
