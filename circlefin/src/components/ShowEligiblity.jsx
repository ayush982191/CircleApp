import React, { useState, useEffect } from 'react';
import Eligiblity from './Eligiblity';
import Loading from './Loading';

const ShowEligibility = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading((prev)=>false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            {isLoading ? <Loading/> : <Eligiblity/>}
        </div>
    );
};

export default ShowEligibility;
