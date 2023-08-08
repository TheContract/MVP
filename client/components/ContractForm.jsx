import React, { useState, useEffect } from 'react';
import ContractEditableGoal from './ContractEditableGoal.jsx';
import ContractTangibles from './ContractTangibles.jsx';
import ContractBuddies from './ContractBuddies.jsx';
import ContractOverview from './ContractOverview.jsx';
import ContractFormedCongrats from './ContractFormedConrgats.jsx';


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
    tangibles: [],
    buddies: [],
  });
  const [errorMessage, setErrorMessage] = useState('');

  const pushContractChanges = (targetField, info) => {
    updateContractDetails({ ...contractDetails, [targetField]: info });
  };

  const nextViewHandler = (whatToView) => {
    setCurrentView(whatToView);
  };

  const checkContractsGoal = () => {
    let incompleteRequiredFieldFound = false;
    if (!contractDetails['goal']) {
      setErrorMessage(
        `Establish your goal first before moving on. What are you trying to achieve?`
      );
      incompleteRequiredFieldFound = true;
    } else {
      setErrorMessage('');
      nextViewHandler('Contract Tangibles');
    }
    return incompleteRequiredFieldFound;
  };

  const checkContractsTangibles = () => {
    const copyOfTangibles = [...contractDetails['tangibles']];
    let incompleteRequiredFieldFound = false;
    if (copyOfTangibles.length === 0) {
      incompleteRequiredFieldFound = true;
      setErrorMessage(
        `Set at least 1 tangible goal for yourself. You got this`
      );
    } else {
      for (let i = 0; i < copyOfTangibles.length; i++) {
        if (
          !copyOfTangibles[i]['desc'] ||
          !copyOfTangibles[i]['count'] ||
          !copyOfTangibles[i]['numberOfWeeks']
        ) {
          incompleteRequiredFieldFound = true;
          setErrorMessage(
            `Please fill out all the fields, or remove the tangibles you don't have a complete plan for`
          );
          break;
        }
      }
    }
    if (!incompleteRequiredFieldFound) {
      setErrorMessage('');
      nextViewHandler('Contract Partners');
    }
    return incompleteRequiredFieldFound;
  };

  const checkContractsBuddies = () => {
    let incompleteRequiredFieldFound = false;

    if (contractDetails['buddies'].length === 0) {
      incompleteRequiredFieldFound = true;
      setErrorMessage(
        `Set at least 1 Friend To Help You Stay Accountable. We got your back!`
      );
    } else {
      for (let i = 0; i < contractDetails['buddies'].length; i++) {
        if (
          !contractDetails['buddies'][i]['name'] ||
          (!contractDetails['buddies'][i]['phoneNumber'] &&
            !contractDetails['buddies'][i]['email'])
        ) {
          incompleteRequiredFieldFound = false;
          setErrorMessage(
            `Please fill out all Accountability Partners names and at least a Phone Number or Email for each one, or delete the Accountability Partner`
          );
          break;
        }
      }
    }

    if (!incompleteRequiredFieldFound) {
      setErrorMessage('');
      nextViewHandler('Contract Composed Overview');
    }
    return incompleteRequiredFieldFound;
  };

  const inputsErrorHandler = (formDetailTarget) => {
    let incompleteRequiredFieldFound = false;
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
    if (formDetailTarget === 'overview' && !incompleteRequiredFieldFound) {
      console.log('contract details before fetch', contractDetails);
      fetch('./api/contract', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(contractDetails),
      })
        .then((promise) => promise.json())
        .then((data) => nextViewHandler('Contract In Blood Finished'))
        .catch((err) => console.log('error ocurred: ', err));
      
    }
    return incompleteRequiredFieldFound;
  };

  return (
    <div id='contractForm' className = "flex h-screen items-center justify-center flex-col" style = {{
      background: 'rgb(221,236,235)',
      background: 'linear-gradient(90deg, rgba(221,236,235,1) 0%, rgba(91,178,215,1) 98%)',
    }}>
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
        <ContractFormedCongrats
          theContract={theContract}
          nextViewHandler={nextViewHandler}></ContractFormedCongrats>
      )}
    </div>
  );
};

export default ContractForm;
