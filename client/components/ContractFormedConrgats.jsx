import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContractFormedCongrats = (props) => {
  const nav = useNavigate();
  return (
    <div>
      Contract In Blood Formed....CONGRATS!!!
      <button
        onClick={() => {
          nav('/');
        }}>
        Back to Home Page
      </button>
    </div>
  );
};

export default ContractFormedCongrats;
