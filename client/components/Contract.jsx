import React, { useState, useEffect } from "react";
import axios from "axios";

const Contract = () => {
    const [contractInfo, setContractInfo] = useState();
    const [loading, setLoading] = useState(true);
    const [errorStatus, setError] = useState();

    useEffect(() => {
        const findContract = async () => {
            try {
                let result = axios.get('/api/contract')
                .then((data) => {
                    setContractInfo(data.data)
                    setLoading(false)
                })
            }

            catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        findContract();
    }, [])

    if (loading) {
        return <div>
            <p>Loading...</p>
            </div>;
      }
    
    if (errorStatus) {
        return <div>
            <p>Error</p>
        </div>;
    }
    
    const username = 'Oliver'
    const date = 'august 12th';
    let habit = 'Loading...' 
    console.log('the contract is')
    console.log(contractInfo)
    if (contractInfo.tangibles[0]) {
        habit = contractInfo.tangibles[0].desc;
    }
    let frequency = 'Loading...'
    if (contractInfo.tangibles[0].count) {
        frequency = contractInfo.tangibles[0].count;
    }
    let duration = 'Loading...'
    if (contractInfo.tangibles[0]) {
        duration = contractInfo.tangibles[0].numberOfWeeks;
    }

    return (
        <div>
            <p>I, {username} commited to {habit} {frequency} times per week for {duration} weeks.</p>
            <p>signed</p>
        </div>
    );
}
export default Contract;
