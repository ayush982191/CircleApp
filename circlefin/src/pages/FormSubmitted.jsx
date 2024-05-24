import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import thankYou from "../assets/images/thankYou.png";
import { Link, useNavigate } from 'react-router-dom';

const FormSubmitted = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    const ShowThankYou = () => {
        return (
            <div className=' flex flex-col justify-center items-center bg-white'>
                <img src={thankYou} className='mt-10' alt="Thank You" />
                <h1 className='  text-4xl text-lime-500 font-bold'>
                    Congratulations!!
                </h1>
                <h3 className=' mt-4 text-2xl font-bold text-lime-500'>
                    We have submitted your Application, we will get back to you soon
                </h3>
                <div className='mt-5 flex gap-5 items-center '>
                <h2>Go to Home Page </h2>
               <Link to='/'> <button className='p-2 rounded-md bg-lime-300 hover:bg-lime-400' >Home</button></Link>
                </div>
                
            </div>
        );
    };

    return (
        <div className='mt-20'>
            {isLoading ? <Loading /> : <ShowThankYou />}
        </div>
    );
};

export default FormSubmitted;
