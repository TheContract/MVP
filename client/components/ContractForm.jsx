import React, { useState } from 'react';
import ContractEditableGoal from './ContractEditableGoal.jsx';
import ContractTangibles from './ContractTangibles.jsx';
import ContractBuddies from './ContractBuddies.jsx';
import ContractOverview from './ContractOverview.jsx';

//temporary import for this component
import { v4 as uuidv4 } from 'uuid';

const ContractForm = () => {
  const contractFormSteps = [
    'Contract Goal',
    'Contract Tangibles',
    'Contract Partners',
    'Forms Composed Overview',
    'Contract In Blood Finished',
  ];

  //states listed for currentView, ContractDetails, and errorMessage
  const [currentView, setCurrentView] = useState(contractFormSteps[0]);
  const [contractDetails, updateContractDetails] = useState({
    goal: '',
    tangibles: [
      {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        desc: 'yolo',
        count: 2,
        numberOfWeeks: 3,
      },
    ],
    buddies: [
      {
        id: '9b1deb4d-3b7d-4bad-9bed-2b0d7b3dcb6d',
        name: 'Olivers GF',
        phoneNumber: '',
        pushNoteToPhone: true,
        //email: '',
        //pushNoteToEmail: false,
      },
    ],
  });
  const [errorMessage, setErrorMessage] = useState('');

  const pushContractChanges = (targetField, info) => {
    updateContractDetails({ ...contractDetails, [targetField]: info });
  };

  const nextViewHandler = (whatToView) => {
    setCurrentView(whatToView);
  };

  const checkContractsGoal = () => {
    incompleteRequiredFieldFound = false;
    if (!props.goal) {
      setTangiblesErrorMessage(
        `Please fill out all the fields, or remove the tangibles you don't have a complete plan for`
      );
      incompleteRequiredFieldFound = true;
    } else {
      setTangiblesErrorMessage('');
      props.nextViewHandler('Contract Tangibles');
    }
    return incompleteRequiredFieldFound;
  };

  const checkContractsTangibles = () => {
    incompleteRequiredFieldFound = false;
    for (let i = 0; i < copyOfTangibles.length; i++) {
      if (
        !copyOfTangibles[i]['desc'] ||
        !copyOfTangibles[i]['count'] ||
        !copyOfTangibles[i]['numberOfWeeks']
      ) {
        incompleteRequiredFieldFound = true;
        break;
      }
    }
    if (incompleteRequiredFieldFound)
      setErrorMessage(
        `Please fill out all the fields, or remove the tangibles you don't have a complete plan for`
      );
    else {
      setErrorMessage('');
      nextViewHandler('Contract Partners');
    }
    return incompleteRequiredFieldFound;
  };

  const checkContractsBuddies = () => {
    let incompleteRequiredFieldFound = false;
    for (let i = 0; i < props.buddies.length; i++) {
      if (
        !props.buddies[i]['name'] ||
        (!props.buddies[i]['phoneNumber'] && !props.buddies[i]['email'])
      ) {
        incompleteRequiredFieldFound = false;
        break;
      }
    }
    if (incompleteRequiredFieldFound)
      setErrorMessage(
        `Please fill out all Accountability Partners names and at least a Phone Number or Email for each one, or delete the Accountability Partner`
      );
    else {
      setErrorMessage('');
      props.nextViewHandler('Contract Composed Overview');
    }
  };

  const inputsErrorHandler = (formDetailTarget) => {
    incompleteRequiredFieldFound = false;
    if (formDetailTarget === 'overview' || formDetailTarget === 'goal')
      incompleteRequiredFieldFound = checkContractsGoal();
    if (
      formDetailTarget === 'overview' ||
      (formDetailTarget === 'tangibles' && !incompleteRequiredFieldFound)
    )
      incompleteRequiredFieldFound = checkContractsTangibles();
    if (
      formDetailTarget === 'overview' ||
      (formDetailTarget === 'buddies' && !incompleteRequiredFieldFound)
    )
      incompleteRequiredFieldFound = checkContractsBuddies();
    return incompleteRequiredFieldFound;
  };

  return (
    <div id='contractForm'>
      {currentView === 'Contract Goal' && (
        <ContractEditableGoal
          nextViewHandler={nextViewHandler}
          goal={contractDetails['goal']}
          pushContractChanges={pushContractChanges}
          errorMessage={errorMessage}
          inputsErrorHandler={inputsErrorHandler}></ContractEditableGoal>
      )}
      {currentView === 'Contract Tangibles' && (
        <ContractTangibles
          nextViewHandler={nextViewHandler}
          tangibles={contractDetails['tangibles']}
          pushContractChanges={pushContractChanges}
          errorMessage={errorMessage}
          inputsErrorHandler={inputsErrorHandler}></ContractTangibles>
      )}
      {currentView === 'Contract Partners' && (
        <ContractBuddies
          nextViewHandler={nextViewHandler}
          buddies={contractDetails['buddies']}
          pushContractChanges={pushContractChanges}
          errorMessage={errorMessage}
          inputsErrorHandler={inputsErrorHandler}></ContractBuddies>
      )}
      {currentView === 'Contract Composed Overview' && (
        <ContractOverview
          theContract={contractDetails}
          nextViewHandler={nextViewHandler}
          pushContractChanges={pushContractChanges}
          errorMessage={errorMessage}
          inputsErrorHandler={inputsErrorHandler}></ContractOverview>
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
