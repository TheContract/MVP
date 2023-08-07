import React, { useState, useEffect } from "react";

const Contract = async () => {
    const [contractInfo, setContractInfo] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const findContract = async () => {
            try {
                const foundContract = await fetch('./api/contract', {
                    method: "GET"
                  })
                setContractInfo(foundContract)
            }

            catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        findContract();
    }, [])

    if (loading) {
        return <div>Loading...</div>;
      }
    
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    
    const username = 'Oliver'
    const date = 'august 12th';
    const habit = contractInfo.tangibles[0].desc;
    const frequency = contractInfo.tangibles[0].count;
    const duration = contractInfo.tangibles[0].numberOfWeeks;
    
    return (
        <div>
            <p>I, {username} commited to {habit} {frequency} times per week for {duration} weeks.</p>
            <p>signed</p>
            <img></img>
        </div>
    )
}
export default Contract;
