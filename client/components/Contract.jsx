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

    if (contractInfo === null) {
        return <div>
        <p>No contracts yet! Create one below</p>
    </div>;
    }
    
    const username = 'Oliver'
    const date = 'august 12th';
    console.log('the contract is')
    console.log(contractInfo)
    
    let habit = "lift";
    if (contractInfo.tangibles[0]) {
        // habit = contractInfo.tangibles[0].desc;
    }
    let frequency = 'Loading...'
    if (contractInfo.tangibles[0].count) {
        frequency = contractInfo.tangibles[0].count;
    }
    let duration = 'Loading...'
    if (contractInfo.tangibles[0]) {
        duration = contractInfo.tangibles[0].numberOfWeeks;
    }

    const styles = {
        container: {
          border: '1px solid black',
          borderRadius: '10px',
          height: '300px',
          width: '600px',
          marginBottom: '20px',
          padding: '15px',
          fontFamily: 'Arial',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          fontSize : '24px'
          // backgroundColor: 'darkgrey'
          
        },
}

    return (
        <div style={styles.container}>
            <p>I, {username} commited to {habit} {frequency} times per week for {duration} weeks.</p>
        </div>
    );

    

} 

export default Contract;
