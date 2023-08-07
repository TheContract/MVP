import React, { useState } from 'react';
import ContractDesc from './ContractDesc.jsx';
import ContractTangibles from './ContractTangibles.jsx';
import ContractBuddies from './ContractBuddies.jsx';
import ContractOverview from './ContractOverview.jsx';

//temporary import for this component
import { v4 as uuidv4 } from 'uuid';

const ContractForm = () => {
  const contractFormSteps = [
    'Contract Desc',
    'Contract Tangibles',
    'Contract Partners',
    'Forms Composed Overview',
    'Contract In Blood Finished',
  ];
  const [currentView, setCurrentView] = useState(contractFormSteps[0]);
  const [contractDetails, updateContractDetails] = useState({
    whyDesc: '',
    tangibles: [
      {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        desc: 'yolo',
        count: 2,
        numberOfWeeks: 3,
      },
    ],
    buddies: [],
  });

  const pushContractChanges = (targetField, info) => {
    updateContractDetails({ ...contractDetails, [targetField]: info });
  };

  const nextViewHandler = (whatToView) => {
    setCurrentView(whatToView);
  };

  return (
    <div id='contractForm'>
      {currentView === 'Contract Desc' && (
        <ContractDesc
          nextViewHandler={nextViewHandler}
          whyDesc={contractDetails['whyDesc']}
          pushContractChanges={pushContractChanges}></ContractDesc>
      )}
      {currentView === 'Contract Tangibles' && (
        <ContractTangibles
          nextViewHandler={nextViewHandler}
          tangibles={contractDetails['tangibles']}
          pushContractChanges={pushContractChanges}></ContractTangibles>
      )}
      {currentView === 'Contract Partners' && (
        <ContractBuddies
          nextViewHandler={nextViewHandler}
          buddies={contractDetails['buddies']}
          pushContractChanges={pushContractChanges}></ContractBuddies>
      )}
      {currentView === 'Contract Composed Overview' && (
        <ContractOverview
          theContract={contractDetails}
          nextViewHandler={nextViewHandler}
          pushContractChanges={pushContractChanges}></ContractOverview>
      )}
      {currentView === 'Contract In Blood Formed' && (
        <ContractOverview
          theContract={theContract}
          nextViewHandler={nextViewHandler}></ContractOverview>
      )}
    </div>
  );
};

export default ContractForm;
